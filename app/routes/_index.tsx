import type * as React from 'react'
import { useLoaderData, type MetaFunction } from 'react-router'
import { findPage } from '../Custom/content/pages.server'
import { StaticPage } from '../Custom/pages/StaticPage'
import type { PageData } from '../Custom/interfaces'
import { pageMeta } from '../Custom/seo'

export const loader = (): PageData => {
  const page = findPage('/')
  if (!page) {
    throw new Response('Страница не найдена', { status: 404 })
  }
  return page
}

export const meta: MetaFunction<typeof loader> = ({ loaderData, error }) =>
  pageMeta(error ? undefined : loaderData)

const HomePage: React.FC = () => (
  <StaticPage {...useLoaderData<typeof loader>()} />
)
export { HomePage as default }
