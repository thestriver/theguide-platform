import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Landing.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: Home
  },
  {
    path: '/career-hub',
    name: 'Career Hub',
    component: () => import(/* webpackChunkName: "about" */ '../views/CareerHub.vue')
  },
  {
    path: '/immigration-hub',
    name: 'Immigration Hub',
    component: () => import(/* webpackChunkName: "about" */ '../views/ImmiHub.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
