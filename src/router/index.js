import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/admin/Home.vue'
import { auth } from '../firebase'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Landing.vue')
  },
  {
    path: '/community',
    name: 'Community',
    component: () => import(/* webpackChunkName: "about" */ '../views/Comm.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: Home,
    meta: {
      requiresAuth: true
    },
    // children: [
    //   {
    //     path: "/admin/career-hub",
    //     name: 'Career Hub',
    //     component: () => import(/* webpackChunkName: "about" */ '@/views/admin/CareerHub.vue'),
    //     meta: {
    //       requiresAuth: true
    //     },
    //   },
    //   {
    //     path: "/admin/careerbot",
    //     name: 'Career Bot',
    //     component: () => import(/* webpackChunkName: "about" */ '@/components/Cards/CareerHub/CareerBot.vue'),
    //     meta: {
    //       requiresAuth: true
    //     } 
    //   },
    //   {
    //     path: "/admin/immigration-hub",
    //     name: 'Immigration Hub',
    //     component: () => import(/* webpackChunkName: "about" */ '@/views/admin/ImmiHub.vue'),
    //     meta: {
    //       requiresAuth: true
    //     },
    //   }
      
    // ]
  },
  {
    path: "/admin/career-hub",
    name: 'Career Hub',
    component: () => import(/* webpackChunkName: "about" */ '@/views/admin/CareerHub.vue'),
    meta: {
      requiresAuth: true
    },
  },
  {
    path: "/admin/careerbot",
    name: 'Career Bot',
    component: () => import(/* webpackChunkName: "about" */ '@/components/Cards/CareerHub/CareerBot.vue'),
    meta: {
      requiresAuth: true
    } 
  },
  {
    path: "/admin/immigration-hub",
    name: 'Immigration Hub',
    component: () => import(/* webpackChunkName: "about" */ '@/views/admin/ImmiHub.vue'),
    meta: {
      requiresAuth: true
    },
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/auth/Login.vue')
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import(/* webpackChunkName: "settings" */ '../views/Settings.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// navigation guard to check for logged in users
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)

  if (requiresAuth && !auth.currentUser) {
    next('/login')
    // next({
    //   path: '/login',
    //   query: { redirect: to.fullPath }
    // })
  } else {
    next()
  }
})

export default router
