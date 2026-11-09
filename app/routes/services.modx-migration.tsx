import type { MetaFunction } from 'react-router'
import { ModxMigrationPage } from '../Custom/pages/Services/ModxMigration'
import { seo } from '../Custom/pages/Services/ModxMigration/seo'
import { createPageMeta } from '../Custom/seo'
export const meta: MetaFunction = ({ error }) =>
  createPageMeta(error ? undefined : seo)
// React Router требует default export в модуле маршрута.
export { ModxMigrationPage as default }
