import type { MetaFunction } from 'react-router'
import { BigBangRewritePage } from '../Custom/pages/WhyNot/BigBangRewrite'
import { seo } from '../Custom/pages/WhyNot/BigBangRewrite/seo'
import { createPageMeta } from '../Custom/seo'

export const meta: MetaFunction = ({ error }) =>
  createPageMeta(error ? undefined : seo)
// React Router требует default export в модуле маршрута.
export { BigBangRewritePage as default }
