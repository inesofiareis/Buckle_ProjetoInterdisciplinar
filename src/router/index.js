import Vue from 'vue'
import VueRouter from 'vue-router'
import paginaInicial from '../views/paginaInicial.vue'
import anuncios from '../views/Anuncios.vue'
import anuncioEspecifico from '../views/anuncioEspecifico.vue'
import login from '../views/login/login.vue'
import registo from '../views/registo/registo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Pagina Inicial',
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
  }

]

const router = new VueRouter({
  routes
})

export default router
