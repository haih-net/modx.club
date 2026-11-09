import { styled } from '@linaria/react'

// Общие классы исходной темы остаются в DocumentStyled.
// Стили карточки перенесены сюда из ConceptViewStyled и ConceptItemStyled оригинала.
export const ArticleStyled = styled.article`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px;
  min-width: 0;
`
export const ArticleCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: #fff;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  border: 1px solid #e5e7eb;
  min-width: 0;
`
export const ArticleTitleStyled = styled.h1`
  max-width: 100%;
  white-space: normal;
  overflow-wrap: anywhere;
`
