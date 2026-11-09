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
  data-styled.g32[id='sc-global-GYcUl'] {
    content: 'sc-global-GYcUl1,';
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
  data-styled.g33[id='sc-global-ddmFkD'] {
    content: 'sc-global-ddmFkD1,';
  }
  .hYVOZb {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding-left: 32px;
    padding-right: 32px;
  }
  @media (max-width: 900px) {
    .hYVOZb {
      padding-left: 16px;
      padding-right: 16px;
    }
  }
  data-styled.g34[id='sc-662eb54e-0'] {
    content: 'hYVOZb,';
  }
  .dOEBGb {
    background: #0b1224;
    color: #e7ecf5;
    padding-top: 72px;
    padding-bottom: 32px;
  }
  data-styled.g35[id='sc-a7c66aa2-0'] {
    content: 'dOEBGb,';
  }
  .fSztHi {
    display: grid;
    grid-template-columns: 1.4fr repeat(3, 1fr);
    gap: 48px;
  }
  @media (max-width: 900px) {
    .fSztHi {
      grid-template-columns: 1fr 1fr;
      gap: 32px;
    }
  }
  @media (max-width: 640px) {
    .fSztHi {
      grid-template-columns: 1fr;
    }
  }
  data-styled.g36[id='sc-a7c66aa2-1'] {
    content: 'fSztHi,';
  }
  .clXgLi {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  data-styled.g37[id='sc-a7c66aa2-2'] {
    content: 'clXgLi,';
  }
  .kTGQCJ {
    font-size: 22px;
    font-weight: 600;
    color: #fff;
  }
  data-styled.g38[id='sc-a7c66aa2-3'] {
    content: 'kTGQCJ,';
  }
  .ftBoNS {
    color: #94a0b8;
    font-size: 13px;
    max-width: 320px;
  }
  data-styled.g39[id='sc-a7c66aa2-4'] {
    content: 'ftBoNS,';
  }
  .dIpFxp {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  data-styled.g40[id='sc-a7c66aa2-5'] {
    content: 'dIpFxp,';
  }
  .gobcPi {
    color: #fff;
    font-size: 13px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }
  data-styled.g41[id='sc-a7c66aa2-6'] {
    content: 'gobcPi,';
  }
  .bxPbhW {
    text-align: left;
    background: none;
    border: none;
    padding: 0;
    color: #94a0b8;
    font-size: 13px;
    cursor: pointer;
    font-family: inherit;
    transition: color 120ms ease;
  }
  .bxPbhW:hover {
    color: #fff;
  }
  data-styled.g42[id='sc-a7c66aa2-7'] {
    content: 'bxPbhW,';
  }
  .ktiPQb {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  data-styled.g43[id='sc-a7c66aa2-8'] {
    content: 'ktiPQb,';
  }
  .WIPiV {
    margin-top: 48px;
    padding-top: 24px;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    color: #94a0b8;
    font-size: 12px;
  }
  @media (max-width: 640px) {
    .WIPiV {
      flex-direction: column;
      align-items: flex-start;
    }
  }
  data-styled.g44[id='sc-a7c66aa2-9'] {
    content: 'WIPiV,';
  }
  .ipQEYP {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border: 1px solid transparent;
    border-radius: 10px;
    font-weight: 500;
    cursor: pointer;
    white-space: nowrap;
    transition:
      background 120ms ease,
      border-color 120ms ease,
      color 120ms ease;
    width: auto;
    height: 34px;
    padding: 0 16px;
    font-size: 13px;
    background: #0b1224;
    color: #e7ecf5;
  }
  .ipQEYP:hover:not(:disabled) {
    background: #101a33;
  }
  .ipQEYP:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
  .kAoVoo {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border: 1px solid transparent;
    border-radius: 10px;
    font-weight: 500;
    cursor: pointer;
    white-space: nowrap;
    transition:
      background 120ms ease,
      border-color 120ms ease,
      color 120ms ease;
    width: auto;
    height: 42px;
    padding: 0 24px;
    font-size: 15px;
    background: #2e6bff;
    color: #fff;
    box-shadow: 0 1px 2px rgba(15, 26, 46, 0.06);
  }
  .kAoVoo:hover:not(:disabled) {
    background: #1e55d8;
  }
  .kAoVoo:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
  .jpoktI {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border: 1px solid transparent;
    border-radius: 10px;
    font-weight: 500;
    cursor: pointer;
    white-space: nowrap;
    transition:
      background 120ms ease,
      border-color 120ms ease,
      color 120ms ease;
    width: auto;
    height: 42px;
    padding: 0 24px;
    font-size: 15px;
    background: transparent;
    color: #0f1a2e;
  }
  .jpoktI:hover:not(:disabled) {
    background: #f0f3f9;
  }
  .jpoktI:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
  data-styled.g45[id='sc-a272a755-0'] {
    content: 'ipQEYP,kAoVoo,jpoktI,';
  }
  .gqvnMK {
    display: inline-flex;
    align-items: center;
    font-size: 1.1em;
  }
  data-styled.g46[id='sc-a272a755-1'] {
    content: 'gqvnMK,';
  }
  .dYOCUZ {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    color: #0f1a2e;
    font-family:
      'Inter',
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      Roboto,
      sans-serif;
    font-size: 17px;
    font-weight: 600;
    letter-spacing: -0.01em;
  }
  data-styled.g47[id='sc-63d2e661-0'] {
    content: 'dYOCUZ,';
  }
  .boFtdM {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border-radius: 6px;
    background: #0b1224;
    color: #fff;
    font-size: 13px;
    font-weight: 700;
  }
  data-styled.g48[id='sc-63d2e661-1'] {
    content: 'boFtdM,';
  }
  .kGbQZL > em {
    font-style: normal;
    color: #2e6bff;
  }
  data-styled.g49[id='sc-63d2e661-2'] {
    content: 'kGbQZL,';
  }
  .hUfBHi {
    position: sticky;
    top: 0;
    z-index: 50;
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: saturate(180%) blur(10px);
    border-bottom: 1px solid #e3e8f1;
  }
  data-styled.g50[id='sc-4020fe86-0'] {
    content: 'hUfBHi,';
  }
  .hEHPBi {
    display: grid;
    grid-template-columns: 1fr auto auto auto;
    grid-template-areas: 'logo locale cta burger' 'nav nav nav nav';
    align-items: center;
    gap: 12px;
    padding: 10px 0;
  }
  .hEHPBi [data-area='logo'] {
    grid-area: logo;
  }
  .hEHPBi [data-area='burger'] {
    grid-area: burger;
  }
  .hEHPBi [data-area='nav'] {
    grid-area: nav;
  }
  .hEHPBi [data-area='locale'] {
    grid-area: locale;
  }
  .hEHPBi [data-area='cta'] {
    grid-area: cta;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 40px;
    padding: 10px 18px;
    border: 1px solid #0f1a2e;
    border-radius: 6px;
    background: #0f1a2e;
    color: #fff;
    font: inherit;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    transition: background 120ms ease;
  }
  .hEHPBi [data-area='cta']:hover {
    background: #283b59;
  }
  .hEHPBi [data-area='cta']:focus-visible {
    outline: 2px solid #0f1a2e;
    outline-offset: 3px;
  }
  @media (min-width: 900px) {
    .hEHPBi {
      grid-template-columns: auto 1fr auto auto;
      grid-template-areas: 'logo nav locale cta';
    }
  }
  data-styled.g51[id='sc-4020fe86-1'] {
    content: 'hEHPBi,';
  }
  .fgfERY {
    display: none;
    flex-direction: column;
    gap: 4px;
    padding: 12px 0;
    border-top: 1px solid #e3e8f1;
  }
  @media (min-width: 900px) {
    .fgfERY {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 0;
      border-top: none;
    }
  }
  data-styled.g52[id='sc-4020fe86-2'] {
    content: 'fgfERY,';
  }
  .fInpVo {
    background: none;
    border: none;
    text-align: left;
    padding: 12px 12px;
    border-radius: 6px;
    color: #5a6679;
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    font-family: inherit;
    transition:
      color 120ms ease,
      background 120ms ease;
  }
  .fInpVo:hover {
    color: #0f1a2e;
    background: #f0f3f9;
  }
  @media (min-width: 900px) {
    .fInpVo {
      font-size: 13px;
      padding: 8px 12px;
    }
  }
  data-styled.g53[id='sc-4020fe86-3'] {
    content: 'fInpVo,';
  }
  .jSmqNG {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border: 1px solid #e3e8f1;
    background: #ffffff;
    border-radius: 6px;
    color: #0f1a2e;
    cursor: pointer;
    font-size: 20px;
    padding: 0;
  }
  @media (min-width: 900px) {
    .jSmqNG {
      display: none;
    }
  }
  data-styled.g55[id='sc-4020fe86-5'] {
    content: 'jSmqNG,';
  }
  .ciRiRf {
    position: absolute;
    opacity: 0;
    pointer-events: none;
  }
  data-styled.g56[id='sc-fd9ec81e-0'] {
    content: 'ciRiRf,';
  }
  .eRZVbY {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 2px 10px;
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
    background: transparent;
    border: 1px solid #e5e7eb;
    border-radius: 6px;
    cursor: pointer;
    color: inherit; /* Исправлена невалидная сериализация объекта цвета исходной темы. */
    transition: border-color 0.15s;
  }
  .eRZVbY:hover {
    border-color: #3b82f6;
  }
  data-styled.g57[id='sc-fd9ec81e-1'] {
    content: 'eRZVbY,';
  }
  .ktjfTu {
    position: absolute;
    top: 100%;
    right: 0;
    margin-top: 4px;
    min-width: 120px;
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 6px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-8px);
    transition:
      opacity 0.15s,
      transform 0.15s,
      visibility 0.15s;
    z-index: 10;
  }
  .sc-fd9ec81e-0:checked ~ .ktjfTu {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
  data-styled.g58[id='sc-fd9ec81e-2'] {
    content: 'ktjfTu,';
  }
  .gAYRMm {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 12px;
    font-size: 13px;
    color: inherit; /* Исправлена невалидная сериализация объекта цвета исходной темы. */
    cursor: pointer;
    background: #9ca3af;
  }
  .gAYRMm:hover {
    background: #9ca3af;
  }
  .gAYRMm:first-child {
    border-radius: 6px 6px 0 0;
  }
  .gAYRMm:last-child {
    border-radius: 0 0 6px 6px;
  }
  .dQVPZY {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 12px;
    font-size: 13px;
    color: inherit; /* Исправлена невалидная сериализация объекта цвета исходной темы. */
    cursor: pointer;
    background: transparent;
  }
  .dQVPZY:hover {
    background: #9ca3af;
  }
  .dQVPZY:first-child {
    border-radius: 6px 6px 0 0;
  }
  .dQVPZY:last-child {
    border-radius: 0 0 6px 6px;
  }
  data-styled.g59[id='sc-fd9ec81e-3'] {
    content: 'gAYRMm,dQVPZY,';
  }
  .crbSGK {
    position: relative;
    display: inline-flex;
  }
  data-styled.g60[id='sc-fd9ec81e-4'] {
    content: 'crbSGK,';
  }
  .cDAnwM {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background: #f5f7fb;
  }
  data-styled.g61[id='sc-f4bc612e-0'] {
    content: 'cDAnwM,';
  }
  .kjnFom {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  data-styled.g62[id='sc-f4bc612e-1'] {
    content: 'kjnFom,';
  }
  .ePDQyo {
    position: fixed;
    bottom: 24px;
    right: 24px;
    z-index: 1000;
  }
  data-styled.g64[id='sc-f99cc1ea-0'] {
    content: 'ePDQyo,';
  }
  .lhsNHI {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: #3b82f6;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
    transition:
      transform 0.2s,
      box-shadow 0.2s;
  }
  .lhsNHI:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 16px rgba(59, 130, 246, 0.5);
  }
  .lhsNHI svg {
    width: 24px;
    height: 24px;
    fill: #fff;
    display: block;
  }
  data-styled.g86[id='sc-f99cc1ea-22'] {
    content: 'lhsNHI,';
  }
  .cJdlMq {
    display: contents;
  }
  .cJdlMq .sc-68a340fd-1,
  .cJdlMq .sc-8c77d27c-1 {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 15px;
  }
  data-styled.g130[id='sc-ffd852fc-1'] {
    content: 'cJdlMq,';
  }
  .iHsjPR {
    background:
      radial-gradient(circle at 0% 0%, #e8f0ff 0%, transparent 55%),
      radial-gradient(circle at 100% 100%, #e6f7ec 0%, transparent 50%), #f5f7fb;
    padding: 48px 0 48px;
  }
  @media (min-width: 900px) {
    .iHsjPR {
      padding: 72px 0 72px;
    }
  }
  data-styled.g181[id='sc-282a9fb7-0'] {
    content: 'iHsjPR,';
  }
  .gCyyZM {
    display: grid;
    grid-template-columns: 1fr;
    gap: 32px;
    align-items: center;
  }
  @media (min-width: 900px) {
    .gCyyZM {
      grid-template-columns: minmax(0, 1.05fr) minmax(0, 1fr);
      gap: 48px;
    }
  }
  data-styled.g182[id='sc-282a9fb7-1'] {
    content: 'gCyyZM,';
  }
  .lmIqsX {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  data-styled.g183[id='sc-282a9fb7-2'] {
    content: 'lmIqsX,';
  }
  .dgypHz {
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
  }
  .dgypHz::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #16a34a;
    box-shadow: 0 0 0 4px #e6f7ec;
  }
  data-styled.g184[id='sc-282a9fb7-3'] {
    content: 'dgypHz,';
  }
  .cSfFWQ {
    margin: 0;
    color: #0f1a2e;
    font-size: 32px;
    font-weight: 700;
    line-height: 1.1;
    letter-spacing: -0.02em;
  }
  @media (min-width: 900px) {
    .cSfFWQ {
      font-size: 44px;
    }
  }
  data-styled.g185[id='sc-282a9fb7-4'] {
    content: 'cSfFWQ,';
  }
  .kgOwCO {
    display: block;
    background: linear-gradient(90deg, #2e6bff 0%, #16a34a 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
  data-styled.g186[id='sc-282a9fb7-5'] {
    content: 'kgOwCO,';
  }
  .isNMvS {
    margin: 0;
    color: #5a6679;
    font-size: 15px;
    line-height: 1.6;
    max-width: 560px;
  }
  @media (min-width: 900px) {
    .isNMvS {
      font-size: 17px;
    }
  }
  data-styled.g187[id='sc-282a9fb7-6'] {
    content: 'isNMvS,';
  }
  .ldpNwf {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  data-styled.g188[id='sc-282a9fb7-7'] {
    content: 'ldpNwf,';
  }
  .jTSvdK {
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
  }
  .jTSvdK::before {
    content: '✓';
    color: #16a34a;
    font-weight: 700;
  }
  data-styled.g189[id='sc-282a9fb7-8'] {
    content: 'jTSvdK,';
  }
  .clVjCc {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  @media (min-width: 640px) {
    .clVjCc {
      flex-direction: row;
      flex-wrap: wrap;
      gap: 16px;
    }
  }
  data-styled.g190[id='sc-282a9fb7-9'] {
    content: 'clVjCc,';
  }
  .kBMOtG {
    margin: 0;
    padding: 24px 0 0;
    border-top: 1px solid #e3e8f1;
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
  }
  @media (min-width: 640px) {
    .kBMOtG {
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 24px;
    }
  }
  data-styled.g191[id='sc-282a9fb7-10'] {
    content: 'kBMOtG,';
  }
  .eOGWPL {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  data-styled.g192[id='sc-282a9fb7-11'] {
    content: 'eOGWPL,';
  }
  .gRAxnu {
    font-size: 22px;
    font-weight: 700;
    color: #0f1a2e;
    letter-spacing: -0.01em;
  }
  data-styled.g193[id='sc-282a9fb7-12'] {
    content: 'gRAxnu,';
  }
  .kfteyy {
    margin: 0;
    font-size: 13px;
    color: #5a6679;
    line-height: 1.4;
  }
  data-styled.g194[id='sc-282a9fb7-13'] {
    content: 'kfteyy,';
  }
  .lnpQbY {
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    background: #ffffff;
    border: 1px solid #e3e8f1;
    box-shadow: 0 12px 32px rgba(15, 26, 46, 0.12);
    aspect-ratio: 4/3;
  }
  @media (min-width: 900px) {
    .lnpQbY {
      aspect-ratio: 5/4;
    }
  }
  data-styled.g195[id='sc-282a9fb7-14'] {
    content: 'lnpQbY,';
  }
  .dCVJrs {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  data-styled.g196[id='sc-282a9fb7-15'] {
    content: 'dCVJrs,';
  }
  .hPRGIv {
    padding: 48px 0 48px;
    background: #f5f7fb;
  }
  @media (min-width: 900px) {
    .hPRGIv {
      padding: 72px 0 72px;
    }
  }
  data-styled.g197[id='sc-103171e0-0'] {
    content: 'hPRGIv,';
  }
  .jIaQks {
    padding: 48px 0 48px;
    background: #ffffff;
  }
  @media (min-width: 900px) {
    .jIaQks {
      padding: 72px 0 72px;
    }
  }
  data-styled.g198[id='sc-103171e0-1'] {
    content: 'jIaQks,';
  }
  .lmZUTs {
    padding: 48px 0 48px;
    background: #0b1224;
    color: #e7ecf5;
  }
  @media (min-width: 900px) {
    .lmZUTs {
      padding: 72px 0 72px;
    }
  }
  data-styled.g199[id='sc-103171e0-2'] {
    content: 'lmZUTs,';
  }
  .wTork {
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-width: 760px;
    margin-bottom: 32px;
    text-align: left;
  }
  @media (min-width: 900px) {
    .wTork {
      margin-bottom: 48px;
    }
  }
  data-styled.g200[id='sc-103171e0-3'] {
    content: 'wTork,';
  }
  .ekoKfi {
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
  }
  data-styled.g201[id='sc-103171e0-4'] {
    content: 'ekoKfi,';
  }
  .kvbOJr {
    margin: 0;
    color: #0f1a2e;
    font-size: 22px;
    font-weight: 700;
    line-height: 1.15;
    letter-spacing: -0.02em;
  }
  @media (min-width: 900px) {
    .kvbOJr {
      font-size: 32px;
    }
  }
  data-styled.g202[id='sc-103171e0-5'] {
    content: 'kvbOJr,';
  }
  .jLiooE {
    margin: 0;
    color: #5a6679;
    font-size: 15px;
    line-height: 1.6;
  }
  @media (min-width: 900px) {
    .jLiooE {
      font-size: 17px;
    }
  }
  data-styled.g203[id='sc-103171e0-6'] {
    content: 'jLiooE,';
  }
  .epkDeJ {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
  }
  @media (min-width: 640px) {
    .epkDeJ {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 24px;
    }
  }
  data-styled.g208[id='sc-8bd72b73-0'] {
    content: 'epkDeJ,';
  }
  .kFYRBZ {
    position: relative;
    padding: 24px;
    background: #ffffff;
    border: 1px solid #e3e8f1;
    border-radius: 14px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .kFYRBZ::before {
    content: '';
    position: absolute;
    top: 24px;
    left: 24px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #e5484d;
    box-shadow: 0 0 0 4px #f0f3f9;
  }
  @media (min-width: 900px) {
    .kFYRBZ {
      padding: 32px;
    }
  }
  data-styled.g209[id='sc-8bd72b73-1'] {
    content: 'kFYRBZ,';
  }
  .fscujB {
    margin: 0;
    padding-left: 24px;
    color: #0f1a2e;
    font-size: 17px;
    font-weight: 600;
    line-height: 1.3;
  }
  data-styled.g210[id='sc-8bd72b73-2'] {
    content: 'fscujB,';
  }
  .ddBKhj {
    margin: 0;
    color: #5a6679;
    font-size: 15px;
    line-height: 1.55;
  }
  data-styled.g211[id='sc-8bd72b73-3'] {
    content: 'ddBKhj,';
  }
  .bAAMnY {
    display: grid;
    grid-template-columns: 1fr;
    gap: 32px;
  }
  @media (min-width: 1200px) {
    .bAAMnY {
      grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
      gap: 48px;
      align-items: start;
    }
  }
  data-styled.g212[id='sc-628866ea-0'] {
    content: 'bAAMnY,';
  }
  .iMsnOe {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  data-styled.g213[id='sc-628866ea-1'] {
    content: 'iMsnOe,';
  }
  .ldUuOE {
    position: relative;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 16px;
    padding: 24px;
    background: #ffffff;
    border: 1px solid #e3e8f1;
    border-radius: 14px;
  }
  @media (min-width: 900px) {
    .ldUuOE {
      padding: 32px;
      gap: 24px;
    }
  }
  data-styled.g214[id='sc-628866ea-2'] {
    content: 'ldUuOE,';
  }
  .elHacx {
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
  }
  data-styled.g215[id='sc-628866ea-3'] {
    content: 'elHacx,';
  }
  .fWhIDE {
    display: flex;
    flex-direction: column;
    gap: 8px;
    min-width: 0;
  }
  data-styled.g216[id='sc-628866ea-4'] {
    content: 'fWhIDE,';
  }
  .hrLXYf {
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: #16a34a;
  }
  data-styled.g217[id='sc-628866ea-5'] {
    content: 'hrLXYf,';
  }
  .dVoKDA {
    margin: 0;
    color: #0f1a2e;
    font-size: 17px;
    font-weight: 600;
    line-height: 1.3;
  }
  data-styled.g218[id='sc-628866ea-6'] {
    content: 'dVoKDA,';
  }
  .ehAHRa {
    margin: 0;
    color: #5a6679;
    font-size: 15px;
    line-height: 1.55;
  }
  data-styled.g219[id='sc-628866ea-7'] {
    content: 'ehAHRa,';
  }
  .gtuJvV {
    position: sticky;
    top: 24px;
    border-radius: 20px;
    overflow: hidden;
    border: 1px solid #e3e8f1;
    background: #ffffff;
    box-shadow: 0 4px 12px rgba(15, 26, 46, 0.08);
    aspect-ratio: 4/3;
  }
  data-styled.g220[id='sc-628866ea-8'] {
    content: 'gtuJvV,';
  }
  .jtmei {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  data-styled.g221[id='sc-628866ea-9'] {
    content: 'jtmei,';
  }
  .dsmvKj {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
  }
  @media (min-width: 640px) {
    .dsmvKj {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 24px;
    }
  }
  @media (min-width: 900px) {
    .dsmvKj {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
  data-styled.g222[id='sc-d8d7615-0'] {
    content: 'dsmvKj,';
  }
  .lxYdw {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 24px;
    background: #ffffff;
    border: 1px solid #e3e8f1;
    border-radius: 14px;
    transition: 200ms ease;
  }
  .lxYdw:hover {
    border-color: #2e6bff;
    box-shadow: 0 4px 12px rgba(15, 26, 46, 0.08);
    transform: translateY(-2px);
  }
  @media (min-width: 900px) {
    .lxYdw {
      padding: 32px;
    }
  }
  data-styled.g223[id='sc-d8d7615-1'] {
    content: 'lxYdw,';
  }
  .dowUqJ {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 10px;
    background: #e8f0ff;
    color: #2e6bff;
    font-size: 22px;
    line-height: 1;
  }
  data-styled.g224[id='sc-d8d7615-2'] {
    content: 'dowUqJ,';
  }
  .iLcykE {
    margin: 0;
    color: #0f1a2e;
    font-size: 17px;
    font-weight: 600;
    line-height: 1.3;
  }
  data-styled.g225[id='sc-d8d7615-3'] {
    content: 'iLcykE,';
  }
  .jrhKUA {
    margin: 0;
    color: #5a6679;
    font-size: 15px;
    line-height: 1.55;
  }
  data-styled.g226[id='sc-d8d7615-4'] {
    content: 'jrhKUA,';
  }
  .lotFRg {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
  }
  @media (min-width: 640px) {
    .lotFRg {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 24px;
    }
  }
  @media (min-width: 1200px) {
    .lotFRg {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }
  data-styled.g227[id='sc-9647a4ca-0'] {
    content: 'lotFRg,';
  }
  .dOpRUR {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 24px;
    background: #0b1224;
    color: #e7ecf5;
    border-radius: 14px;
    border: 1px solid rgba(255, 255, 255, 0.06);
  }
  @media (min-width: 900px) {
    .dOpRUR {
      padding: 32px;
    }
  }
  data-styled.g228[id='sc-9647a4ca-1'] {
    content: 'dOpRUR,';
  }
  .dPDBdR {
    margin: 0;
    color: #e7ecf5;
    font-size: 17px;
    font-weight: 600;
    line-height: 1.3;
  }
  data-styled.g229[id='sc-9647a4ca-2'] {
    content: 'dPDBdR,';
  }
  .jHDtfv {
    margin: 0;
    color: #94a0b8;
    font-size: 13px;
    line-height: 1.55;
  }
  data-styled.g230[id='sc-9647a4ca-3'] {
    content: 'jHDtfv,';
  }
  .gMQRxQ {
    list-style: none;
    margin: 8px 0 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  data-styled.g231[id='sc-9647a4ca-4'] {
    content: 'gMQRxQ,';
  }
  .kErGcs {
    display: inline-flex;
    align-items: center;
    padding: 4px 12px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.06);
    color: #e7ecf5;
    font-family: 'JetBrains Mono', 'SF Mono', Menlo, monospace;
    font-size: 12px;
  }
  data-styled.g232[id='sc-9647a4ca-5'] {
    content: 'kErGcs,';
  }
  .dvQpSG {
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
  }
  @media (min-width: 900px) {
    .dvQpSG {
      padding: 48px;
      grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
      gap: 48px;
      align-items: center;
    }
  }
  data-styled.g233[id='sc-2b699fd6-0'] {
    content: 'dvQpSG,';
  }
  .kJGpxE {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  data-styled.g234[id='sc-2b699fd6-1'] {
    content: 'kJGpxE,';
  }
  .krIWgE {
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
  }
  data-styled.g235[id='sc-2b699fd6-2'] {
    content: 'krIWgE,';
  }
  .gVLtWV {
    margin: 0;
    color: #e7ecf5;
    font-size: 22px;
    font-weight: 700;
    line-height: 1.15;
    letter-spacing: -0.02em;
  }
  @media (min-width: 900px) {
    .gVLtWV {
      font-size: 32px;
    }
  }
  data-styled.g236[id='sc-2b699fd6-3'] {
    content: 'gVLtWV,';
  }
  .fVCkuA {
    margin: 0;
    color: #94a0b8;
    font-size: 15px;
    line-height: 1.6;
  }
  @media (min-width: 900px) {
    .fVCkuA {
      font-size: 17px;
    }
  }
  data-styled.g237[id='sc-2b699fd6-4'] {
    content: 'fVCkuA,';
  }
  .iPwZaE {
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 24px;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 14px;
  }
  @media (min-width: 900px) {
    .iPwZaE {
      padding: 32px;
    }
  }
  data-styled.g238[id='sc-2b699fd6-5'] {
    content: 'iPwZaE,';
  }
  .kShAtj {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  data-styled.g239[id='sc-2b699fd6-6'] {
    content: 'kShAtj,';
  }
  .kmOsuq {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    color: #e7ecf5;
    font-size: 15px;
    line-height: 1.5;
  }
  .kmOsuq::before {
    content: '→';
    color: #16a34a;
    font-weight: 700;
  }
  data-styled.g240[id='sc-2b699fd6-7'] {
    content: 'kmOsuq,';
  }
  .ftFHis {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  @media (min-width: 640px) {
    .ftFHis {
      flex-direction: row;
      flex-wrap: wrap;
      gap: 16px;
    }
  }
  data-styled.g241[id='sc-2b699fd6-8'] {
    content: 'ftFHis,';
  }
  .euOFQN {
    margin: 0;
    color: #94a0b8;
    font-size: 13px;
    line-height: 1.5;
  }
  data-styled.g242[id='sc-2b699fd6-9'] {
    content: 'euOFQN,';
  }
  data-styled.g59[id='sc-fd9ec81e-3'] {
    content: 'dQVPZY,gAYRMm,';
  }
  .laHoxW h1 {
    font-size: 2em;
    margin: 1em 0;
    border-bottom: 1px solid #e5e7eb;
    padding-bottom: 0.3em;
  }
  .laHoxW h2 {
    font-size: 1.5em;
    margin: 1em 0;
    border-bottom: 1px solid #e5e7eb;
    padding-bottom: 0.3em;
  }
  .laHoxW h3 {
    font-size: 1.25em;
    margin: 1em 0;
  }
  .laHoxW h4,
  .laHoxW h5,
  .laHoxW h6 {
    margin: 1em 0;
    font-weight: 600;
  }
  .laHoxW p {
    margin: 1em 0;
  }
  .laHoxW ul,
  .laHoxW ol {
    padding-left: 2em;
    margin: 1em 0;
  }
  .laHoxW li + li {
    margin-top: 0.25em;
  }
  .laHoxW blockquote {
    margin: 1em 0;
    padding-left: 1em;
    border-left: 4px solid #d1d5db;
    color: #6b7280;
    background: #f9fafb;
  }
  .laHoxW code {
    background-color: #f3f4f6;
    padding: 0.2em 0.4em;
    font-family: monospace;
    border-radius: 4px;
    font-size: 0.95em;
  }
  .laHoxW pre {
    background-color: #f3f4f6;
    padding: 1em;
    overflow-x: auto;
    border-radius: 6px;
    margin: 1em 0;
  }
  .laHoxW pre code {
    background: none;
    padding: 0;
    font-size: 0.95em;
  }
  .laHoxW a {
    color: #3b82f6;
    text-decoration: none;
  }
  .laHoxW a:hover {
    text-decoration: underline;
  }
  .laHoxW img {
    max-width: 100%;
    height: auto;
    display: block;
  }
  .laHoxW table {
    width: 100%;
    border-collapse: collapse;
    margin: 1em 0;
  }
  .laHoxW th,
  .laHoxW td {
    border: 1px solid #d1d5db;
    padding: 0.5em;
    text-align: left;
    vertical-align: top;
  }
  .laHoxW thead {
    background: #f9fafb;
  }
  .laHoxW hr {
    border: none;
    border-top: 1px solid #e5e7eb;
    margin: 2em 0;
  }
  .laHoxW ul.contains-task-list,
  .laHoxW .task-list-item {
    list-style: none;
    padding-left: 0;
  }
  .laHoxW .task-list-item input[type='checkbox'] {
    margin-right: 0.5em;
    vertical-align: middle;
  }
  .laHoxW sub,
  .laHoxW sup {
    font-size: 0.75em;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  .laHoxW sup {
    top: -0.5em;
  }
  .laHoxW sub {
    bottom: -0.25em;
  }
  .laHoxW .footnotes {
    margin-top: 2em;
    padding-top: 1em;
    border-top: 1px solid #e5e7eb;
    font-size: 0.9em;
    color: #6b7280;
  }
  .laHoxW .footnotes ol {
    padding-left: 1.5em;
  }
  .laHoxW .footnote-ref {
    font-size: 0.75em;
    vertical-align: super;
  }
  .laHoxW .footnote-backref {
    margin-left: 0.25em;
  }
  .laHoxW .token.comment,
  .laHoxW .token.prolog,
  .laHoxW .token.doctype,
  .laHoxW .token.cdata {
    color: #6b7280;
  }
  .laHoxW .token.punctuation {
    color: #1f2937;
  }
  .laHoxW .token.property,
  .laHoxW .token.tag,
  .laHoxW .token.boolean,
  .laHoxW .token.number,
  .laHoxW .token.constant,
  .laHoxW .token.symbol,
  .laHoxW .token.deleted {
    color: #3b82f6;
  }
  .laHoxW .token.selector,
  .laHoxW .token.attr-name,
  .laHoxW .token.string,
  .laHoxW .token.char,
  .laHoxW .token.builtin,
  .laHoxW .token.inserted {
    color: #10b981;
  }
  .laHoxW .token.operator,
  .laHoxW .token.entity,
  .laHoxW .token.url,
  .laHoxW .language-css .token.string,
  .laHoxW .style .token.string {
    color: #ef4444;
  }
  .laHoxW .token.atrule,
  .laHoxW .token.attr-value,
  .laHoxW .token.keyword {
    color: #ef4444;
  }
  .laHoxW .token.function,
  .laHoxW .token.class-name {
    color: #8b5cf6;
  }
  .laHoxW .token.regex,
  .laHoxW .token.important,
  .laHoxW .token.variable {
    color: #f59e0b;
  }
  data-styled.g30[id='sc-393fa0b6-0'] {
    content: 'laHoxW,';
  }
  data-styled.g45[id='sc-a272a755-0'] {
    content: 'ipQEYP,';
  }
  .jgNOfX {
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    max-width: 100%;
    min-width: 0;
    gap: 5px;
  }
  data-styled.g110[id='sc-11fbc5f9-0'] {
    content: 'jgNOfX,';
  }
  .ercySV {
    display: inline-flex;
    flex-shrink: 0;
  }
  data-styled.g111[id='sc-11fbc5f9-1'] {
    content: 'ercySV,';
  }
  .hPTbpG {
    text-align: left;
    flex: 1;
    min-width: 0;
    overflow: hidden;
  }
  data-styled.g113[id='sc-11fbc5f9-3'] {
    content: 'hPTbpG,';
  }
  .gmvPCB {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  data-styled.g114[id='sc-11fbc5f9-4'] {
    content: 'gmvPCB,';
  }
  .hgeodZ {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: #e5e7eb;
    color: #6b7280;
    font-size: 16px;
    font-weight: 500;
    text-transform: uppercase;
    overflow: hidden;
    flex-shrink: 0;
  }
  .hgeodZ img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  data-styled.g117[id='sc-24319205-0'] {
    content: 'hgeodZ,';
  }
  .bRKbdE {
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-width: 100%;
    width: 100%;
  }
  data-styled.g125[id='sc-68a340fd-0'] {
    content: 'bRKbdE,';
  }
  .csEtZh {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  data-styled.g126[id='sc-68a340fd-1'] {
    content: 'csEtZh,';
  }
  .bjzUFx {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 4px;
    padding: 8px 0 0;
    font-size: 0.75rem;
    color: #6b7280;
  }
  data-styled.g131[id='sc-26117dc-0'] {
    content: 'bjzUFx,';
  }
  .iXbHTl {
    text-overflow: ellipsis;
    max-width: 100%;
    overflow: hidden;
    white-space: nowrap;
  }
  data-styled.g132[id='sc-26117dc-1'] {
    content: 'iXbHTl,';
  }
  .dxMSBf {
    font-size: 0.875rem;
    color: #6b7280;
  }
  data-styled.g133[id='sc-26117dc-2'] {
    content: 'dxMSBf,';
  }
  .jTCBko {
    display: flex;
    flex-direction: column;
    gap: 12px;
    background: #ffffff;
    border-radius: 12px;
    padding: 16px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
    border: 1px solid #e5e7eb;
    transition:
      box-shadow 0.2s,
      transform 0.2s;
    min-width: 0;
  }
  .jTCBko:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
  data-styled.g135[id='sc-26117dc-4'] {
    content: 'jTCBko,';
  }
  .dgjghH {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin-top: 16px;
  }
  data-styled.g176[id='sc-af3c7750-0'] {
    content: 'dgjghH,';
  }
  .ftJxmR {
    padding: 8px 12px;
    border: 1px solid #e5e7eb;
    border-radius: 6px;
    background: #ffffff;
  }
  .ftJxmR:hover:not(:disabled) {
    background: #f3f4f6;
  }
  data-styled.g177[id='sc-af3c7750-1'] {
    content: 'ftJxmR,';
  }
  .eCjqDU {
    font-size: 14px;
  }
  data-styled.g178[id='sc-af3c7750-2'] {
    content: 'eCjqDU,';
  }
  .doljBy {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    border-radius: 6px;
    transition: all 0.15s ease;
    background: #3b82f6;
    color: #ffffff;
    border: 1px solid #3b82f6;
    padding: 8px 12px;
    font-size: 14px;
    gap: 8px;
  }
  .doljBy:hover:not(:disabled) {
    opacity: 0.9;
  }
  data-styled.g23[id='sc-e7482d11-0'] {
    content: 'doljBy,';
  }
  .jvZeEj {
    background:
      radial-gradient(circle at 0% 0%, #e8f0ff 0%, transparent 55%),
      radial-gradient(circle at 100% 100%, #e6f7ec 0%, transparent 50%), #f5f7fb;
    padding: 48px 0 48px;
  }
  @media (min-width: 900px) {
    .jvZeEj {
      padding: 72px 0 72px;
    }
  }
  data-styled.g148[id='sc-b8034c2-1'] {
    content: 'jvZeEj,';
  }
  .jkIdwk {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding-left: 32px;
    padding-right: 32px;
  }
  @media (max-width: 900px) {
    .jkIdwk {
      padding-left: 16px;
      padding-right: 16px;
    }
  }
  data-styled.g149[id='sc-b8034c2-2'] {
    content: 'jkIdwk,';
  }
  .jUDmvO {
    display: grid;
    grid-template-columns: 1fr;
    gap: 32px;
    align-items: start;
  }
  @media (min-width: 900px) {
    .jUDmvO {
      grid-template-columns: 2fr 1fr;
      gap: 48px;
    }
  }
  data-styled.g150[id='sc-b8034c2-3'] {
    content: 'jUDmvO,';
  }
  .PmyxU {
    display: flex;
    flex-direction: column;
    gap: 24px;
    order: 2;
  }
  @media (min-width: 900px) {
    .PmyxU {
      order: 1;
    }
  }
  data-styled.g151[id='sc-b8034c2-4'] {
    content: 'PmyxU,';
  }
  .fVgGeK {
    margin: 0;
    color: #0f1a2e;
    font-size: 32px;
    font-weight: 700;
    line-height: 1.1;
    letter-spacing: -0.02em;
  }
  @media (min-width: 900px) {
    .fVgGeK {
      font-size: 44px;
    }
  }
  data-styled.g152[id='sc-b8034c2-5'] {
    content: 'fVgGeK,';
  }
  .dHoBMD {
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    background: #ffffff;
    border: 1px solid #e3e8f1;
    box-shadow: 0 12px 32px rgba(15, 26, 46, 0.12);
    order: 1;
  }
  @media (min-width: 900px) {
    .dHoBMD {
      order: 2;
    }
  }
  .dHoBMD img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  data-styled.g153[id='sc-b8034c2-6'] {
    content: 'dHoBMD,';
  }
  .fFroox {
    color: #5a6679;
    font-size: 15px;
    line-height: 1.7;
  }
  @media (min-width: 900px) {
    .fFroox {
      font-size: 17px;
    }
  }
  .fFroox a {
    color: #2e6bff;
    text-decoration: none;
    font-weight: 500;
    transition: color 120ms ease;
  }
  .fFroox a:hover {
    color: #1e55d8;
    text-decoration: underline;
  }
  data-styled.g154[id='sc-b8034c2-7'] {
    content: 'fFroox,';
  }
  .jbrzEo {
    margin: 32px 0 16px;
    color: #0f1a2e;
    font-size: 22px;
    font-weight: 700;
    line-height: 1.2;
  }
  @media (min-width: 900px) {
    .jbrzEo {
      font-size: 32px;
    }
  }
  data-styled.g155[id='sc-b8034c2-8'] {
    content: 'jbrzEo,';
  }
  .dPmKrF {
    margin: 24px 0 12px;
    color: #0f1a2e;
    font-size: 17px;
    font-weight: 600;
    line-height: 1.3;
  }
  @media (min-width: 900px) {
    .dPmKrF {
      font-size: 22px;
    }
  }
  data-styled.g156[id='sc-b8034c2-9'] {
    content: 'dPmKrF,';
  }
  .drmLDa {
    padding: 48px 0;
    background: #ffffff;
  }
  @media (min-width: 900px) {
    .drmLDa {
      padding: 72px 0;
    }
  }
  data-styled.g157[id='sc-b8034c2-10'] {
    content: 'drmLDa,';
  }
  .ctYwsD {
    margin: 32px 0;
    padding: 24px;
    background: #f5f7fb;
    border-radius: 14px;
  }
  @media (min-width: 900px) {
    .ctYwsD {
      margin: 48px 0;
      padding: 32px;
    }
  }
  data-styled.g158[id='sc-b8034c2-11'] {
    content: 'ctYwsD,';
  }
  .fwmKeY {
    margin-top: 10px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
  }
  @media (min-width: 900px) {
    .fwmKeY {
      grid-template-columns: 1fr 1fr;
      gap: 32px;
    }
  }
  data-styled.g159[id='sc-b8034c2-12'] {
    content: 'fwmKeY,';
  }
  .dIMlnk {
    display: block;
    text-decoration: none;
    border-radius: 20px;
    overflow: hidden;
    background: #ffffff;
    border: 1px solid #e3e8f1;
    box-shadow: 0 4px 12px rgba(15, 26, 46, 0.08);
    transition: all 200ms ease;
  }
  .dIMlnk:hover {
    box-shadow: 0 12px 32px rgba(15, 26, 46, 0.12);
    transform: translateY(-4px);
  }
  data-styled.g160[id='sc-b8034c2-13'] {
    content: 'dIMlnk,';
  }
  .dxDBHv {
    position: relative;
    width: 100%;
    aspect-ratio: 16/9;
    overflow: hidden;
  }
  .dxDBHv img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  data-styled.g161[id='sc-b8034c2-14'] {
    content: 'dxDBHv,';
  }
  .ckxAKx {
    padding: 16px;
    text-align: center;
    color: #0f1a2e;
    font-size: 15px;
    font-weight: 500;
  }
  data-styled.g162[id='sc-b8034c2-15'] {
    content: 'ckxAKx,';
  }
  .hQpjlf {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  data-styled.g128[id='sc-8c77d27c-1'] {
    content: 'hQpjlf,';
  }
  .kRxhDO {
    display: flex;
    flex-direction: column;
    gap: 12px;
    background: #ffffff;
    border-radius: 12px;
    padding: 16px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
    border: 1px solid #e5e7eb;
    transition:
      box-shadow 0.2s,
      transform 0.2s;
    min-width: 0;
    padding: 24px;
  }
  data-styled.g135[id='sc-26117dc-4'] {
    content: 'kRxhDO,';
  }
  .fQRbKW {
    cursor: pointer;
    max-width: 100%;
    height: auto;
  }
  data-styled.g87[id='sc-96c62f77-0'] {
    content: 'fQRbKW,';
  }
  .egLjrG {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    border-radius: 6px;
    transition: all 0.15s ease;
    background: #10b981;
    color: #ffffff;
    border: 1px solid #10b981;
    padding: 8px 12px;
    font-size: 14px;
    gap: 8px;
  }
  .egLjrG:hover:not(:disabled) {
    opacity: 0.9;
  }
  data-styled.g23[id='sc-e7482d11-0'] {
    content: 'egLjrG,';
  }
  .haShQU {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  data-styled.g303[id='sc-32c9a2fb-1'] {
    content: 'haShQU,';
  }
  .csCvNa {
    border-radius: 50%;
    float: left;
    margin: 0 15px 15px 0;
    max-width: 100%;
  }
  data-styled.g304[id='sc-32c9a2fb-2'] {
    content: 'csCvNa,';
  }
  .izGRid {
    clear: both;
  }
  data-styled.g305[id='sc-32c9a2fb-3'] {
    content: 'izGRid,';
  }
  .kMBIqc {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  data-styled.g306[id='sc-32c9a2fb-4'] {
    content: 'kMBIqc,';
  }
  .iYDNKZ {
    flex: 1;
  }
  data-styled.g338[id='sc-32c6322f-0'] {
    content: 'iYDNKZ,';
  }

  [data-fragment] {
    display: contents;
  }
  [data-menu-open='true'] [data-area='nav'] {
    display: flex;
  }
  :focus-visible {
    outline: 2px solid #2e6bff;
    outline-offset: 3px;
  }
  h1:focus {
    outline: none;
  }
  main {
    min-width: 0;
    overflow-wrap: anywhere;
  }
  .catalog-title {
    max-width: 1200px;
    width: 100%;
    margin: 24px auto 8px;
    padding: 0 15px;
    font-size: 32px;
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
