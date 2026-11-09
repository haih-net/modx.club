import { Menu } from 'lucide-react'
import { useCallback, useRef } from 'react'
import { LovableContainer } from '../LovableContainer'
import { LovableLogo } from '../LovableLogo'
import { navigation } from '../data'
import {
  LovableHeaderStyled,
  LovableHeaderInnerStyled,
  LovableHeaderNavStyled,
  LovableHeaderNavItemStyled,
  LovableHeaderBurgerStyled,
  HeaderFeedbackStyled,
} from './styles'
export const LovableHeader: React.FC<{
  open: boolean
  onToggle: () => void
  onClose: () => void
  onFeedback: () => void
}> = ({ open, onToggle, onClose, onFeedback }) => {
  const burger = useRef<HTMLButtonElement>(null)
  const keyDown = useCallback<React.KeyboardEventHandler<HTMLElement>>(
    (event) => {
      if (event.key === 'Escape') {
        onClose()
        burger.current?.focus()
      }
    },
    [onClose],
  )
  return (
    <LovableHeaderStyled onKeyDown={keyDown}>
      <LovableContainer>
        <LovableHeaderInnerStyled>
          <LovableLogo />
          <LovableHeaderBurgerStyled
            ref={burger}
            type="button"
            data-area="burger"
            aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={onToggle}
          >
            <Menu aria-hidden="true" />
          </LovableHeaderBurgerStyled>
          <LovableHeaderNavStyled
            id="site-nav"
            data-area="nav"
            data-open={open}
          >
            {navigation.map((item) => (
              <LovableHeaderNavItemStyled
                key={item.href}
                to={item.href}
                onClick={onClose}
              >
                {item.label}
              </LovableHeaderNavItemStyled>
            ))}
          </LovableHeaderNavStyled>
          <HeaderFeedbackStyled
            type="button"
            aria-haspopup="dialog"
            onClick={onFeedback}
          >
            Написать
          </HeaderFeedbackStyled>
        </LovableHeaderInnerStyled>
      </LovableContainer>
    </LovableHeaderStyled>
  )
}
