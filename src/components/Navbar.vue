<template>
  <div>
    <div id="nav">
      <nav class="container navbar navbar-expand-lg navbar-light bg-light">
        <router-link to="/" class="navbar-brand">Buckle</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div class="navbar-nav mr-auto">
            <router-link to="/Anuncios" class="nav-item nav-link">Anúncios</router-link>
            <router-link to="/Projetos" class="nav-link">Projetos</router-link>
            <router-link to="/Perfil" class="nav-link">Conta</router-link>
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

<style></style>
