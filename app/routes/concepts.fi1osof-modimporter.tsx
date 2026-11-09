import type { MetaFunction } from 'react-router'
import { Fi1osofModimporterPage } from '../Custom/pages/Concepts/Fi1osofModimporter'
import { seo } from '../Custom/pages/Concepts/Fi1osofModimporter/seo'
import { createPageMeta } from '../Custom/seo'
export const meta: MetaFunction = ({ error }) =>
  createPageMeta(error ? undefined : seo)
// React Router требует default export в модуле маршрута.
export { Fi1osofModimporterPage as default }
