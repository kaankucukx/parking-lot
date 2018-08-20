<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
* {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: left;
	color: #2c3e50;
}
html {
	font-size: 14px;
}

h1 {
	color: #fff;
	font: normal 400 3rem/100% "Gotham-Black", sans-serif;
	letter-spacing: -0.4px;
}

h6 {
	font: normal 400 1rem/100% "Gotham-Black", sans-serif;
	letter-spacing: -0.4px;
	margin: 20px 0;
}

p {
	color: #9ba2aa;
	font: normal 400 1.5rem/100% "Gotham-Medium", sans-serif;
	letter-spacing: -0.4px;
	margin: 0;
}

ul {
	list-style-type: none;
	padding: 0;
}

li {
	display: inline-block;
	margin: 0 10px;
}

a {
	color: #88d1b0;
}
input {
	&:focus {
		outline: 0;
	}
}
</style>
