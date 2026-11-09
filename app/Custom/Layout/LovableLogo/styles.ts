import { Link } from 'react-router'
import { styled } from '@linaria/react'

export const LovableLogoStyled = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  color: #0f1a2e;
  font-family:
    'Inter',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    sans-serif;
  font-size: 17px;
  font-weight: 600;
  letter-spacing: -0.01em;
`

export const LovableLogoMarkStyled = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background: #0b1224;
  color: #fff;
  font-size: 13px;
  font-weight: 700;
`

export const LovableLogoTextStyled = styled.span`
  & > em {
    font-style: normal;
    color: #2e6bff;
  }
`
