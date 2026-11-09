import { styled } from '@linaria/react'

// Исходная тема modx.club, извлечённая из актуального HTML 13 октября 2026 года.
// Цвета, размеры, адаптивные правила и стили материалов сохранены.
export const DocumentStyled = styled.html`
  @font-face {
    font-display: block;
    font-family: KaTeX_AMS;
    font-style: normal;
    font-weight: 400;
    src:
      url(/media/d744b3c32795d362.woff2) format('woff2'),
      url(/media/e39ffd792c291a0c.woff) format('woff'),
      url(/media/4770f53837debbcb.ttf) format('truetype');
  }
  @font-face {
    font-display: block;
    font-family: KaTeX_Caligraphic;
    font-style: normal;
    font-weight: 700;
    src:
      url(/media/6428e5493ca5236e.woff2) format('woff2'),
      url(/media/0c41f4b6e340df8f.woff) format('woff'),
      url(/media/0941efe3535e379c.ttf) format('truetype');
  }
  @font-face {
    font-display: block;
    font-family: KaTeX_Caligraphic;
    font-style: normal;
    font-weight: 400;
    src:
      url(/media/5b6097707c02547f.woff2) format('woff2'),
      url(/media/36fdade04ef75bfc.woff) format('woff'),
      url(/media/381e96d8b9d2d61f.ttf) format('truetype');
  }
  @font-face {
    font-display: block;
    font-family: KaTeX_Fraktur;
    font-style: normal;
    font-weight: 700;
    src:
      url(/media/3249488e44a6681b.woff2) format('woff2'),
      url(/media/bb1bf152a19f906a.woff) format('woff'),
      url(/media/18b2fce6c700f7f2.ttf) format('truetype');
  }
  @font-face {
    font-display: block;
    font-family: KaTeX_Fraktur;
    font-style: normal;
    font-weight: 400;
    src:
      url(/media/c3426a43e9ac12d2.woff2) format('woff2'),
      url(/media/fadaaaa4368e8594.woff) format('woff'),
      url(/media/becc064a129df91a.ttf) format('truetype');
  }
  @font-face {
    font-display: block;
    font-family: KaTeX_Main;
    font-style: normal;
    font-weight: 700;
    src:
      url(/media/2492c25e064b629c.woff2) format('woff2'),
      url(/media/2cc214933fc24bdd.woff) format('woff'),
      url(/media/9557128e2d802986.ttf) format('truetype');
  }
  @font-face {
    font-display: block;
    font-family: KaTeX_Main;
    font-style: italic;
    font-weight: 700;
    src:
      url(/media/2fde2c893d6f3616.woff2) format('woff2'),
      url(/media/5efb9504b45036b3.woff) format('woff'),
      url(/media/6d7eeb3ec707aaf9.ttf) format('truetype');
  }
  @font-face {
    font-display: block;
    font-family: KaTeX_Main;
    font-style: italic;
    font-weight: 400;
    src:
      url(/media/aae4266f2aa4d9ed.woff2) format('woff2'),
      url(/media/41603b5d353c571d.woff) format('woff'),
      url(/media/723c794a0f7cb596.ttf) format('truetype');
  }
  @font-face {
    font-display: block;
    font-family: KaTeX_Main;
    font-style: normal;
    font-weight: 400;
    src:
      url(/media/3ec689ffdb5cf537.woff2) format('woff2'),
      url(/media/98dfbb9ae661e51c.woff) format('woff'),
      url(/media/0f27a71587da1b6c.ttf) format('truetype');
  }
  @font-face {
    font-display: block;
    font-family: KaTeX_Math;
    font-style: italic;
    font-weight: 700;
    src:
      url(/media/d7d97333e80de003.woff2) format('woff2'),
      url(/media/acc8736087e1251f.woff) format('woff'),
      url(/media/e0e1764d1bc3ab44.ttf) format('truetype');
  }
  @font-face {
    font-display: block;
    font-family: KaTeX_Math;
    font-style: italic;
    font-weight: 400;
    src:
      url(/media/7c7940a407868097.woff2) format('woff2'),
      url(/media/b4b7dc7872939a25.woff) format('woff'),
      url(/media/a120f270ffef871f.ttf) format('truetype');
  }
  @font-face {
    font-display: block;
    font-family: 'KaTeX_SansSerif';
    font-style: normal;
    font-weight: 700;
    src:
      url(/media/42e0032b81ed838e.woff2) format('woff2'),
      url(/media/b73c7ebec6c3e225.woff) format('woff'),
      url(/media/d489e743ba4e4c66.ttf) format('truetype');
  }
  @font-face {
    font-display: block;
    font-family: 'KaTeX_SansSerif';
    font-style: italic;
    font-weight: 400;
    src:
      url(/media/d5d1d92d3227c73d.woff2) format('woff2'),
      url(/media/6834d33e028455c1.woff) format('woff'),
      url(/media/311e9c679373c0fe.ttf) format('truetype');
  }
  @font-face {
    font-display: block;
    font-family: 'KaTeX_SansSerif';
    font-style: normal;
    font-weight: 400;
    src:
      url(/media/f9f5408b9f2580c0.woff2) format('woff2'),
      url(/media/48697f17d95021a9.woff) format('woff'),
      url(/media/1ea56236f966d1eb.ttf) format('truetype');
  }
  @font-face {
    font-display: block;
    font-family: KaTeX_Script;
    font-style: normal;
    font-weight: 400;
    src:
      url(/media/6cb1d73cfd01d807.woff2) format('woff2'),
      url(/media/9d14981b27afe0cd.woff) format('woff'),
      url(/media/304d18c34f91cd57.ttf) format('truetype');
  }
  @font-face {
    font-display: block;
    font-family: KaTeX_Size1;
    font-style: normal;
    font-weight: 400;
    src:
      url(/media/b2bb20e89379fc2c.woff2) format('woff2'),
      url(/media/883a2414191a4936.woff) format('woff'),
      url(/media/bae72ac51483d738.ttf) format('truetype');
  }
  @font-face {
    font-display: block;
    font-family: KaTeX_Size2;
    font-style: normal;
    font-weight: 400;
    src:
      url(/media/bc17c6ed2a3f17b3.woff2) format('woff2'),
      url(/media/587574e3adfae04a.woff) format('woff'),
      url(/media/b48ec59fd0e865d6.ttf) format('truetype');
  }
  @font-face {
    font-display: block;
    font-family: KaTeX_Size3;
    font-style: normal;
    font-weight: 400;
    src:
      url(/media/d70ab3daed979cbc.woff2) format('woff2'),
      url(/media/6e2d5c88b22eb506.woff) format('woff'),
      url(/media/6cd2458229e12842.ttf) format('truetype');
  }
  @font-face {
    font-display: block;
    font-family: KaTeX_Size4;
    font-style: normal;
    font-weight: 400;
    src:
      url(/media/1941fae986806a96.woff2) format('woff2'),
      url(/media/ab2a390141cebddc.woff) format('woff'),
      url(/media/d34bc4f6cf8109db.ttf) format('truetype');
  }
  @font-face {
    font-display: block;
    font-family: KaTeX_Typewriter;
    font-style: normal;
    font-weight: 400;
    src:
      url(/media/75eff231dfe9b5a8.woff2) format('woff2'),
      url(/media/6f3463a743a5b095.woff) format('woff'),
      url(/media/c15195cc2f35a21f.ttf) format('truetype');
  }
  .katex {
    font:
      normal 1.21em KaTeX_Main,
      Times New Roman,
      serif;
    line-height: 1.2;
    position: relative;
    text-indent: 0;
    text-rendering: auto;
  }
  .katex * {
    -ms-high-contrast-adjust: none !important;
    border-color: currentColor;
  }
  .katex .katex-version:after {
    content: '0.18.4';
  }
  .katex .katex-mathml {
    border: 0;
    -webkit-clip-path: inset(50%);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
  .katex .katex-html > .katex-newline {
    display: block;
  }
  .katex .katex-base {
    position: relative;
    white-space: nowrap;
    width: -webkit-min-content;
    width: min-content;
  }
  .katex .katex-base,
  .katex .katex-strut {
    display: inline-block;
  }
  .katex .textbf {
    font-weight: 700;
  }
  .katex .textit {
    font-style: italic;
  }
  .katex .textrm {
    font-family: KaTeX_Main;
  }
  .katex .textsf {
    font-family: KaTeX_SansSerif;
  }
  .katex .texttt {
    font-family: KaTeX_Typewriter;
  }
  .katex .mathnormal {
    font-family: KaTeX_Math;
    font-style: italic;
  }
  .katex .mathit {
    font-family: KaTeX_Main;
    font-style: italic;
  }
  .katex .mathrm {
    font-style: normal;
  }
  .katex .mathbf {
    font-family: KaTeX_Main;
    font-weight: 700;
  }
  .katex .boldsymbol {
    font-family: KaTeX_Math;
    font-style: italic;
    font-weight: 700;
  }
  .katex .amsrm,
  .katex .mathbb,
  .katex .textbb {
    font-family: KaTeX_AMS;
  }
  .katex .mathcal {
    font-family: KaTeX_Caligraphic;
  }
  .katex .mathfrak,
  .katex .textfrak {
    font-family: KaTeX_Fraktur;
  }
  .katex .mathboldfrak,
  .katex .textboldfrak {
    font-family: KaTeX_Fraktur;
    font-weight: 700;
  }
  .katex .mathtt {
    font-family: KaTeX_Typewriter;
  }
  .katex .mathscr,
  .katex .textscr {
    font-family: KaTeX_Script;
  }
  .katex .mathsf,
  .katex .textsf {
    font-family: KaTeX_SansSerif;
  }
  .katex .mathboldsf,
  .katex .textboldsf {
    font-family: KaTeX_SansSerif;
    font-weight: 700;
  }
  .katex .mathitsf,
  .katex .mathsfit,
  .katex .textitsf {
    font-family: KaTeX_SansSerif;
    font-style: italic;
  }
  .katex .mainrm {
    font-family: KaTeX_Main;
    font-style: normal;
  }
  .katex .vlist-t {
    border-collapse: collapse;
    display: inline-table;
    table-layout: fixed;
  }
  .katex .vlist-r {
    display: table-row;
  }
  .katex .vlist {
    display: table-cell;
    position: relative;
    vertical-align: bottom;
  }
  .katex .vlist > span {
    display: block;
    height: 0;
    position: relative;
  }
  .katex .vlist > span > span {
    display: inline-block;
  }
  .katex .vlist > span > .pstrut {
    overflow: hidden;
    width: 0;
  }
  .katex .vlist-t2 {
    margin-right: -2px;
  }
  .katex .vlist-s {
    display: table-cell;
    font-size: 1px;
    min-width: 2px;
    vertical-align: bottom;
    width: 2px;
  }
  .katex .katex-vbox {
    align-items: baseline;
    display: inline-flex;
    flex-direction: column;
  }
  .katex .katex-thinbox {
    display: inline-flex;
    flex-direction: row;
    max-width: 0;
    width: 0;
  }
  .katex .msupsub {
    text-align: left;
  }
  .katex .mfrac > span > span {
    text-align: center;
  }
  .katex .mfrac .frac-line {
    border-bottom-style: solid;
    display: inline-block;
    width: 100%;
  }
  .katex .katex-hdashline,
  .katex .katex-hline,
  .katex .katex-overline .overline-line,
  .katex .katex-rule,
  .katex .katex-underline .underline-line,
  .katex .mfrac .frac-line {
    min-height: 1px;
  }
  .katex .mspace {
    display: inline-block;
  }
  .katex .katex-smash {
    display: inline;
    line-height: 0;
  }
  .katex .clap,
  .katex .llap,
  .katex .rlap {
    position: relative;
    width: 0;
  }
  .katex .clap > .katex-inner,
  .katex .llap > .katex-inner,
  .katex .rlap > .katex-inner {
    position: absolute;
  }
  .katex .clap > .katex-fix,
  .katex .llap > .katex-fix,
  .katex .rlap > .katex-fix {
    display: inline-block;
  }
  .katex .llap > .katex-inner {
    right: 0;
  }
  .katex .clap > .katex-inner,
  .katex .rlap > .katex-inner {
    left: 0;
  }
  .katex .clap > .katex-inner > span {
    margin-left: -50%;
    margin-right: 50%;
  }
  .katex .katex-rule {
    border: 0 solid;
    display: inline-block;
    position: relative;
  }
  .katex .katex-hline,
  .katex .katex-overline .overline-line,
  .katex .katex-underline .underline-line {
    border-bottom-style: solid;
    display: inline-block;
    width: 100%;
  }
  .katex .katex-hdashline {
    border-bottom-style: dashed;
    display: inline-block;
    width: 100%;
  }
  .katex .sqrt > .katex-root {
    margin-left: 0.2777777778em;
    margin-right: -0.5555555556em;
  }
  .katex .fontsize-ensurer.reset-size1.size1,
  .katex .katex-sizing.reset-size1.size1 {
    font-size: 1em;
  }
  .katex .fontsize-ensurer.reset-size1.size2,
  .katex .katex-sizing.reset-size1.size2 {
    font-size: 1.2em;
  }
  .katex .fontsize-ensurer.reset-size1.size3,
  .katex .katex-sizing.reset-size1.size3 {
    font-size: 1.4em;
  }
  .katex .fontsize-ensurer.reset-size1.size4,
  .katex .katex-sizing.reset-size1.size4 {
    font-size: 1.6em;
  }
  .katex .fontsize-ensurer.reset-size1.size5,
  .katex .katex-sizing.reset-size1.size5 {
    font-size: 1.8em;
  }
  .katex .fontsize-ensurer.reset-size1.size6,
  .katex .katex-sizing.reset-size1.size6 {
    font-size: 2em;
  }
  .katex .fontsize-ensurer.reset-size1.size7,
  .katex .katex-sizing.reset-size1.size7 {
    font-size: 2.4em;
  }
  .katex .fontsize-ensurer.reset-size1.size8,
  .katex .katex-sizing.reset-size1.size8 {
    font-size: 2.88em;
  }
  .katex .fontsize-ensurer.reset-size1.size9,
  .katex .katex-sizing.reset-size1.size9 {
    font-size: 3.456em;
  }
  .katex .fontsize-ensurer.reset-size1.size10,
  .katex .katex-sizing.reset-size1.size10 {
    font-size: 4.148em;
  }
  .katex .fontsize-ensurer.reset-size1.size11,
  .katex .katex-sizing.reset-size1.size11 {
    font-size: 4.976em;
  }
  .katex .fontsize-ensurer.reset-size2.size1,
  .katex .katex-sizing.reset-size2.size1 {
    font-size: 0.8333333333em;
  }
  .katex .fontsize-ensurer.reset-size2.size2,
  .katex .katex-sizing.reset-size2.size2 {
    font-size: 1em;
  }
  .katex .fontsize-ensurer.reset-size2.size3,
  .katex .katex-sizing.reset-size2.size3 {
    font-size: 1.1666666667em;
  }
  .katex .fontsize-ensurer.reset-size2.size4,
  .katex .katex-sizing.reset-size2.size4 {
    font-size: 1.3333333333em;
  }
  .katex .fontsize-ensurer.reset-size2.size5,
  .katex .katex-sizing.reset-size2.size5 {
    font-size: 1.5em;
  }
  .katex .fontsize-ensurer.reset-size2.size6,
  .katex .katex-sizing.reset-size2.size6 {
    font-size: 1.6666666667em;
  }
  .katex .fontsize-ensurer.reset-size2.size7,
  .katex .katex-sizing.reset-size2.size7 {
    font-size: 2em;
  }
  .katex .fontsize-ensurer.reset-size2.size8,
  .katex .katex-sizing.reset-size2.size8 {
    font-size: 2.4em;
  }
  .katex .fontsize-ensurer.reset-size2.size9,
  .katex .katex-sizing.reset-size2.size9 {
    font-size: 2.88em;
  }
  .katex .fontsize-ensurer.reset-size2.size10,
  .katex .katex-sizing.reset-size2.size10 {
    font-size: 3.4566666667em;
  }
  .katex .fontsize-ensurer.reset-size2.size11,
  .katex .katex-sizing.reset-size2.size11 {
    font-size: 4.1466666667em;
  }
  .katex .fontsize-ensurer.reset-size3.size1,
  .katex .katex-sizing.reset-size3.size1 {
    font-size: 0.7142857143em;
  }
  .katex .fontsize-ensurer.reset-size3.size2,
  .katex .katex-sizing.reset-size3.size2 {
    font-size: 0.8571428571em;
  }
  .katex .fontsize-ensurer.reset-size3.size3,
  .katex .katex-sizing.reset-size3.size3 {
    font-size: 1em;
  }
  .katex .fontsize-ensurer.reset-size3.size4,
  .katex .katex-sizing.reset-size3.size4 {
    font-size: 1.1428571429em;
  }
  .katex .fontsize-ensurer.reset-size3.size5,
  .katex .katex-sizing.reset-size3.size5 {
    font-size: 1.2857142857em;
  }
  .katex .fontsize-ensurer.reset-size3.size6,
  .katex .katex-sizing.reset-size3.size6 {
    font-size: 1.4285714286em;
  }
  .katex .fontsize-ensurer.reset-size3.size7,
  .katex .katex-sizing.reset-size3.size7 {
    font-size: 1.7142857143em;
  }
  .katex .fontsize-ensurer.reset-size3.size8,
  .katex .katex-sizing.reset-size3.size8 {
    font-size: 2.0571428571em;
  }
  .katex .fontsize-ensurer.reset-size3.size9,
  .katex .katex-sizing.reset-size3.size9 {
    font-size: 2.4685714286em;
  }
  .katex .fontsize-ensurer.reset-size3.size10,
  .katex .katex-sizing.reset-size3.size10 {
    font-size: 2.9628571429em;
  }
  .katex .fontsize-ensurer.reset-size3.size11,
  .katex .katex-sizing.reset-size3.size11 {
    font-size: 3.5542857143em;
  }
  .katex .fontsize-ensurer.reset-size4.size1,
  .katex .katex-sizing.reset-size4.size1 {
    font-size: 0.625em;
  }
  .katex .fontsize-ensurer.reset-size4.size2,
  .katex .katex-sizing.reset-size4.size2 {
    font-size: 0.75em;
  }
  .katex .fontsize-ensurer.reset-size4.size3,
  .katex .katex-sizing.reset-size4.size3 {
    font-size: 0.875em;
  }
  .katex .fontsize-ensurer.reset-size4.size4,
  .katex .katex-sizing.reset-size4.size4 {
    font-size: 1em;
  }
  .katex .fontsize-ensurer.reset-size4.size5,
  .katex .katex-sizing.reset-size4.size5 {
    font-size: 1.125em;
  }
  .katex .fontsize-ensurer.reset-size4.size6,
  .katex .katex-sizing.reset-size4.size6 {
    font-size: 1.25em;
  }
  .katex .fontsize-ensurer.reset-size4.size7,
  .katex .katex-sizing.reset-size4.size7 {
    font-size: 1.5em;
  }
  .katex .fontsize-ensurer.reset-size4.size8,
  .katex .katex-sizing.reset-size4.size8 {
    font-size: 1.8em;
  }
  .katex .fontsize-ensurer.reset-size4.size9,
  .katex .katex-sizing.reset-size4.size9 {
    font-size: 2.16em;
  }
  .katex .fontsize-ensurer.reset-size4.size10,
  .katex .katex-sizing.reset-size4.size10 {
    font-size: 2.5925em;
  }
  .katex .fontsize-ensurer.reset-size4.size11,
  .katex .katex-sizing.reset-size4.size11 {
    font-size: 3.11em;
  }
  .katex .fontsize-ensurer.reset-size5.size1,
  .katex .katex-sizing.reset-size5.size1 {
    font-size: 0.5555555556em;
  }
  .katex .fontsize-ensurer.reset-size5.size2,
  .katex .katex-sizing.reset-size5.size2 {
    font-size: 0.6666666667em;
  }
  .katex .fontsize-ensurer.reset-size5.size3,
  .katex .katex-sizing.reset-size5.size3 {
    font-size: 0.7777777778em;
  }
  .katex .fontsize-ensurer.reset-size5.size4,
  .katex .katex-sizing.reset-size5.size4 {
    font-size: 0.8888888889em;
  }
  .katex .fontsize-ensurer.reset-size5.size5,
  .katex .katex-sizing.reset-size5.size5 {
    font-size: 1em;
  }
  .katex .fontsize-ensurer.reset-size5.size6,
  .katex .katex-sizing.reset-size5.size6 {
    font-size: 1.1111111111em;
  }
  .katex .fontsize-ensurer.reset-size5.size7,
  .katex .katex-sizing.reset-size5.size7 {
    font-size: 1.3333333333em;
  }
  .katex .fontsize-ensurer.reset-size5.size8,
  .katex .katex-sizing.reset-size5.size8 {
    font-size: 1.6em;
  }
  .katex .fontsize-ensurer.reset-size5.size9,
  .katex .katex-sizing.reset-size5.size9 {
    font-size: 1.92em;
  }
  .katex .fontsize-ensurer.reset-size5.size10,
  .katex .katex-sizing.reset-size5.size10 {
    font-size: 2.3044444444em;
  }
  .katex .fontsize-ensurer.reset-size5.size11,
  .katex .katex-sizing.reset-size5.size11 {
    font-size: 2.7644444444em;
  }
  .katex .fontsize-ensurer.reset-size6.size1,
  .katex .katex-sizing.reset-size6.size1 {
    font-size: 0.5em;
  }
  .katex .fontsize-ensurer.reset-size6.size2,
  .katex .katex-sizing.reset-size6.size2 {
    font-size: 0.6em;
  }
  .katex .fontsize-ensurer.reset-size6.size3,
  .katex .katex-sizing.reset-size6.size3 {
    font-size: 0.7em;
  }
  .katex .fontsize-ensurer.reset-size6.size4,
  .katex .katex-sizing.reset-size6.size4 {
    font-size: 0.8em;
  }
  .katex .fontsize-ensurer.reset-size6.size5,
  .katex .katex-sizing.reset-size6.size5 {
    font-size: 0.9em;
  }
  .katex .fontsize-ensurer.reset-size6.size6,
  .katex .katex-sizing.reset-size6.size6 {
    font-size: 1em;
  }
  .katex .fontsize-ensurer.reset-size6.size7,
  .katex .katex-sizing.reset-size6.size7 {
    font-size: 1.2em;
  }
  .katex .fontsize-ensurer.reset-size6.size8,
  .katex .katex-sizing.reset-size6.size8 {
    font-size: 1.44em;
  }
  .katex .fontsize-ensurer.reset-size6.size9,
  .katex .katex-sizing.reset-size6.size9 {
    font-size: 1.728em;
  }
  .katex .fontsize-ensurer.reset-size6.size10,
  .katex .katex-sizing.reset-size6.size10 {
    font-size: 2.074em;
  }
  .katex .fontsize-ensurer.reset-size6.size11,
  .katex .katex-sizing.reset-size6.size11 {
    font-size: 2.488em;
  }
  .katex .fontsize-ensurer.reset-size7.size1,
  .katex .katex-sizing.reset-size7.size1 {
    font-size: 0.4166666667em;
  }
  .katex .fontsize-ensurer.reset-size7.size2,
  .katex .katex-sizing.reset-size7.size2 {
    font-size: 0.5em;
  }
  .katex .fontsize-ensurer.reset-size7.size3,
  .katex .katex-sizing.reset-size7.size3 {
    font-size: 0.5833333333em;
  }
  .katex .fontsize-ensurer.reset-size7.size4,
  .katex .katex-sizing.reset-size7.size4 {
    font-size: 0.6666666667em;
  }
  .katex .fontsize-ensurer.reset-size7.size5,
  .katex .katex-sizing.reset-size7.size5 {
    font-size: 0.75em;
  }
  .katex .fontsize-ensurer.reset-size7.size6,
  .katex .katex-sizing.reset-size7.size6 {
    font-size: 0.8333333333em;
  }
  .katex .fontsize-ensurer.reset-size7.size7,
  .katex .katex-sizing.reset-size7.size7 {
    font-size: 1em;
  }
  .katex .fontsize-ensurer.reset-size7.size8,
  .katex .katex-sizing.reset-size7.size8 {
    font-size: 1.2em;
  }
  .katex .fontsize-ensurer.reset-size7.size9,
  .katex .katex-sizing.reset-size7.size9 {
    font-size: 1.44em;
  }
  .katex .fontsize-ensurer.reset-size7.size10,
  .katex .katex-sizing.reset-size7.size10 {
    font-size: 1.7283333333em;
  }
  .katex .fontsize-ensurer.reset-size7.size11,
  .katex .katex-sizing.reset-size7.size11 {
    font-size: 2.0733333333em;
  }
  .katex .fontsize-ensurer.reset-size8.size1,
  .katex .katex-sizing.reset-size8.size1 {
    font-size: 0.3472222222em;
  }
  .katex .fontsize-ensurer.reset-size8.size2,
  .katex .katex-sizing.reset-size8.size2 {
    font-size: 0.4166666667em;
  }
  .katex .fontsize-ensurer.reset-size8.size3,
  .katex .katex-sizing.reset-size8.size3 {
    font-size: 0.4861111111em;
  }
  .katex .fontsize-ensurer.reset-size8.size4,
  .katex .katex-sizing.reset-size8.size4 {
    font-size: 0.5555555556em;
  }
  .katex .fontsize-ensurer.reset-size8.size5,
  .katex .katex-sizing.reset-size8.size5 {
    font-size: 0.625em;
  }
  .katex .fontsize-ensurer.reset-size8.size6,
  .katex .katex-sizing.reset-size8.size6 {
    font-size: 0.6944444444em;
  }
  .katex .fontsize-ensurer.reset-size8.size7,
  .katex .katex-sizing.reset-size8.size7 {
    font-size: 0.8333333333em;
  }
  .katex .fontsize-ensurer.reset-size8.size8,
  .katex .katex-sizing.reset-size8.size8 {
    font-size: 1em;
  }
  .katex .fontsize-ensurer.reset-size8.size9,
  .katex .katex-sizing.reset-size8.size9 {
    font-size: 1.2em;
  }
  .katex .fontsize-ensurer.reset-size8.size10,
  .katex .katex-sizing.reset-size8.size10 {
    font-size: 1.4402777778em;
  }
  .katex .fontsize-ensurer.reset-size8.size11,
  .katex .katex-sizing.reset-size8.size11 {
    font-size: 1.7277777778em;
  }
  .katex .fontsize-ensurer.reset-size9.size1,
  .katex .katex-sizing.reset-size9.size1 {
    font-size: 0.2893518519em;
  }
  .katex .fontsize-ensurer.reset-size9.size2,
  .katex .katex-sizing.reset-size9.size2 {
    font-size: 0.3472222222em;
  }
  .katex .fontsize-ensurer.reset-size9.size3,
  .katex .katex-sizing.reset-size9.size3 {
    font-size: 0.4050925926em;
  }
  .katex .fontsize-ensurer.reset-size9.size4,
  .katex .katex-sizing.reset-size9.size4 {
    font-size: 0.462962963em;
  }
  .katex .fontsize-ensurer.reset-size9.size5,
  .katex .katex-sizing.reset-size9.size5 {
    font-size: 0.5208333333em;
  }
  .katex .fontsize-ensurer.reset-size9.size6,
  .katex .katex-sizing.reset-size9.size6 {
    font-size: 0.5787037037em;
  }
  .katex .fontsize-ensurer.reset-size9.size7,
  .katex .katex-sizing.reset-size9.size7 {
    font-size: 0.6944444444em;
  }
  .katex .fontsize-ensurer.reset-size9.size8,
  .katex .katex-sizing.reset-size9.size8 {
    font-size: 0.8333333333em;
  }
  .katex .fontsize-ensurer.reset-size9.size9,
  .katex .katex-sizing.reset-size9.size9 {
    font-size: 1em;
  }
  .katex .fontsize-ensurer.reset-size9.size10,
  .katex .katex-sizing.reset-size9.size10 {
    font-size: 1.2002314815em;
  }
  .katex .fontsize-ensurer.reset-size9.size11,
  .katex .katex-sizing.reset-size9.size11 {
    font-size: 1.4398148148em;
  }
  .katex .fontsize-ensurer.reset-size10.size1,
  .katex .katex-sizing.reset-size10.size1 {
    font-size: 0.2410800386em;
  }
  .katex .fontsize-ensurer.reset-size10.size2,
  .katex .katex-sizing.reset-size10.size2 {
    font-size: 0.2892960463em;
  }
  .katex .fontsize-ensurer.reset-size10.size3,
  .katex .katex-sizing.reset-size10.size3 {
    font-size: 0.337512054em;
  }
  .katex .fontsize-ensurer.reset-size10.size4,
  .katex .katex-sizing.reset-size10.size4 {
    font-size: 0.3857280617em;
  }
  .katex .fontsize-ensurer.reset-size10.size5,
  .katex .katex-sizing.reset-size10.size5 {
    font-size: 0.4339440694em;
  }
  .katex .fontsize-ensurer.reset-size10.size6,
  .katex .katex-sizing.reset-size10.size6 {
    font-size: 0.4821600771em;
  }
  .katex .fontsize-ensurer.reset-size10.size7,
  .katex .katex-sizing.reset-size10.size7 {
    font-size: 0.5785920926em;
  }
  .katex .fontsize-ensurer.reset-size10.size8,
  .katex .katex-sizing.reset-size10.size8 {
    font-size: 0.6943105111em;
  }
  .katex .fontsize-ensurer.reset-size10.size9,
  .katex .katex-sizing.reset-size10.size9 {
    font-size: 0.8331726133em;
  }
  .katex .fontsize-ensurer.reset-size10.size10,
  .katex .katex-sizing.reset-size10.size10 {
    font-size: 1em;
  }
  .katex .fontsize-ensurer.reset-size10.size11,
  .katex .katex-sizing.reset-size10.size11 {
    font-size: 1.1996142719em;
  }
  .katex .fontsize-ensurer.reset-size11.size1,
  .katex .katex-sizing.reset-size11.size1 {
    font-size: 0.2009646302em;
  }
  .katex .fontsize-ensurer.reset-size11.size2,
  .katex .katex-sizing.reset-size11.size2 {
    font-size: 0.2411575563em;
  }
  .katex .fontsize-ensurer.reset-size11.size3,
  .katex .katex-sizing.reset-size11.size3 {
    font-size: 0.2813504823em;
  }
  .katex .fontsize-ensurer.reset-size11.size4,
  .katex .katex-sizing.reset-size11.size4 {
    font-size: 0.3215434084em;
  }
  .katex .fontsize-ensurer.reset-size11.size5,
  .katex .katex-sizing.reset-size11.size5 {
    font-size: 0.3617363344em;
  }
  .katex .fontsize-ensurer.reset-size11.size6,
  .katex .katex-sizing.reset-size11.size6 {
    font-size: 0.4019292605em;
  }
  .katex .fontsize-ensurer.reset-size11.size7,
  .katex .katex-sizing.reset-size11.size7 {
    font-size: 0.4823151125em;
  }
  .katex .fontsize-ensurer.reset-size11.size8,
  .katex .katex-sizing.reset-size11.size8 {
    font-size: 0.578778135em;
  }
  .katex .fontsize-ensurer.reset-size11.size9,
  .katex .katex-sizing.reset-size11.size9 {
    font-size: 0.6945337621em;
  }
  .katex .fontsize-ensurer.reset-size11.size10,
  .katex .katex-sizing.reset-size11.size10 {
    font-size: 0.8336012862em;
  }
  .katex .fontsize-ensurer.reset-size11.size11,
  .katex .katex-sizing.reset-size11.size11 {
    font-size: 1em;
  }
  .katex .delimsizing.size1 {
    font-family: KaTeX_Size1;
  }
  .katex .delimsizing.size2 {
    font-family: KaTeX_Size2;
  }
  .katex .delimsizing.size3 {
    font-family: KaTeX_Size3;
  }
  .katex .delimsizing.size4 {
    font-family: KaTeX_Size4;
  }
  .katex .delimsizing.mult .delim-size1 > span {
    font-family: KaTeX_Size1;
  }
  .katex .delimsizing.mult .delim-size4 > span {
    font-family: KaTeX_Size4;
  }
  .katex .nulldelimiter {
    display: inline-block;
    width: 0.12em;
  }
  .katex .delimcenter,
  .katex .op-symbol {
    position: relative;
  }
  .katex .op-symbol.small-op {
    font-family: KaTeX_Size1;
  }
  .katex .op-symbol.large-op {
    font-family: KaTeX_Size2;
  }
  .katex .katex-accent > .vlist-t,
  .katex .op-limits > .vlist-t {
    text-align: center;
  }
  .katex .katex-accent .accent-body {
    position: relative;
  }
  .katex .katex-accent .accent-body:not(.accent-full) {
    width: 0;
  }
  .katex .katex-overlay {
    display: block;
  }
  .katex .mtable .vertical-separator {
    display: inline-block;
    min-width: 1px;
  }
  .katex .mtable .arraycolsep {
    display: inline-block;
  }
  .katex .mtable .col-align-c > .vlist-t {
    text-align: center;
  }
  .katex .mtable .col-align-l > .vlist-t {
    text-align: left;
  }
  .katex .mtable .col-align-r > .vlist-t {
    text-align: right;
  }
  .katex .svg-align {
    text-align: left;
  }
  .katex svg {
    fill: currentColor;
    stroke: currentColor;
    display: block;
    height: inherit;
    position: absolute;
    width: 100%;
  }
  .katex svg path {
    stroke: none;
  }
  .katex svg {
    fill-rule: nonzero;
    fill-opacity: 1;
    stroke-width: 1;
    stroke-linecap: butt;
    stroke-linejoin: miter;
    stroke-miterlimit: 4;
    stroke-dasharray: none;
    stroke-dashoffset: 0;
    stroke-opacity: 1;
  }
  .katex img {
    border-style: none;
    max-height: none;
    max-width: none;
    min-height: 0;
    min-width: 0;
  }
  .katex .katex-stretchy {
    display: block;
    overflow: hidden;
    position: relative;
    width: 100%;
  }
  .katex .katex-stretchy:after,
  .katex .katex-stretchy:before {
    content: '';
  }
  .katex .hide-tail {
    overflow: hidden;
    position: relative;
    width: 100%;
  }
  .katex .halfarrow-left {
    left: 0;
    overflow: hidden;
    position: absolute;
    width: 50.2%;
  }
  .katex .halfarrow-right {
    overflow: hidden;
    position: absolute;
    right: 0;
    width: 50.2%;
  }
  .katex .brace-left {
    left: 0;
    overflow: hidden;
    position: absolute;
    width: 25.1%;
  }
  .katex .brace-center {
    left: 25%;
    overflow: hidden;
    position: absolute;
    width: 50%;
  }
  .katex .brace-right {
    overflow: hidden;
    position: absolute;
    right: 0;
    width: 25.1%;
  }
  .katex .x-arrow-pad {
    padding: 0 0.5em;
  }
  .katex .cd-arrow-pad {
    padding: 0 0.55556em 0 0.27778em;
  }
  .katex .mover,
  .katex .munder,
  .katex .x-arrow {
    text-align: center;
  }
  .katex .boxpad {
    padding: 0 0.3em;
  }
  .katex .fbox,
  .katex .fcolorbox {
    border: 0.04em solid;
    box-sizing: border-box;
  }
  .katex .cancel-pad {
    padding: 0 0.2em;
  }
  .katex .cancel-lap {
    margin-left: -0.2em;
    margin-right: -0.2em;
  }
  .katex .katex-sout {
    border-bottom-style: solid;
    border-bottom-width: 0.08em;
  }
  .katex .angl {
    border-right: 0.049em solid;
    border-top: 0.049em solid;
    box-sizing: border-box;
    margin-right: 0.03889em;
  }
  .katex .anglpad {
    padding: 0 0.03889em;
  }
  .katex .eqn-num:before {
    content: '(' counter(katexEqnNo) ')';
    counter-increment: katexEqnNo;
  }
  .katex .mml-eqn-num:before {
    content: '(' counter(mmlEqnNo) ')';
    counter-increment: mmlEqnNo;
  }
  .katex .mtr-glue {
    width: 50%;
  }
  .katex .cd-vert-arrow {
    display: inline-block;
    position: relative;
  }
  .katex .cd-label-left {
    display: inline-block;
    position: absolute;
    right: calc(50% + 0.3em);
    text-align: left;
  }
  .katex .cd-label-right {
    display: inline-block;
    left: calc(50% + 0.3em);
    position: absolute;
    text-align: right;
  }
  .katex-display {
    display: block;
    margin: 1em 0;
    text-align: center;
  }
  .katex-display > .katex {
    display: block;
    text-align: center;
    white-space: nowrap;
  }
  .katex-display > .katex > .katex-html {
    display: block;
    position: relative;
  }
  .katex-display > .katex > .katex-html > .katex-tag {
    position: absolute;
    right: 0;
  }
  .katex-display.leqno > .katex > .katex-html > .katex-tag {
    left: 0;
    right: auto;
  }
  .katex-display.fleqn > .katex {
    padding-left: 2em;
    text-align: left;
  }
  body {
    counter-reset: katexEqnNo mmlEqnNo;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    margin-top: 0;
    margin-bottom: 0;
  }
  /*!sc*/
  &,
  body {
    height: 100%;
    padding: 0;
    margin: 0;
  }
  body {
    font-family: 'Nunito', sans-serif;
    font-size: 16px;
  }
  #__next {
    height: 100%;
  }
  a {
    text-decoration: none;
    color: #1f2937;
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
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  &,
  body,
  #root {
    height: 100%;
  }
  body {
    margin: 0;
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
  a {
    color: inherit;
    text-decoration: none;
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
