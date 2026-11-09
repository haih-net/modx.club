import type { MetaFunction } from 'react-router'
import { Fi1osofComponentsPage } from '../Custom/pages/Concepts/Fi1osofComponents'
import { seo } from '../Custom/pages/Concepts/Fi1osofComponents/seo'
import { createPageMeta } from '../Custom/seo'
export const meta: MetaFunction = ({ error }) =>
  createPageMeta(error ? undefined : seo)
// React Router требует default export в модуле маршрута.
export { Fi1osofComponentsPage as default }
