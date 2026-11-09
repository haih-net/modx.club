import type { MetaFunction } from 'react-router'
import { KakUmiraloModxSoobschestvoPage } from '../Custom/pages/Posts/KakUmiraloModxSoobschestvo'
import { seo } from '../Custom/pages/Posts/KakUmiraloModxSoobschestvo/seo'
import { createPageMeta } from '../Custom/seo'
export const meta: MetaFunction = ({ error }) =>
  createPageMeta(error ? undefined : seo)
// React Router требует default export в модуле маршрута.
export { KakUmiraloModxSoobschestvoPage as default }
