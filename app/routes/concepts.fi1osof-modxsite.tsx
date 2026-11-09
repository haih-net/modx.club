import type { MetaFunction } from 'react-router'
import { Fi1osofModxsitePage } from '../Custom/pages/Concepts/Fi1osofModxsite'
import { seo } from '../Custom/pages/Concepts/Fi1osofModxsite/seo'
import { createPageMeta } from '../Custom/seo'
export const meta: MetaFunction = ({ error }) =>
  createPageMeta(error ? undefined : seo)
// React Router требует default export в модуле маршрута.
export { Fi1osofModxsitePage as default }
