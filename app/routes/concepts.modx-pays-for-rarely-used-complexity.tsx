import type { MetaFunction } from 'react-router'
import { ModxPaysForRarelyUsedComplexityPage } from '../Custom/pages/Concepts/ModxPaysForRarelyUsedComplexity'
import { seo } from '../Custom/pages/Concepts/ModxPaysForRarelyUsedComplexity/seo'
import { createPageMeta } from '../Custom/seo'
export const meta: MetaFunction = ({ error }) =>
  createPageMeta(error ? undefined : seo)
// React Router требует default export в модуле маршрута.
export { ModxPaysForRarelyUsedComplexityPage as default }
