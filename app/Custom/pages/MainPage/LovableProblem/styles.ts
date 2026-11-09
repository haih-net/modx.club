import { styled } from '@linaria/react'

export const ProblemGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 24px;
  }
`

export const ProblemCard = styled.article`
  position: relative;
  padding: 24px;
  background: #ffffff;
  border: 1px solid #e3e8f1;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  &::before {
    content: '';
    position: absolute;
    top: 24px;
    left: 24px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #e5484d;
    box-shadow: 0 0 0 4px #f0f3f9;
  }

  @media (min-width: 900px) {
    padding: 32px;
  }
`

export const ProblemTitle = styled.h3`
  margin: 0;
  padding-left: 24px;
  color: #0f1a2e;
  font-size: 17px;
  font-weight: 600;
  line-height: 1.3;
`

export const ProblemText = styled.p`
  margin: 0;
  color: #5a6679;
  font-size: 15px;
  line-height: 1.55;
`
