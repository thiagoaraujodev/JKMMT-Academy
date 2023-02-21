import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
	margin: 0;
	padding: 0;
	border: none;
	text-decoration: none;
	box-sizing: border-box;
}

ul {
	list-style: none;
}

a {
	text-decoration: none;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
	margin: 0;
}

img {
	width: 100%;
	height: auto;
}

iframe {
	width: 100%;
	height: 100%;
}

.container {
	padding: 0 16px;
	margin-left: auto;
  margin-right: auto;
}

@media (max-width: 767.98px) {
	.container-sm,
	.container {
		max-width: 100%;
	}
}

@media (min-width: 1400px) {
	.container-xxl,
	.container-xl,
	.container-lg,
	.container-md,
	.container-sm,
	.container {
		max-width: 1280px;
	}
}

/*==== VARIABLES ============================ */
:root {
	--color-primary: #7A43ED;
	--color-green: #4CAF50;
	--bg-color-primary: #fbfcff;
}

/*===  BASE ============================ */
html {
	scroll-behavior: smooth;
}

body {
	font: 400 16px 'Open Sans', sans-serif;
	-webkit-font-smoothing: antialiased;
	background: var(--bg-color-primary);
}

#root {
	min-height: calc(100vh - 80px);
}

.mt-header {
	margin-top: 45px;
}

.divider {
	border: 1px solid rgba(0, 0, 0, 0.16);
}

.flex{
	display: flex;
}

.bt {
	padding: 8px 16px;
	font-size: 15px;
	font-weight: 600;
	text-align: center;
	color: var(--bg-color-primary) !important;
	/* background-color: var(--color-primary); */
	border-radius: 4px;
	box-shadow: 0 1px 0 var(--color-primary);
}

.bt:hover {
	opacity: 0.92;
}
.bt:active {
	position: relative;
	top: 2px;
	box-shadow: none;
}

.bt-primary{
	background-color: var(--color-primary);
}
.bt-green {
	background-color: var(--color-green);
}

.uppercase{
	text-transform: uppercase;
}



@media (min-width: 768px) {
	.mt-header {
		margin-top: 82px;
	}
}
`;

export default GlobalStyle;
