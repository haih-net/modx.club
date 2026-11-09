import './env'
import express, { type ErrorRequestHandler } from 'express'
import { logDevError } from './errorLogging'
import { createServer } from 'node:http'
import { listen, getServerUrls } from './listen'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
import { logEvent, startMetricsServer } from './observability'
import type { ServerBuild } from 'react-router'
import type { ViteDevServer } from 'vite'

import { setupGraphqlServer } from './middleware/graphql'
import { staticSchema } from './schema/static'

const dev = process.env.NODE_ENV === 'development'

let stopGraphql: (() => Promise<void>) | null = null
let vite: ViteDevServer | null = null
let stopping = false
let metricsServer: ReturnType<typeof startMetricsServer> = null

function setupShutdown(server: ReturnType<typeof createServer>) {
  const shutdown = async (signal: string) => {
    if (stopping) {
      return
    }
    stopping = true
    logEvent('info', 'shutdown', { signal })
    setTimeout(() => {
      logEvent('error', 'shutdown_timeout', { signal })
      process.exit(1)
    }, 5000).unref()

    try {
      metricsServer?.close()

      if (stopGraphql) {
        await stopGraphql()
      }

      if (vite) {
        await vite.close()
      }

      server.close(() => process.exit(0))
    } catch (error) {
      logEvent('error', 'shutdown_error', { signal })
      logDevError('shutdown.error', error)
      process.exit(1)
    }
  }

  process.on('SIGINT', () => shutdown('SIGINT'))
  process.on('SIGTERM', () => shutdown('SIGTERM'))
}

async function startServer() {
  const app = express()
  app.set('trust proxy', true)
  app.disable('x-powered-by')

  // Английские адреса перенаправляются до статики и обработчика страниц.
  app.use((req, res, next) => {
    if (!/^\/en(?:\/|$)/.test(req.path)) {
      return next()
    }
    const path = req.path.replace(/^\/en(?:\/|$)/, '')
    const query = req.originalUrl.slice(req.originalUrl.indexOf('?'))
    return res.redirect(
      301,
      `/${path.replace(/^\/+/, '')}${req.originalUrl.includes('?') ? query : ''}`,
    )
  })

  const httpServer = createServer(app)

  // GraphQL middleware
  stopGraphql = await setupGraphqlServer(
    app,
    httpServer,
    staticSchema,
    async ({ req, res }) => {
      res.setHeader('Cache-Control', 'no-store')
      return { req }
    },
  )

  const { createRequestHandler } = await import('@react-router/express')

  if (dev) {
    // Development: Vite dev server with HMR
    const { createServer: createVite } = await import('vite')
    vite = await createVite({
      server: { middlewareMode: true, ws: { server: httpServer } },
      appType: 'custom',
    })

    app.use(vite.middlewares)

    app.all(
      '/{*splat}',
      createRequestHandler({
        build: () => {
          if (!vite) {
            throw new Error('Can not create vite')
          }
          return vite.ssrLoadModule(
            'virtual:react-router/server-build',
          ) as unknown as Promise<ServerBuild>
        },
      }),
    )
  } else {
    // Production: serve static files and prebuilt SSR bundle
    app.use(
      express.static(resolve('shared'), { dotfiles: 'deny', index: false }),
    )
    const sirv = (await import('sirv')).default
    const staticFiles = sirv('build/client', { extensions: [] })
    app.use((req, res, next) => {
      // Пагинация хранится в файлах; запросы с page должны получить свой снимок, а не первый каталог.
      if (new URL(req.url, 'http://localhost').searchParams.has('page')) {
        return next()
      }
      return staticFiles(req, res, next)
    })

    const buildUrl: string = pathToFileURL(
      resolve('build/server/index.js'),
    ).href
    const build: ServerBuild = (await import(buildUrl)) as ServerBuild
    app.all('/{*splat}', createRequestHandler({ build }))
  }

  const logRequestError: ErrorRequestHandler = (error, req, _res, next) => {
    logDevError('http.error', error, { method: req.method, path: req.path })
    next(error)
  }
  app.use(logRequestError)

  metricsServer = startMetricsServer()
  setupShutdown(httpServer)

  const port = await listen(httpServer, Number(process.env.PORT || 3000))
  logEvent('info', 'server_ready', { port })
  process.stdout.write(`Сайт доступен: ${getServerUrls(port).join('\n')}\n`)
}

startServer().catch((err) => {
  console.error('Failed to start server:', err)
  process.exit(1)
})
