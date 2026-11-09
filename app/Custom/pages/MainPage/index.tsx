import { useCallback } from 'react'
import { useNavigate } from 'react-router'
import { useAppContext } from '../../components/AppContext'
import { mainPageData as data } from './data'
import { LovableHero } from './LovableHero'
import { LovableProblem } from './LovableProblem'
import { LovableProcess } from './LovableProcess'
import { LovableGuarantees } from './LovableGuarantees'
import { LovableTech } from './LovableTech'
import { LovableCta } from './LovableCta'

export const MainPage: React.FC = () => {
  const { openFeedback } = useAppContext() ?? {}
  const navigate = useNavigate()
  const showFeedback = useCallback(() => openFeedback?.(), [openFeedback])
  const showProcess = useCallback(() => {
    void navigate('/#how')
  }, [navigate])
  return (
    <>
      <LovableHero
        data={data.hero}
        imageSrc="/media/23731ef1de1cb405.jpg"
        onPrimaryCta={showFeedback}
        onSecondaryCta={showProcess}
      />
      <LovableProblem data={data.problem} />
      <LovableProcess
        data={data.process}
        imageSrc="/media/0aab2bb1f3a52af5.jpg"
      />
      <LovableGuarantees data={data.guarantees} />
      <LovableTech data={data.tech} />
      <LovableCta data={data.cta} onPrimaryCta={showFeedback} />
    </>
  )
}
