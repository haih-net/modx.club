import { styled } from '@linaria/react'

export const TechGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 24px;
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`

export const TechCard = styled.article`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  background: #0b1224;
  color: #e7ecf5;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.06);

  @media (min-width: 900px) {
    padding: 32px;
  }
`

export const TechTitle = styled.h3`
  margin: 0;
  color: #e7ecf5;
  font-size: 17px;
  font-weight: 600;
  line-height: 1.3;
`

export const TechDescription = styled.p`
  margin: 0;
  color: #94a0b8;
  font-size: 13px;
  line-height: 1.55;
`

export const TechList = styled.ul`
  list-style: none;
  margin: 8px 0 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`

export const TechItem = styled.li`
  display: inline-flex;
  align-items: center;
  padding: 4px 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.06);
  color: #e7ecf5;
  font-family: 'JetBrains Mono', 'SF Mono', Menlo, monospace;
  font-size: 12px;
`
