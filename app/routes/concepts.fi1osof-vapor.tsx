import type { MetaFunction } from 'react-router'
import { Fi1osofVaporPage } from '../Custom/pages/Concepts/Fi1osofVapor'
import { seo } from '../Custom/pages/Concepts/Fi1osofVapor/seo'
import { createPageMeta } from '../Custom/seo'
export const meta: MetaFunction = ({ error }) =>
  createPageMeta(error ? undefined : seo)
// React Router требует default export в модуле маршрута.
export { Fi1osofVaporPage as default }
