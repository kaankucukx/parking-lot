<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style lang="scss">
* {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	line-height: 100%;
	letter-spacing: -2px;
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
</style>
