import type { MetaFunction } from 'react-router'
import { Fi1osofConsolePage } from '../Custom/pages/Concepts/Fi1osofConsole'
import { seo } from '../Custom/pages/Concepts/Fi1osofConsole/seo'
import { createPageMeta } from '../Custom/seo'
export const meta: MetaFunction = ({ error }) =>
  createPageMeta(error ? undefined : seo)
// React Router требует default export в модуле маршрута.
export { Fi1osofConsolePage as default }
