import type { MetaFunction } from 'react-router'
import { Fi1osofPage } from '../Custom/pages/Concepts/Fi1osof'
import { seo } from '../Custom/pages/Concepts/Fi1osof/seo'
import { createPageMeta } from '../Custom/seo'
export const meta: MetaFunction = ({ error }) =>
  createPageMeta(error ? undefined : seo)
// React Router требует default export в модуле маршрута.
export { Fi1osofPage as default }
