import { LovableButtonIconStyled, LovableButtonStyled } from './styles'
import type { LovableButtonProps } from './types'

export const LovableButton: React.FC<LovableButtonProps> = ({
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  fullWidth = false,
  children,
  ...other
}) => (
  <LovableButtonStyled
    type="button"
    data-variant={variant}
    data-size={size}
    data-full-width={fullWidth}
    {...other}
  >
    {iconLeft ? (
      <LovableButtonIconStyled>{iconLeft}</LovableButtonIconStyled>
    ) : null}
    {children}
    {iconRight ? (
      <LovableButtonIconStyled>{iconRight}</LovableButtonIconStyled>
    ) : null}
  </LovableButtonStyled>
)
