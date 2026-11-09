import type { MetaFunction } from 'react-router'
import { ModxEcosystemTrapPage } from '../Custom/pages/Concepts/ModxEcosystemTrap'
import { seo } from '../Custom/pages/Concepts/ModxEcosystemTrap/seo'
import { createPageMeta } from '../Custom/seo'
export const meta: MetaFunction = ({ error }) =>
  createPageMeta(error ? undefined : seo)
// React Router требует default export в модуле маршрута.
export { ModxEcosystemTrapPage as default }
