import { styled } from '@linaria/react'

/**
 * Общие стили для главной страницы.
 * Индивидуальные стили блоков лежат рядом с их компонентами.
 * Mobile-first: базовые правила — для мобилки, десктоп через @media (min-width).
 */

const sectionPadding = `
  padding: 48px 0 48px;

  @media (min-width: 900px) {
    padding: 72px 0 72px;
  }
`

export const PageSection = styled.section`
  ${sectionPadding};
  background: #f5f7fb;
`

export const PageSectionAlt = styled.section`
  ${sectionPadding};
  background: #ffffff;
`

export const PageSectionDark = styled.section`
  ${sectionPadding};
  background: #0b1224;
  color: #e7ecf5;
`

export const SectionHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 760px;
  margin-bottom: 32px;
  text-align: left;
  &[data-center='true'] {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
  }

  @media (min-width: 900px) {
    margin-bottom: 48px;
  }
`

export const SectionEyebrow = styled.span`
  display: inline-flex;
  align-self: flex-start;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 999px;
  background: #e8f0ff;
  color: #2e6bff;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.02em;
  text-transform: uppercase;
`

export const SectionTitle = styled.h2`
  margin: 0;
  color: #0f1a2e;
  font-size: 22px;
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.02em;

  @media (min-width: 900px) {
    font-size: 32px;
  }
`

export const SectionLead = styled.p`
  margin: 0;
  color: #5a6679;
  font-size: 15px;
  line-height: 1.6;

  @media (min-width: 900px) {
    font-size: 17px;
  }
`

/**
 * Базовая «карточка» для использования внутри блоков
 * (точечный тюнинг — в локальных стилях блоков).
 */
export const CardBase = styled.article`
  background: #ffffff;
  border: 1px solid #e3e8f1;
  border-radius: 14px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: 200ms ease;

  &:hover {
    border-color: #cbd3e1;
    box-shadow: 0 4px 12px rgba(15, 26, 46, 0.08);
  }

  @media (min-width: 900px) {
    padding: 32px;
  }
`

export const CardTitle = styled.h3`
  margin: 0;
  color: #0f1a2e;
  font-size: 17px;
  font-weight: 600;
  line-height: 1.3;
`

export const CardText = styled.p`
  margin: 0;
  color: #5a6679;
  font-size: 15px;
  line-height: 1.55;
`

export const GridAuto = styled.div`
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
