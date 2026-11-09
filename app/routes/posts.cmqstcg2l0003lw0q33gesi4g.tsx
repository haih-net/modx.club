import type { MetaFunction } from 'react-router'
import { Cmqstcg2l0003lw0q33gesi4gPage } from '../Custom/pages/Posts/Cmqstcg2l0003lw0q33gesi4g'
import { seo } from '../Custom/pages/Posts/Cmqstcg2l0003lw0q33gesi4g/seo'
import { createPageMeta } from '../Custom/seo'
export const meta: MetaFunction = ({ error }) =>
  createPageMeta(error ? undefined : seo)
// React Router требует default export в модуле маршрута.
export { Cmqstcg2l0003lw0q33gesi4gPage as default }
