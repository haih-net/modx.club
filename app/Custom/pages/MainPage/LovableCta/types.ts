import type { LovableCtaData } from '../data'

export interface LovableCtaProps {
  data: LovableCtaData
  onPrimaryCta?: React.MouseEventHandler<HTMLButtonElement>
  onSecondaryCta?: () => void
}
