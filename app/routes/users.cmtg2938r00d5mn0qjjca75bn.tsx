import type { MetaFunction } from 'react-router'
import { Cmtg2938r00d5mn0qjjca75bnPage } from '../Custom/pages/Users/Cmtg2938r00d5mn0qjjca75bn'
import { seo } from '../Custom/pages/Users/Cmtg2938r00d5mn0qjjca75bn/seo'
import { createPageMeta } from '../Custom/seo'
export const meta: MetaFunction = ({ error }) =>
  createPageMeta(error ? undefined : seo)
// React Router требует default export в модуле маршрута.
export { Cmtg2938r00d5mn0qjjca75bnPage as default }
