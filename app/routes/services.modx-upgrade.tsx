import type { MetaFunction } from 'react-router'
import { ModxUpgradePage } from '../Custom/pages/Services/ModxUpgrade'
import { seo } from '../Custom/pages/Services/ModxUpgrade/seo'
import { createPageMeta } from '../Custom/seo'
export const meta: MetaFunction = ({ error }) =>
  createPageMeta(error ? undefined : seo)
// React Router требует default export в модуле маршрута.
export { ModxUpgradePage as default }
