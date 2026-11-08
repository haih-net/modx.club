import type { MetaFunction } from 'react-router'
import { WhyNotPage } from '../Custom/pages/WhyNot'
import { seo } from '../Custom/pages/WhyNot/seo'
import { createPageMeta } from '../Custom/seo'

export const meta: MetaFunction = ({ error }) =>
  createPageMeta(error ? undefined : seo)
// React Router требует default export в модуле маршрута.
export { WhyNotPage as default }
