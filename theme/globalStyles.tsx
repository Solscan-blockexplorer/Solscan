import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
  --primary-color: #1D1567;
  --secondary-color:#25DC98
}
/* Box sizing */
*,
*::before,
*::after {
  box-sizing: border-box;
}
ol, ul {
	list-style: none;
}
/* Reset margins */
body,
h1,
h2,
h3,
h4,
h5,
p,
figure,
picture {
  margin: 0;
}
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
/* set up the body */
body {
  line-height: 1.5;
  min-height: 100vh;
  font-family: "Fira Sans", sans-serif;
  /* background: #2c3e50; */
  /* background: -webkit-linear-gradient(to right, #5b86e5, #36d1dc);
  background: linear-gradient(to right, #bdc3c7, #2c3e50); */
}
/* make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}
/* make form elements easier to work with */
input,
button,
textarea,
select {
  font: inherit;
}
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
/* remove animations for people who've turned them off */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
/* ------------------- */
/* Utility classes     */
/* ------------------- */

`;

export default GlobalStyle;
