<template>
  <div id="app">
    <Navbar />
    <div></div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>


<style>

@font-face {
  font-family: 'Rubik Light';
  src: url('./assets/font/Rubik/static/Rubik-Light.ttf') format('truetype');
  font-weight: lighter;
}
@font-face {
  font-family: 'Rubik';
  src: url('./assets/font/Rubik/static/Rubik-Regular.ttf') format('truetype');
  font-weight: initial;
}
@font-face {
  font-family: 'Rubik Medium';
  src: url('./assets/font/Rubik/static/Rubik-Medium.ttf') format('truetype');
  font-weight: bold;
}
@font-face {
  font-family: 'Rubik Bold';
  src: url('./assets/font/Rubik/static/Rubik-Bold.ttf') format('truetype');
  font-weight: bolder;
}

:root {
  --cor0: #010402;
  --cor1: #1C2C54;
  --cor2: #FADA5E;
  --cor3: #4BC3B5;
  --cor4: #CDF0E5;
  --lightFont: 'Rubik Light';
  --regularFont: 'Rubik';
  --mediumFont: 'Rubik Medium';
  --boldFont: 'Rubik Bold';
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
