import { LovableContainer } from '../LovableContainer'
import { footer } from '../data'
import {
  LovableFooterStyled,
  LovableFooterGridStyled,
  LovableFooterBrandStyled,
  LovableFooterBrandNameStyled,
  LovableFooterDescriptionStyled,
  LovableFooterColumnStyled,
  LovableFooterColumnTitleStyled,
  LovableFooterColumnListStyled,
  LovableFooterLinkStyled,
  LovableFooterBottomStyled,
} from './styles'
export const LovableFooter: React.FC = () => (
  <LovableFooterStyled>
    <LovableContainer>
      <LovableFooterGridStyled>
        <LovableFooterBrandStyled>
          <LovableFooterBrandNameStyled>modx.club</LovableFooterBrandNameStyled>
          <LovableFooterDescriptionStyled>
            {footer.description}
          </LovableFooterDescriptionStyled>
        </LovableFooterBrandStyled>
        {footer.columns.map((column) => (
          <LovableFooterColumnStyled key={column.title}>
            <LovableFooterColumnTitleStyled>
              {column.title}
            </LovableFooterColumnTitleStyled>
            <LovableFooterColumnListStyled>
              {column.items.map((item) => (
                <LovableFooterLinkStyled key={item.label} to={item.href}>
                  {item.label}
                </LovableFooterLinkStyled>
              ))}
            </LovableFooterColumnListStyled>
          </LovableFooterColumnStyled>
        ))}
      </LovableFooterGridStyled>
      <LovableFooterBottomStyled>
        <span>{footer.copyright}</span>
        <div>
          <span>Сделано для безопасной модернизации MODX</span>{' '}
          <a
            target="_blank"
            href="https://fi1osof.ru"
            rel="noopener noreferrer"
          >
            By 𝕱
          </a>
        </div>
      </LovableFooterBottomStyled>
    </LovableContainer>
  </LovableFooterStyled>
)
