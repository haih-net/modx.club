import type { MetaFunction } from 'react-router'
import { ModxSupportPage } from '../Custom/pages/Services/ModxSupport'
import { seo } from '../Custom/pages/Services/ModxSupport/seo'
import { createPageMeta } from '../Custom/seo'

export const meta: MetaFunction = ({ error }) =>
  createPageMeta(error ? undefined : seo)
// React Router требует default export в модуле маршрута.
export { ModxSupportPage as default }
