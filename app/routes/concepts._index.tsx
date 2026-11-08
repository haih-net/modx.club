import type * as React from 'react'
import {
  useLoaderData,
  type LoaderFunctionArgs,
  type MetaFunction,
} from 'react-router'
import { ConceptsPage } from '../Custom/pages/Concepts'
import { conceptPages } from '../Custom/pages/Concepts/data'
import { getConceptsSeo } from '../Custom/pages/Concepts/seo'
import { createPageMeta } from '../Custom/seo'

export const loader = ({ url }: LoaderFunctionArgs): { pageNumber: number } => {
  const value = url.searchParams.get('page') ?? '1'
  const pageNumber = Number(value)
  if (
    !/^\d+$/.test(value) ||
    pageNumber < 1 ||
    pageNumber > conceptPages.length
  ) {
    throw new Response('Страница не найдена', { status: 404 })
  }
  return { pageNumber }
}

export const meta: MetaFunction<typeof loader> = ({ loaderData, error }) =>
  createPageMeta(
    !error && loaderData ? getConceptsSeo(loaderData.pageNumber) : undefined,
  )

const ConceptsRoute: React.FC = () => (
  <ConceptsPage {...useLoaderData<typeof loader>()} />
)
// React Router требует default export в модуле маршрута.
export { ConceptsRoute as default }
