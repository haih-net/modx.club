import type { MetaFunction } from 'react-router'
import { ModxIsLegacyPage } from '../Custom/pages/Concepts/ModxIsLegacy'
import { seo } from '../Custom/pages/Concepts/ModxIsLegacy/seo'
import { createPageMeta } from '../Custom/seo'
export const meta: MetaFunction = ({ error }) =>
  createPageMeta(error ? undefined : seo)
// React Router требует default export в модуле маршрута.
export { ModxIsLegacyPage as default }
