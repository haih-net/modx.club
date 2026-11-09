import type { MetaFunction } from 'react-router'
import { ModxAuditPage } from '../Custom/pages/Services/ModxAudit'
import { seo } from '../Custom/pages/Services/ModxAudit/seo'
import { createPageMeta } from '../Custom/seo'
export const meta: MetaFunction = ({ error }) =>
  createPageMeta(error ? undefined : seo)
// React Router требует default export в модуле маршрута.
export { ModxAuditPage as default }
