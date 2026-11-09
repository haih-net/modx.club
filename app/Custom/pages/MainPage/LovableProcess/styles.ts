import { styled } from '@linaria/react'

export const ProcessLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;

  @media (min-width: 1200px) {
    grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
    gap: 48px;
    align-items: start;
  }
`

export const StepsList = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const StepItem = styled.li`
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 16px;
  padding: 24px;
  background: #ffffff;
  border: 1px solid #e3e8f1;
  border-radius: 14px;

  @media (min-width: 900px) {
    padding: 32px;
    gap: 24px;
  }
`

export const StepNum = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 44px;
  height: 44px;
  padding: 0 12px;
  border-radius: 10px;
  background: #e8f0ff;
  color: #2e6bff;
  font-family: 'JetBrains Mono', 'SF Mono', Menlo, monospace;
  font-weight: 700;
  font-size: 15px;
`

export const StepBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;
`

export const StepMarker = styled.span`
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: #16a34a;
`

export const StepTitle = styled.h3`
  margin: 0;
  color: #0f1a2e;
  font-size: 17px;
  font-weight: 600;
  line-height: 1.3;
`

export const StepText = styled.p`
  margin: 0;
  color: #5a6679;
  font-size: 15px;
  line-height: 1.55;
`

export const ProcessMedia = styled.div`
  position: sticky;
  top: 24px;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid #e3e8f1;
  background: #ffffff;
  box-shadow: 0 4px 12px rgba(15, 26, 46, 0.08);
  aspect-ratio: 4 / 3;
`

export const ProcessImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`
