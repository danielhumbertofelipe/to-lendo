import { createRouter, createWebHistory } from 'vue-router'
import Home from "../components/Home.vue"
import Login from "../components/Login.vue"
import Details from "../components/DetailsBook.vue"
import Erro404 from "../components/Erro404.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/detailsBook/:id',
    name: 'detailsBook',
    component: Details
  },
  {
    path: '/404',
    name: 'Erro404',
    component: Erro404
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router