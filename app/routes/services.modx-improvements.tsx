import type { MetaFunction } from 'react-router'
import { ModxImprovementsPage } from '../Custom/pages/Services/ModxImprovements'
import { seo } from '../Custom/pages/Services/ModxImprovements/seo'
import { createPageMeta } from '../Custom/seo'
export const meta: MetaFunction = ({ error }) =>
  createPageMeta(error ? undefined : seo)
// React Router требует default export в модуле маршрута.
export { ModxImprovementsPage as default }
