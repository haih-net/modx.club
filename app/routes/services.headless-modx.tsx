import type { MetaFunction } from 'react-router'
import { HeadlessModxPage } from '../Custom/pages/Services/HeadlessModx'
import { seo } from '../Custom/pages/Services/HeadlessModx/seo'
import { createPageMeta } from '../Custom/seo'
export const meta: MetaFunction = ({ error }) =>
  createPageMeta(error ? undefined : seo)
// React Router требует default export в модуле маршрута.
export { HeadlessModxPage as default }
