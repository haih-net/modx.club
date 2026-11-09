import { renderToReadableStream } from 'react-dom/server'
import { ServerRouter, type EntryContext } from 'react-router'

// Build-time rendering only. No renderer is deployed to the file server.
export default async function handleRequest(
  request: Request,
  status: number,
  headers: Headers,
  context: EntryContext,
) {
  const url = new URL(request.url)

  // Часть старого контента переехала в архив на freecode.academy.
  if (status === 404 || url.pathname === '/404') {
    const legacyUrl = `https://freecode.academy${url.pathname}${url.search}`
    const response = await fetch(legacyUrl, {
      signal: AbortSignal.any([request.signal, AbortSignal.timeout(5000)]),
    }).catch(console.error)

    if (response) {
      await response.body?.cancel().catch(console.error)

      if (response.ok) {
        return new Response(null, {
          status: 301,
          headers: { Location: legacyUrl },
        })
      }
    }
  }

  const body = await renderToReadableStream(
    <ServerRouter context={context} url={request.url} />,
    {
      signal: request.signal,
      onError(error) {
        status = 500
        console.error(error)
      },
    },
  )
  await body.allReady
  headers.set('Content-Type', 'text/html; charset=utf-8')
  return new Response(body, { status, headers })
}
