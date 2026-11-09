import type { MetaFunction } from 'react-router'
import { PochemuYaNeSoglasenSPredlozheniemSoobschestvaModxProPeredatImBolshePolnomochiyVRamkakhProektaModxRevolutionPage } from '../Custom/pages/Concepts/PochemuYaNeSoglasenSPredlozheniemSoobschestvaModxProPeredatImBolshePolnomochiyVRamkakhProektaModxRevolution'
import { seo } from '../Custom/pages/Concepts/PochemuYaNeSoglasenSPredlozheniemSoobschestvaModxProPeredatImBolshePolnomochiyVRamkakhProektaModxRevolution/seo'
import { createPageMeta } from '../Custom/seo'
export const meta: MetaFunction = ({ error }) =>
  createPageMeta(error ? undefined : seo)
// React Router требует default export в модуле маршрута.
export { PochemuYaNeSoglasenSPredlozheniemSoobschestvaModxProPeredatImBolshePolnomochiyVRamkakhProektaModxRevolutionPage as default }
