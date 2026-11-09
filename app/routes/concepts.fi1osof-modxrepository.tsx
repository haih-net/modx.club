import type { MetaFunction } from 'react-router'
import { Fi1osofModxrepositoryPage } from '../Custom/pages/Concepts/Fi1osofModxrepository'
import { seo } from '../Custom/pages/Concepts/Fi1osofModxrepository/seo'
import { createPageMeta } from '../Custom/seo'
export const meta: MetaFunction = ({ error }) =>
  createPageMeta(error ? undefined : seo)
// React Router требует default export в модуле маршрута.
export { Fi1osofModxrepositoryPage as default }
