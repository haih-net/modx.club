import type * as React from 'react'
import {
  useLoaderData,
  type LoaderFunctionArgs,
  type MetaFunction,
} from 'react-router'
import { findPage } from '../Custom/content/pages.server'
import { StaticPage } from '../Custom/pages/StaticPage'
import type { PageData } from '../Custom/interfaces'
import { pageMeta } from '../Custom/seo'

// Оставшиеся HTML-снимки доступны, пока их страницы переносятся в React-компоненты.
export const loader = ({ url }: LoaderFunctionArgs): PageData => {
  const path =
    url.pathname.replace(/\/$/, '') +
    (url.searchParams.has('page') && url.searchParams.get('page') !== '1'
      ? `?page=${url.searchParams.get('page')}`
      : '')
  const page = findPage(path)
  if (!page || page.page.locale !== 'ru') {
    throw new Response('Страница не найдена', { status: 404 })
  }
  return page
}

export const meta: MetaFunction<typeof loader> = ({ loaderData, error }) =>
  pageMeta(error ? undefined : loaderData)

const ImportedPage: React.FC = () => (
  <StaticPage {...useLoaderData<typeof loader>()} />
)
export { ImportedPage as default }
