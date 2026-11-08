import type * as React from 'react'
import {
  redirect,
  useLoaderData,
  type LoaderFunctionArgs,
  type MetaFunction,
} from 'react-router'
import { findPage } from '../Custom/content/pages.server'
import { StaticPage } from '../Custom/pages/StaticPage'
import { pageMeta } from '../Custom/seo'
import type { PageData } from '../Custom/interfaces'

const redirects: Record<string, string> = {
  '/en': '/en/',
  '/en/posts/cmqsnu96e000tml0qsyzh469g':
    '/en/posts/kak-umiralo-modx-soobschestvo',
  '/en/posts/cmqstcg2l0003lw0q33gesi4g':
    '/en/posts/otkrytoe-pismo-nikolayu-biz87-savinu',
}
export const loader = ({ url }: LoaderFunctionArgs): PageData | Response => {
  if (redirects[url.pathname])
    {return redirect(redirects[url.pathname] + url.search, 301)}
  const pathname =
    url.pathname === '/en/' || url.pathname === '/'
      ? url.pathname
      : url.pathname.replace(/\/$/, '')
  const pagination = pathname.match(/^(\/en)?\/concepts\/page\/([23])$/)
  const path = pagination
    ? `${pagination[1] || ''}/concepts?page=${pagination[2]}`
    : pathname +
      (url.searchParams.has('page') && url.searchParams.get('page') !== '1'
        ? `?page=${url.searchParams.get('page')}`
        : '')
  const data = findPage(path)
  if (!data) {throw new Response('Страница не найдена', { status: 404 })}
  return data
}
export const meta: MetaFunction<typeof loader> = ({ loaderData }) =>
  pageMeta(loaderData as PageData | undefined)
const Page: React.FC = () => <StaticPage {...useLoaderData<PageData>()} />
export { Page as default }
