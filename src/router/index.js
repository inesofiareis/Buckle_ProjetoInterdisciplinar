import Vue from 'vue'
import VueRouter from 'vue-router'
import paginaInicial from '../views/paginaInicial.vue'
import anuncios from '../views/Anuncios.vue'
import anuncioEspecifico from '../views/anuncioEspecifico.vue'
import login from '../views/login.vue'
import registo from '../views/registo.vue'
import gestaoUtilizadores from '../views/adminUsers.vue'
import store from '../store/index.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'PaginaInicial',
    component: paginaInicial
  },
  {
    path: '/anuncios',
    name: 'Anúncios',
    component: anuncios
  },
  {
    path: '/anuncios/:anunciosID',
    name: 'Detalhe dos anúncios',
    component: anuncioEspecifico
  },
  {
    path: '/login',
    name: 'Login',
    component: login
  },
  {
    path: '/registo',
    name: 'Registo',
    component: registo
  },
  {
    path: '/admin/users',
    name: 'Gestão de utilizadores',
    component: gestaoUtilizadores,
    meta: {
      requiresAuth: true,
    },
  }

]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.getters.getLoggedUser) {
    next({ name: "Login" });
  } else {
    next();
  }
});

export default router
