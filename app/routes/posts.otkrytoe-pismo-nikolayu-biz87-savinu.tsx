import type { MetaFunction } from 'react-router'
import { OtkrytoePismoNikolayuBiz87SavinuPage } from '../Custom/pages/Posts/OtkrytoePismoNikolayuBiz87Savinu'
import { seo } from '../Custom/pages/Posts/OtkrytoePismoNikolayuBiz87Savinu/seo'
import { createPageMeta } from '../Custom/seo'
export const meta: MetaFunction = ({ error }) =>
  createPageMeta(error ? undefined : seo)
// React Router требует default export в модуле маршрута.
export { OtkrytoePismoNikolayuBiz87SavinuPage as default }
