import type { MetaFunction } from 'react-router'
import { Fi1osofPhptemplatesPage } from '../Custom/pages/Concepts/Fi1osofPhptemplates'
import { seo } from '../Custom/pages/Concepts/Fi1osofPhptemplates/seo'
import { createPageMeta } from '../Custom/seo'
export const meta: MetaFunction = ({ error }) =>
  createPageMeta(error ? undefined : seo)
// React Router требует default export в модуле маршрута.
export { Fi1osofPhptemplatesPage as default }
