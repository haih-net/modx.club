import type { MetaFunction } from 'react-router'
import { ServicesPage } from '../Custom/pages/Services'
import { seo } from '../Custom/pages/Services/seo'
import { createPageMeta } from '../Custom/seo'

export const meta: MetaFunction = ({ error }) =>
  createPageMeta(error ? undefined : seo)
// React Router требует default export в модуле маршрута.
export { ServicesPage as default }
