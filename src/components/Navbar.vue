<template>
  <b-navbar toggleable="lg" id="nav" type="dark" variant="dark">
    <b-navbar-brand href="#"><router-link to="/" class="navbar-brand">Buckle</router-link></b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="mx-auto navbarContent">
        <b-nav-item><router-link to="/" class="nav-link" >Página inicial</router-link></b-nav-item>
        <b-nav-item><router-link to="/anuncios" class="nav-item nav-link">Anúncios</router-link></b-nav-item>
        <b-nav-item><router-link to="/projetos" class="nav-link">Projetos</router-link></b-nav-item>
        <b-nav-item><router-link to="/sobre" class="nav-link">Sobre</router-link></b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item v-if="loggedUser()">
          <b-nav-item-dropdown class="user-dropdown" >
            <template #button-content>{{loggedUser().first_name}}</template>
            <b-dropdown-item id="dropdown-perfil" href="#">Perfil</b-dropdown-item>
            <b-dropdown-item id="dropdown-anuncios" href="#">Anúncios</b-dropdown-item>
            <b-dropdown-item id="dropdown-projetos" href="#">Projetos</b-dropdown-item>
            <b-dropdown-divider v-if="this.$store.getters.getLoggedUser.role == 'admin'"></b-dropdown-divider>
            <b-dropdown-item id="dropdown-admin-users" @click="$router.push({name: 'Gestão de utilizadores'})" v-if="this.$store.getters.getLoggedUser.role == 'admin'" href="#">Gestão Utilizadores</b-dropdown-item>
            <b-dropdown-item id="dropdown-admin-anuncios" v-if="this.$store.getters.getLoggedUser.role == 'admin'" href="#">Gestão Anúncios</b-dropdown-item>
            <b-dropdown-item id="dropdown-admin-projetos" v-if="this.$store.getters.getLoggedUser.role == 'admin'" href="#">Gestão Projetos</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item id="dropdown-leave" href="#" @click="logOut()">Sair</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-nav-item>
        <b-nav-item v-else class="account-link">
          <router-link :to="{ path: 'login' }" class="nav-item nav-link login" v-if="CurrentPath() == '/login'">Login</router-link>
          <router-link :to="{ path: 'login' }" class="nav-item nav-link registo" v-else-if="CurrentPath() == '/registo'">Registo</router-link>
          <router-link :to="{ path: 'login' }" class="nav-item nav-link" v-else>Entrar</router-link>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";


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
  computed: {
    ...mapGetters(['getLoggedUser'])
  },
  methods: {
    ...mapMutations(['SIGNOUT_USER']),

    CurrentPath() {
      return this.$route.path
    },
    loggedUser () {
      return this.getLoggedUser
    },
    logOut() {
      Swal.fire({
      title: 'Atenção!',
      text: "Tens a certeza que queres sair da tua conta ?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não'
      }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Adeus!',
          'Foste deslogado com sucesso.',
          'Ok'
        ).then(() => {
          this.$router.push({ name: "PaginaInicial"})
        })
        this.SIGNOUT_USER()
      }
      })
    }
  }
  
};
</script>

<style>

  #nav {
    padding: 20px 100px !important;
  }

  #nav a a {
    color: rgb(235, 235, 235);
  }

  #nav a a:hover {
    color: var(--orange);
  }

  .navbar-brand {
    font-size: 30px !important;
    font-weight: bold !important;
    color: white !important;
  }

  .navbarContent > .nav-item {
    margin: 0 25px;
  }

  .account-link > a > .login {
    color: var(--orange) !important;
  }

  .account-link > a > .registo {
    color: var(--blue) !important;
  }

  .user-dropdown > ul {
    background-color: #f8f8f8;
    border-radius: 10px;
    right: -65px;
  }

  .user-dropdown > button {
    background-color: var(--orange) !important;
    border: none;
    font-weight: bold;
  }

  #dropdown-perfil, #dropdown-anuncios, #dropdown-projetos, #dropdown-leave {
    color: var(--black) !important;
  }

  #dropdown-perfil:hover, #dropdown-anuncios:hover, #dropdown-projetos:hover, #dropdown-leave:hover {
    background-color: var(--orange);
    color: white !important;
    transition: 0.5s ease;
  }

  #dropdown-admin-users, #dropdown-admin-anuncios, #dropdown-admin-projetos {
    color: rgb(220, 20, 20) !important;
  }

  #dropdown-admin-users:hover, #dropdown-admin-anuncios:hover, #dropdown-admin-projetos:hover {
    color: white !important;
    background-color: rgb(220, 20, 20) !important;
    transition: 0.5s ease;
  }

  #dropdown-leave {
    color: var(--orange) !important;
  }

  #dropdown-leave:hover {
    color: white !important;
  }


</style>
