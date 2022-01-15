import Vue from 'vue'
import VueRouter from 'vue-router'
import paginaInicial from '../views/paginaInicial.vue'
import anuncios from '../views/Anuncios.vue'
import anuncioEspecifico from '../views/anuncioEspecifico.vue'
import login from '../views/login/login.vue'
import registo from '../views/registo/registo.vue'
import gestaoUtilizadores from '../views/adminUsers.vue'
import chat from '../views/chat.vue'
import store from '../store/index.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'PaginaInicial',
    component: paginaInicial,
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
    component: login,
    meta: {
      onlyWithoutAuth: true,
    }
  },
  {
    path: '/registo',
    name: 'Registo',
    component: registo,
    meta: {
      onlyWithoutAuth: true,
    }
  },
  {
    path: '/admin/users',
    name: 'Gestão de utilizadores',
    component: gestaoUtilizadores,
    meta: {
      requiresAuth: true,
      requiresAdmin: true
    },
  },
  {
    path: '/chat',
    name: 'chat',
    component: chat,
    meta: {
      requiresAuth: true,
    }
  }

]

const router = new VueRouter({
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})



router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.getters.getLoggedUser) {
    next({ name: "Login" });
  } 
  else if (to.meta.onlyWithoutAuth && store.getters.getLoggedUser) {
    next({ name: "PaginaInicial" });
  }
  else if (to.meta.requiresAuth && to.meta.requiresAdmin && store.getters.getLoggedUser) {
    if(store.getters.getLoggedUser.role == 'user') {
      next({name: 'PaginaInicial'})
    }
    else{
      next()
    }
  }
  else {
    next();
  }
});

export default router
