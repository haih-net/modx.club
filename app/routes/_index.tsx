import type { MetaFunction } from 'react-router'
import { MainPage } from '../Custom/pages/MainPage'
import { seo } from '../Custom/pages/MainPage/seo'
import { createPageMeta } from '../Custom/seo'
export const meta: MetaFunction = ({ error }) =>
  createPageMeta(error ? undefined : seo)
// React Router требует default export в модуле маршрута.
export { MainPage as default }
