import { graphqlUploadExpress } from 'graphql-upload-minimal'
import type { Express } from 'express'
import type { Server } from 'node:http'
import {
  ApolloServer,
  type BaseContext,
  type ContextFunction,
} from '@apollo/server'
import {
  expressMiddleware,
  type ExpressContextFunctionArgument,
} from '@as-integrations/express5'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default'
import cors from 'cors'
import express from 'express'

import type { GraphQLSchema } from 'graphql'
import { graphqlObservability, logEvent } from 'server/observability'

export async function setupGraphqlMiddleware(
  app: Express,
  httpServer: Server,
): Promise<() => Promise<void>> {
  const { schema } = await import('server/schema')
  const { createContext } = await import('server/context')
  return setupGraphqlServer(app, httpServer, schema, async ({ req, res }) => {
    res.setHeader('Cache-Control', 'no-store')
    return createContext(req)
  })
}

export async function setupGraphqlServer<TContext extends BaseContext>(
  app: Express,
  httpServer: Server,
  schema: GraphQLSchema,
  context: ContextFunction<[ExpressContextFunctionArgument], TContext>,
): Promise<() => Promise<void>> {
  const apolloServer = new ApolloServer<TContext>({
    schema,
    stopOnTerminationSignals: false,
    introspection: true,
    includeStacktraceInErrorResponses: process.env.NODE_ENV === 'development',
    plugins: [
      graphqlObservability,
      ApolloServerPluginDrainHttpServer({ httpServer }),
      ApolloServerPluginLandingPageLocalDefault({ embed: true }),
    ],
    formatError: (error) => {
      if (process.env.NODE_ENV === 'development') {
        console.error('GraphQL Error', error)
      }
      return error
    },
  })

  await apolloServer.start()

  app.use(
    '/api',
    cors<cors.CorsRequest>(),
    graphqlUploadExpress({ maxFileSize: 50 * 1024 * 1024, maxFiles: 10 }),
    express.json(),
    expressMiddleware(apolloServer, {
      context,
    }),
  )

  logEvent('info', 'graphql_ready')

  return async () => {
    try {
      await apolloServer.stop()
    } catch (err) {
      const message = err instanceof Error ? err.message : ''
      if (
        !message.includes('The server is not running') &&
        !message.includes('Server is not running')
      ) {
        throw err
      }
    }
  }
}
