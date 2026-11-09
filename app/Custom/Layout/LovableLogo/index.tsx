import {
  LovableLogoStyled,
  LovableLogoMarkStyled,
  LovableLogoTextStyled,
} from './styles'
export const LovableLogo: React.FC = () => (
  <LovableLogoStyled to="/" aria-label="modx.club" data-area="logo">
    <LovableLogoMarkStyled>M</LovableLogoMarkStyled>
    <LovableLogoTextStyled>
      modx.<em>club</em>
    </LovableLogoTextStyled>
  </LovableLogoStyled>
)
