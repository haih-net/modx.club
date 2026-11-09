import { styled } from '@linaria/react'
import { theme } from '.'

// Исходная тема modx.club, извлечённая из актуального HTML 13 октября 2026 года.
// Цвета, размеры, адаптивные правила и стили материалов сохранены.
export const HtmlStyled = styled.html`
  /* Глобальные значения уступают стилям компонентов независимо от порядка CSS. */
  :where(&) * {
    box-sizing: border-box;
    outline: ${theme.outline};
    margin: 0;
    padding: 0;
  }
  /*!sc*/
  :where(&),
  :where(&) body,
  :where(&) #root {
    height: 100%;
    padding: 0;
    margin: 0;
  }
  :where(&) a {
    text-decoration: none;
    color: inherit;
  }
  :where(&) a:hover {
    text-decoration: underline;
  }
  :where(&) a:active {
    text-decoration: none;
  }
  :where(&) input:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
  :where(&) button:enabled {
    cursor: pointer;
  }
  :where(&) button:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
  :where(&) body .mdxeditor-popup-container {
    z-index: 2000;
  }
  :where(&) *::before,
  :where(&) *::after {
    box-sizing: border-box;
  }
  :where(&) body {
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
  :where(&) button {
    font-family: inherit;
  }
  :where(&) h1,
  :where(&) h2,
  :where(&) h3,
  :where(&) h4,
  :where(&) h5,
  :where(&) h6 {
    margin: 0;
    font-weight: 600;
    letter-spacing: -0.01em;
  }
  :where(&) p {
    margin: 0;
  }
  :where(&) main {
    min-width: 0;
    overflow-wrap: anywhere;
  }
  :where(&) [id] {
    scroll-margin-top: 88px;
  }
`
