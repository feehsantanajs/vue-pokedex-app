import {createRouter, createWebHashHistory } from 'vue-router'

import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/pokemon',
    name: 'Pokemon',
    component: () => import('../views/Pokemon.vue')
  } 
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

