import { styled } from '@linaria/react'

export const ConceptsViewStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px;
`
export const ConceptsViewListStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 100%;
  width: 100%;
`
export const ConceptItemStyled = styled.article`
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: #fff;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  border: 1px solid #e5e7eb;
  transition:
    box-shadow 0.2s,
    transform 0.2s;
  min-width: 0;
  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
`
export const ConceptItemTitleStyled = styled.h3`
  text-overflow: ellipsis;
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
`
export const ConceptItemDescriptionStyled = styled.div`
  font-size: 0.875rem;
  color: #6b7280;
`

export const CatalogTitleStyled = styled.h1`
  max-width: 1200px;
  width: 100%;
  margin: 24px auto 8px;
  padding: 0 15px;
  font-size: 32px;
`
