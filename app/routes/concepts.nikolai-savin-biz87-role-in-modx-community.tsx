import type { MetaFunction } from 'react-router'
import { NikolaiSavinBiz87RoleInModxCommunityPage } from '../Custom/pages/Concepts/NikolaiSavinBiz87RoleInModxCommunity'
import { seo } from '../Custom/pages/Concepts/NikolaiSavinBiz87RoleInModxCommunity/seo'
import { createPageMeta } from '../Custom/seo'
export const meta: MetaFunction = ({ error }) =>
  createPageMeta(error ? undefined : seo)
// React Router требует default export в модуле маршрута.
export { NikolaiSavinBiz87RoleInModxCommunityPage as default }
