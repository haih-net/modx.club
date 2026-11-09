import type { MetaFunction } from 'react-router'
import { Fi1osofModsocietyPage } from '../Custom/pages/Concepts/Fi1osofModsociety'
import { seo } from '../Custom/pages/Concepts/Fi1osofModsociety/seo'
import { createPageMeta } from '../Custom/seo'
export const meta: MetaFunction = ({ error }) =>
  createPageMeta(error ? undefined : seo)
// React Router требует default export в модуле маршрута.
export { Fi1osofModsocietyPage as default }
