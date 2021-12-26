import Vue from 'vue'
import VueRouter from 'vue-router'
import paginaInicial from '../views/Main.vue'
import anuncios from '../views/anuncios/Anuncios.vue'
import anuncioEspecifico from '../views/anuncios/anuncioEspecifico.vue'

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
  }

]

const router = new VueRouter({
  routes
})

export default router
