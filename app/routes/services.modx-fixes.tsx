import type { MetaFunction } from 'react-router'
import { ModxFixesPage } from '../Custom/pages/Services/ModxFixes'
import { seo } from '../Custom/pages/Services/ModxFixes/seo'
import { createPageMeta } from '../Custom/seo'
export const meta: MetaFunction = ({ error }) =>
  createPageMeta(error ? undefined : seo)
// React Router требует default export в модуле маршрута.
export { ModxFixesPage as default }
