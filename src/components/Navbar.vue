<template>
  <div>
    <div id="nav">
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
            <router-link :to="{ path: 'login' }" class="nav-item nav-link">Entrar</router-link>
          </div>
        </div>
      </nav>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style>
  .navbar-links {
    display: flex;
    justify-content: flex-end;
  }

  .nav-link {
    margin-left: 50px;
  }

  #nav {
    margin: 0;
    padding: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    position: absolute;
    z-index: 2;
  }

  .navbar-content {
    margin: 0;
    padding: 30;
    width: 100%;
    background: transparent;
  }

</style>
