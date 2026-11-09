import type { LovableHeroData } from '../data'

export interface LovableHeroProps {
  data: LovableHeroData
  imageSrc: string
  onPrimaryCta?: React.MouseEventHandler<HTMLButtonElement>
  onSecondaryCta?: () => void
}
