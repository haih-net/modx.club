import type { MetaFunction } from 'react-router'
import { Fi1osofCacheoptimizerPage } from '../Custom/pages/Concepts/Fi1osofCacheoptimizer'
import { seo } from '../Custom/pages/Concepts/Fi1osofCacheoptimizer/seo'
import { createPageMeta } from '../Custom/seo'
export const meta: MetaFunction = ({ error }) =>
  createPageMeta(error ? undefined : seo)
// React Router требует default export в модуле маршрута.
export { Fi1osofCacheoptimizerPage as default }
