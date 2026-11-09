import { styled } from '@linaria/react'

export const CtaCard = styled.div`
  position: relative;
  overflow: hidden;
  padding: 32px;
  border-radius: 20px;
  background:
    radial-gradient(
      circle at 0% 0%,
      rgba(46, 107, 255, 0.35) 0%,
      transparent 55%
    ),
    radial-gradient(
      circle at 100% 100%,
      rgba(22, 163, 74, 0.25) 0%,
      transparent 50%
    ),
    #0b1224;
  color: #e7ecf5;
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  @media (min-width: 900px) {
    padding: 48px;
    grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
    gap: 48px;
    align-items: center;
  }
`

export const CtaContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const CtaEyebrow = styled.span`
  display: inline-flex;
  align-self: flex-start;
  padding: 8px 16px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  color: #e7ecf5;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
`

export const CtaTitle = styled.h2`
  margin: 0;
  color: #e7ecf5;
  font-size: 22px;
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.02em;

  @media (min-width: 900px) {
    font-size: 32px;
  }
`

export const CtaDescription = styled.p`
  margin: 0;
  color: #94a0b8;
  font-size: 15px;
  line-height: 1.6;

  @media (min-width: 900px) {
    font-size: 17px;
  }
`

export const CtaAside = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;

  @media (min-width: 900px) {
    padding: 32px;
  }
`

export const CtaBullets = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const CtaBullet = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  color: #e7ecf5;
  font-size: 15px;
  line-height: 1.5;

  &::before {
    content: '→';
    color: #16a34a;
    font-weight: 700;
  }
`

export const CtaActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (min-width: 640px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px;
  }
`

export const CtaNote = styled.p`
  margin: 0;
  color: #94a0b8;
  font-size: 13px;
  line-height: 1.5;
`
