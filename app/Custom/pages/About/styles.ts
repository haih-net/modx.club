import { styled } from '@linaria/react'

export const AboutPageCustomStyled = styled.div``

export const AboutSection = styled.section`
  background:
    radial-gradient(circle at 0% 0%, #e8f0ff 0%, transparent 55%),
    radial-gradient(circle at 100% 100%, #e6f7ec 0%, transparent 50%), #f5f7fb;
  padding: 48px 0 48px;

  @media (min-width: 900px) {
    padding: 72px 0 72px;
  }
`

export const AboutContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding-left: 32px;
  padding-right: 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 900px) {
    padding-left: 16px;
    padding-right: 16px;
  }
`

export const AboutHeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  align-items: start;

  @media (min-width: 900px) {
    grid-template-columns: 2fr 1fr;
    gap: 48px;
  }
`

export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  order: 2;

  @media (min-width: 900px) {
    order: 1;
  }
`

export const AboutTitle = styled.h1`
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

export const AboutImageWrap = styled.div`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  background: #ffffff;
  border: 1px solid #e3e8f1;
  box-shadow: 0 12px 32px rgba(15, 26, 46, 0.12);
  order: 1;

  @media (min-width: 900px) {
    order: 2;
  }

  img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`

export const AboutTextBlock = styled.div`
  color: #5a6679;
  font-size: 15px;
  line-height: 1.7;

  margin: 10px 0;

  @media (min-width: 900px) {
    font-size: 17px;
  }

  a {
    color: #2e6bff;
    text-decoration: none;
    font-weight: 500;
    transition: color 120ms ease;

    &:hover {
      color: #1e55d8;
      text-decoration: underline;
    }
  }
`

export const AboutSubtitle = styled.h2`
  margin: 32px 0 16px;
  color: #0f1a2e;
  font-size: 22px;
  font-weight: 700;
  line-height: 1.2;

  @media (min-width: 900px) {
    font-size: 32px;
  }
`

export const AboutSubtitle3 = styled.h3`
  margin: 24px 0 12px;
  color: #0f1a2e;
  font-size: 17px;
  font-weight: 600;
  line-height: 1.3;

  @media (min-width: 900px) {
    font-size: 22px;
  }
`

export const AboutFullWidthSection = styled.section`
  padding: 48px 0;
  background: #ffffff;

  @media (min-width: 900px) {
    padding: 72px 0;
  }
`

export const AboutCaseSection = styled.div`
  margin: 32px 0;
  padding: 24px;
  background: #f5f7fb;
  border-radius: 14px;

  @media (min-width: 900px) {
    margin: 48px 0;
    padding: 32px;
  }
`

export const AboutCaseGrid = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }
`

export const AboutCaseItem = styled.a`
  display: block;
  text-decoration: none;
  border-radius: 20px;
  overflow: hidden;
  background: #ffffff;
  border: 1px solid #e3e8f1;
  box-shadow: 0 4px 12px rgba(15, 26, 46, 0.08);
  transition: all 200ms ease;

  &:hover {
    box-shadow: 0 12px 32px rgba(15, 26, 46, 0.12);
    transform: translateY(-4px);
  }
`

export const AboutCaseImage = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const AboutCaseLabel = styled.div`
  padding: 16px;
  text-align: center;
  color: #0f1a2e;
  font-size: 15px;
  font-weight: 500;
`
