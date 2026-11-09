import type { MetaFunction } from 'react-router'
import { ModxDevelopmentPage } from '../Custom/pages/WhyNot/ModxDevelopment'
import { seo } from '../Custom/pages/WhyNot/ModxDevelopment/seo'
import { createPageMeta } from '../Custom/seo'
export const meta: MetaFunction = ({ error }) =>
  createPageMeta(error ? undefined : seo)
// React Router требует default export в модуле маршрута.
export { ModxDevelopmentPage as default }
