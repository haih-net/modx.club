import type { MetaFunction } from 'react-router'
import { ModxProNotCommunityPage } from '../Custom/pages/Concepts/ModxProNotCommunity'
import { seo } from '../Custom/pages/Concepts/ModxProNotCommunity/seo'
import { createPageMeta } from '../Custom/seo'
export const meta: MetaFunction = ({ error }) =>
  createPageMeta(error ? undefined : seo)
// React Router требует default export в модуле маршрута.
export { ModxProNotCommunityPage as default }
