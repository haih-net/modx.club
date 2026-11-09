import type { MetaFunction } from 'react-router'
import { Fi1osofModxsmartyPage } from '../Custom/pages/Concepts/Fi1osofModxsmarty'
import { seo } from '../Custom/pages/Concepts/Fi1osofModxsmarty/seo'
import { createPageMeta } from '../Custom/seo'
export const meta: MetaFunction = ({ error }) =>
  createPageMeta(error ? undefined : seo)
// React Router требует default export в модуле маршрута.
export { Fi1osofModxsmartyPage as default }
