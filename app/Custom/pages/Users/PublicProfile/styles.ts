import { styled } from '@linaria/react'

export const PublicProfileStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`
export const ProfileToolbarStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
export const ProfileStatusStyled = styled.span`
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  border-radius: 6px;
  background: #10b981;
  color: #fff;
  border: 1px solid #10b981;
  padding: 8px 12px;
  font-size: 14px;
  opacity: 0.7;
`
export const ProfileInfoStyled = styled.div`
  clear: both;
`
export const ProfileAvatarStyled = styled.img`
  border-radius: 50%;
  float: left;
  margin: 0 15px 15px 0;
  max-width: 100%;
`
