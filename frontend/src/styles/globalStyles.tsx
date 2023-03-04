import { createGlobalStyle } from 'styled-components';

<style>
	@import
	url('https://fonts.googleapis.com/css2?family=Coda+Caption:wght@800&family=Montserrat:wght@800&family=Open+Sans:wght@400;600;700;800&family=Roboto:wght@400;500;700&display=swap');
</style>;

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
		max-width: 1312px;
	}
}

/*==== VARIABLES ============================ */
:root {
	--bg-color-primary: #fbfcff;
	--color-primary: #7A43ED;
	--color-green: #4CAF50;
	--color-gray-light:#67808c;
	--color-gray: #B0BEC5;
	--color-gray-lighter: #B2BCC0;
	--text-color-black-gray: #37474F;
	--text-color-black-gray-light: #546E7A;
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
	border-top: 1px solid var(--color-gray-lighter);
}

.flex{
	display: flex;
}

.bt {
	height: fit-content;
	padding: 8px 16px;
	font-size: 15px;
	font-weight: 600;
	text-align: center;
	color: var(--bg-color-primary) !important;
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

.bt-primary-outlined{
	color: var(--color-primary)!important;
	border: 1px solid var(--color-primary);
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
