import type { MetaFunction } from 'react-router'
import { ModxDockerMinishopPage } from '../Custom/pages/Concepts/ModxDockerMinishop'
import { seo } from '../Custom/pages/Concepts/ModxDockerMinishop/seo'
import { createPageMeta } from '../Custom/seo'
export const meta: MetaFunction = ({ error }) =>
  createPageMeta(error ? undefined : seo)
// React Router требует default export в модуле маршрута.
export { ModxDockerMinishopPage as default }
