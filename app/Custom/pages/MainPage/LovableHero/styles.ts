import { styled } from '@linaria/react'

export const HeroSection = styled.section`
  background:
    radial-gradient(circle at 0% 0%, #e8f0ff 0%, transparent 55%),
    radial-gradient(circle at 100% 100%, #e6f7ec 0%, transparent 50%), #f5f7fb;
  padding: 48px 0 48px;

  @media (min-width: 900px) {
    padding: 72px 0 72px;
  }
`

export const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  align-items: center;

  @media (min-width: 900px) {
    grid-template-columns: minmax(0, 1.05fr) minmax(0, 1fr);
    gap: 48px;
  }
`

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const HeroEyebrow = styled.span`
  display: inline-flex;
  align-self: flex-start;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 999px;
  background: #ffffff;
  border: 1px solid #e3e8f1;
  color: #2e6bff;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.02em;
  text-transform: uppercase;

  &::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #16a34a;
    box-shadow: 0 0 0 4px #e6f7ec;
  }
`

export const HeroTitle = styled.h1`
  margin: 0;
  color: #0f1a2e;
  font-size: 32px;
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;

  @media (min-width: 900px) {
    font-size: 44px;
  }
`

export const HeroTitleAccent = styled.span`
  display: block;
  background: linear-gradient(90deg, #2e6bff 0%, #16a34a 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`

export const HeroDescription = styled.p`
  margin: 0;
  color: #5a6679;
  font-size: 15px;
  line-height: 1.6;
  max-width: 560px;

  @media (min-width: 900px) {
    font-size: 17px;
  }
`

export const HeroBadges = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`

export const HeroBadge = styled.li`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 999px;
  background: #ffffff;
  border: 1px solid #e3e8f1;
  color: #0f1a2e;
  font-size: 13px;
  font-weight: 500;

  &::before {
    content: '✓';
    color: #16a34a;
    font-weight: 700;
  }
`

export const HeroActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (min-width: 640px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px;
  }
`

export const HeroMetrics = styled.dl`
  margin: 0;
  padding: 24px 0 0;
  border-top: 1px solid #e3e8f1;
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 24px;
  }
`

export const HeroMetricItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const HeroMetricValue = styled.dt`
  font-size: 22px;
  font-weight: 700;
  color: #0f1a2e;
  letter-spacing: -0.01em;
`

export const HeroMetricLabel = styled.dd`
  margin: 0;
  font-size: 13px;
  color: #5a6679;
  line-height: 1.4;
`

export const HeroMediaWrap = styled.div`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  background: #ffffff;
  border: 1px solid #e3e8f1;
  box-shadow: 0 12px 32px rgba(15, 26, 46, 0.12);
  aspect-ratio: 4 / 3;

  @media (min-width: 900px) {
    aspect-ratio: 5 / 4;
  }
`

export const HeroImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`
