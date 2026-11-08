import type { LoaderFunctionArgs } from 'react-router'
import { loader as loadConcepts, meta } from './concepts._index'
import ConceptsRoute from './concepts._index'

export const loader = ({
  url,
  params,
  ...args
}: LoaderFunctionArgs): ReturnType<typeof loadConcepts> => {
  const pageUrl = new URL(url)
  pageUrl.searchParams.set('page', params.pageNumber ?? '')
  return loadConcepts({ ...args, params, url: pageUrl })
}
export { ConceptsRoute as default, meta }
