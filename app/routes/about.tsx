import type { MetaFunction } from 'react-router'
import { AboutPage } from '../Custom/pages/About'
import { seo } from '../Custom/pages/About/seo'
import { createPageMeta } from '../Custom/seo'

export const meta: MetaFunction = ({ error }) =>
  createPageMeta(error ? undefined : seo)
// React Router требует default export в модуле маршрута.
export { AboutPage as default }
