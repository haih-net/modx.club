import { Statistics } from './components/Statistics'
import { errorPageStatusCode } from './components/Statistics/status'
import { DocumentStyled as HtmlStyled } from './Custom/components/SiteLayout/styles'
import {
  Meta as SeoHeaders,
  useLocation,
  type MetaFunction,
} from 'react-router'
import type * as React from 'react'

export const meta: MetaFunction = ({ error }) =>
  error
    ? [{ title: '404 — modx.club' }, { name: 'robots', content: 'noindex' }]
    : [{ title: 'modx.club' }]
import type { ReactNode } from 'react'
import {
  Links,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError,
} from 'react-router'

const betterlyticsId = import.meta.env.BETTERLYTICS_SITE_ID

export const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const location = useLocation()
  return (
    <HtmlStyled lang={location.pathname.startsWith('/en') ? 'en' : 'ru'}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/modx.svg" />
        <SeoHeaders />
        <Links />
        {betterlyticsId && (
          <script
            async
            src="https://panel.betterlytics.ru/analytics.js"
            data-site-id={betterlyticsId}
            data-server-url="https://panel.betterlytics.ru/event"
          />
        )}
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </HtmlStyled>
  )
}
const App: React.FC = () => {
  return (
    <>
      <Outlet />
      <Statistics />
    </>
  )
}

export { App as default }

export const ErrorBoundary: React.FC = () => {
  const error = useRouteError()
  return (
    <>
      <Statistics statusCode={errorPageStatusCode(error)} />
      <h1 tabIndex={-1}>
        {isRouteErrorResponse(error)
          ? `${error.status} ${error.statusText}`
          : 'Не удалось открыть страницу'}
      </h1>
      <p>Обновите страницу или вернитесь на главную.</p>
      <a href="/">На главную</a>
    </>
  )
}
