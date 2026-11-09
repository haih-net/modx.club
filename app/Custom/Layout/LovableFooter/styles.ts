import { Link } from 'react-router'
import { styled } from '@linaria/react'

export const LovableFooterStyled = styled.footer`
  background: #0b1224;
  color: #e7ecf5;
  padding-top: 72px;
  padding-bottom: 32px;
`

export const LovableFooterGridStyled = styled.div`
  display: grid;
  grid-template-columns: 1.4fr repeat(3, 1fr);
  gap: 48px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

export const LovableFooterBrandStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const LovableFooterBrandNameStyled = styled.div`
  font-size: 22px;
  font-weight: 600;
  color: #fff;
`

export const LovableFooterDescriptionStyled = styled.p`
  color: #94a0b8;
  font-size: 13px;
  max-width: 320px;
`

export const LovableFooterColumnStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const LovableFooterColumnTitleStyled = styled.div`
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
`

export const LovableFooterLinkStyled = styled(Link)`
  text-align: left;
  background: none;
  border: none;
  padding: 0;
  color: #94a0b8;
  font-size: 13px;
  cursor: pointer;
  font-family: inherit;
  transition: color 120ms ease;

  &:hover {
    color: #fff;
  }
`

export const LovableFooterColumnListStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const LovableFooterBottomStyled = styled.div`
  margin-top: 48px;
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  color: #94a0b8;
  font-size: 12px;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
  }
`
