import type { MetaFunction } from 'react-router'
import { Fi1osofModmonitorPage } from '../Custom/pages/Concepts/Fi1osofModmonitor'
import { seo } from '../Custom/pages/Concepts/Fi1osofModmonitor/seo'
import { createPageMeta } from '../Custom/seo'
export const meta: MetaFunction = ({ error }) =>
  createPageMeta(error ? undefined : seo)
// React Router требует default export в модуле маршрута.
export { Fi1osofModmonitorPage as default }
