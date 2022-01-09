<template>
  <div>
    <div id="nav" :style="[this.$route.path != '/admin/users' ? {'position': 'absolute'} : {}]" >
      <nav class="container navbar navbar-content navbar-expand-lg">
        <router-link to="/" class="navbar-brand">Buckle</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse navbar-links" id="navbarSupportedContent">
          <div class="navbar-nav mr-auto">
            <router-link to="/Anuncios" class="nav-item nav-link">Anúncios</router-link>
            <router-link to="/Projetos" class="nav-link">Projetos</router-link>
            <router-link to="/Perfil" class="nav-link">Conta</router-link>
          </div>
          <div class="login-link">
            <router-link :to="{ path: 'login' }" class="nav-item nav-link login" v-if="CurrentPath() == '/login'">Login</router-link>
            <router-link :to="{ path: 'login' }" class="nav-item nav-link registo" v-else-if="CurrentPath() == '/registo'">Registo</router-link>
            <router-link :to="{ path: 'login' }" class="nav-item nav-link" v-else>Entrar</router-link>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      colors: [
        { white: '#fff' },
        { dark: '#353535' },
        { blue: '#5266B7' },
        { orange: '#F17941' },
      ],
    }
  },
  methods: {
    CurrentPath() {
      return this.$route.path
    }
  }
  
};
</script>

<style>

  :root {
    --orange: #F17941;
    --black: #353535;
    --border: #ced4da;
    --blue: #5266B7;
  }

  .navbar-links {
    display: flex;
    justify-content: flex-end;
  }

  .nav-link {
    margin-left: 65px;
  }

  #nav {
    margin: 0;
    padding: 20px 5px 0px 5px !important;
    width: 100%;
    display: flex;
    justify-content: center;
    z-index: 2;
  }

  .navbar-content {
    margin: 0;
    padding: 30;
    width: 100%;
    background: transparent;
    border-bottom: 1px solid #35353538;
  }

  .navbar-brand {
    font-size: 30px !important;
    font-weight: bold !important;
    color: white !important;
  }

  .login-link > a {
    margin-left: 200px !important;
  }

  .login-link > .login {
    color: var(--orange) !important;
  }

  .login-link > .registo {
    color: var(--blue) !important;
  }

</style>
