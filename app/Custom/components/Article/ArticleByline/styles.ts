import { styled } from '@linaria/react'
import { Link } from 'react-router'

export const ArticleMetaStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  padding: 8px 0 0;
  font-size: 0.75rem;
  color: #6b7280;
`
export const UserLinkContainer = styled.div`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  max-width: 100%;
  min-width: 0;
  gap: 5px;
`
export const AvatarLink = styled(Link)`
  display: inline-flex;
  flex-shrink: 0;
`
export const AvatarStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #e5e7eb;
  color: #6b7280;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  overflow: hidden;
  flex-shrink: 0;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
export const NameContainer = styled.div`
  text-align: left;
  flex: 1;
  min-width: 0;
  overflow: hidden;
`
export const NameLink = styled(Link)`
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
