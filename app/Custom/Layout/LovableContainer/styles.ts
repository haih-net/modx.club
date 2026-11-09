import { styled } from '@linaria/react'

export const LovableContainerStyled = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding-left: 32px;
  padding-right: 32px;

  @media (max-width: 900px) {
    padding-left: 16px;
    padding-right: 16px;
  }
`
