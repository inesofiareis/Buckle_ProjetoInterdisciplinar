<template>
  <div id="app">
    <Navbar />

    <router-view />
    
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
  mounted() {
    // window.addEventListener('load', () => {
    //   if (!localStorage.getItem("users")) {
    //     localStorage.setItem("users", JSON.stringify([
    //     ]))
    //   }
    // })
  },
};

</script>


<style>

  :root {
    --orange: #F17941;
    --black: #353535;
    --border: #ced4da;
    --blue: #5266B7;
  }
  
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  
  #nav {
    padding: 30px;
  }
  
  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }
  
  #nav a.router-link-exact-active {
    color: var(--orange);
  }
</style>
