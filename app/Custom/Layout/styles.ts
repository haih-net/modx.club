import { styled } from '@linaria/react'

// Исходная тема modx.club, извлечённая из актуального HTML 13 октября 2026 года.
// Цвета, размеры, адаптивные правила и стили материалов сохранены.
export const DocumentStyled = styled.html`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  /*!sc*/
  &,
  body,
  #root {
    height: 100%;
    padding: 0;
    margin: 0;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  a:hover {
    text-decoration: underline;
  }
  a:active {
    text-decoration: none;
  }
  input:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
  button:enabled {
    cursor: pointer;
  }
  button:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
  body .mdxeditor-popup-container {
    z-index: 2000;
  }
  *::before,
  *::after {
    box-sizing: border-box;
  }
  body {
    font-family:
      'Inter',
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      Roboto,
      sans-serif;
    font-size: 15px;
    line-height: 1.55;
    color: #0f1a2e;
    background: #f5f7fb;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }
  button {
    font-family: inherit;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    font-weight: 600;
    letter-spacing: -0.01em;
  }
  p {
    margin: 0;
  }
  main {
    min-width: 0;
    overflow-wrap: anywhere;
  }
  [id] {
    scroll-margin-top: 88px;
  }
`

import { theme } from '../theme'

export const AiButtonStyled = styled.button``

export const CustomLayoutSectionStyled = styled.section`
  max-width: 1328px;
  padding: 44px 24px;
  margin: auto;

  @media (min-width: ${theme.breakpoints.sm}px) {
    padding: 64px 40px;
  }
`

export const CustomLayoutGridStyled = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px;

  @media (min-width: ${theme.breakpoints.xs}px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${theme.breakpoints.sm}px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 24px;
  }
`

export const CustomLayoutMainStyled = styled.main`
  flex: 1;
  min-width: 0;
`

export const CustomLayoutStyled = styled.div`
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  color: ${theme.colors.foreground};
  background: ${theme.backgrounds.page};
  .ai-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border: 1px solid transparent;
    border-radius: 10px;
    padding: 14px 20px;
    background: ${theme.colors.primary};
    color: #fff;
    font-size: 14px;
    font-weight: 700;
    line-height: 1.4;
    transition: background 0.2s;
    text-decoration: none;
  }
  .ai-button:hover {
    background: #28583f;
    text-decoration: none;
  }
  .skip-link {
    position: absolute;
    top: -100px;
    left: 20px;
    padding: 12px 20px;
    background: white;
    z-index: 1100;
  }
  .skip-link:focus {
    top: 12px;
  }
`
