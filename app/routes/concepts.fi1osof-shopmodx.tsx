import type { MetaFunction } from 'react-router'
import { Fi1osofShopmodxPage } from '../Custom/pages/Concepts/Fi1osofShopmodx'
import { seo } from '../Custom/pages/Concepts/Fi1osofShopmodx/seo'
import { createPageMeta } from '../Custom/seo'
export const meta: MetaFunction = ({ error }) =>
  createPageMeta(error ? undefined : seo)
// React Router требует default export в модуле маршрута.
export { Fi1osofShopmodxPage as default }
