import type { MetaFunction } from 'react-router'
import { Cmlr57y2b0004s50qs8et9733Page } from '../Custom/pages/Users/Cmlr57y2b0004s50qs8et9733'
import { seo } from '../Custom/pages/Users/Cmlr57y2b0004s50qs8et9733/seo'
import { createPageMeta } from '../Custom/seo'
export const meta: MetaFunction = ({ error }) =>
  createPageMeta(error ? undefined : seo)
// React Router требует default export в модуле маршрута.
export { Cmlr57y2b0004s50qs8et9733Page as default }
