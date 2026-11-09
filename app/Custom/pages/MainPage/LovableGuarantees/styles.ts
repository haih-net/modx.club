import { styled } from '@linaria/react'

export const GuaranteesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 24px;
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`

export const GuaranteeCard = styled.article`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 24px;
  background: #ffffff;
  border: 1px solid #e3e8f1;
  border-radius: 14px;
  transition: 200ms ease;

  &:hover {
    border-color: #2e6bff;
    box-shadow: 0 4px 12px rgba(15, 26, 46, 0.08);
    transform: translateY(-2px);
  }

  @media (min-width: 900px) {
    padding: 32px;
  }
`

export const GuaranteeIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 10px;
  background: #e8f0ff;
  color: #2e6bff;
  font-size: 22px;
  line-height: 1;
`

export const GuaranteeTitle = styled.h3`
  margin: 0;
  color: #0f1a2e;
  font-size: 17px;
  font-weight: 600;
  line-height: 1.3;
`

export const GuaranteeText = styled.p`
  margin: 0;
  color: #5a6679;
  font-size: 15px;
  line-height: 1.55;
`
