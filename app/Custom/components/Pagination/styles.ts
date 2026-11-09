import { styled } from '@linaria/react'
import { Link } from 'react-router'

export const PaginationStyled = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 32px;
  a {
    padding: 10px 16px;
    border: 1px solid #d4ddd4;
    border-radius: 8px;
  }
`

export const CatalogPaginationStyled = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-top: 16px;
`
export const PaginationButtonStyled = styled.button`
  padding: 8px 12px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  background: #fff;
  &:hover:not(:disabled) {
    background: #f3f4f6;
  }
`
export const PaginationInfoStyled = styled.span`
  font-size: 14px;
`

export const PaginationLinkStyled = styled(Link)`
  padding: 8px 12px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  background: #fff;
  &:hover {
    background: #f3f4f6;
  }
`
