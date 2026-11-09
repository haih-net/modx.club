import { Link } from 'react-router'
import { styled } from '@linaria/react'

export const LovableHeaderStyled = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: saturate(180%) blur(10px);
  border-bottom: 1px solid #e3e8f1;
`

export const LovableHeaderInnerStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr auto auto auto;
  grid-template-areas:
    'logo locale cta burger'
    'nav nav nav nav';
  align-items: center;
  gap: 12px;
  padding: 10px 0;

  [data-area='logo'] {
    grid-area: logo;
  }
  [data-area='burger'] {
    grid-area: burger;
  }
  [data-area='nav'] {
    grid-area: nav;
  }
  [data-area='locale'] {
    grid-area: locale;
  }
  [data-area='cta'] {
    grid-area: cta;
  }

  @media (min-width: 900px) {
    grid-template-columns: auto 1fr auto auto;
    grid-template-areas: 'logo nav locale cta';
  }
`

export const LovableHeaderNavStyled = styled.nav`
  display: none;
  &[data-open='true'] {
    display: flex;
  }
  flex-direction: column;
  gap: 4px;
  padding: 12px 0;
  border-top: 1px solid #e3e8f1;

  @media (min-width: 900px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 0;
    border-top: none;
  }
`

export const LovableHeaderNavItemStyled = styled(Link)`
  background: none;
  border: none;
  text-align: left;
  padding: 12px 12px;
  border-radius: 6px;
  color: #5a6679;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  font-family: inherit;
  transition:
    color 120ms ease,
    background 120ms ease;

  &:hover {
    color: #0f1a2e;
    background: #f0f3f9;
  }

  @media (min-width: 900px) {
    font-size: 13px;
    padding: 8px 12px;
  }
`

const hiddenOnMobile = `
  display: none;
  @media (min-width: 900px) {
    display: inline-flex;
  }
`

export const LovableHeaderDocsStyled = styled.button`
  ${hiddenOnMobile};
  background: none;
  border: none;
  color: #5a6679;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  font-family: inherit;
  padding: 8px 12px;
  border-radius: 6px;
  align-items: center;

  &:hover {
    color: #0f1a2e;
    background: #f0f3f9;
  }
`

export const LovableHeaderBurgerStyled = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 1px solid #e3e8f1;
  background: #ffffff;
  border-radius: 6px;
  color: #0f1a2e;
  cursor: pointer;
  font-size: 20px;
  padding: 0;

  @media (min-width: 900px) {
    display: none;
  }
`

export const HeaderFeedbackStyled = styled.button`
  grid-area: cta;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 14px;
  border: 1px solid #2e6bff;
  border-radius: 6px;
  background: #2e6bff;
  color: #fff;
  font: inherit;
  font-size: 14px;
  font-weight: 600;
  &:hover {
    background: #1e55d8;
  }
`
