import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import defaultLayout from '@/layouts/default.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'defaultLayout',
      component: defaultLayout,
      children: [
        {
          path: '',
          name: 'HomeView',
          component: HomeView
        }
      ]
    },
    {
      path: '/auth/',
      name: 'AuthLayout',
      component: () => import('../layouts/AuthLayout.vue'),
      children: [
        {
          path: '',
          name: 'AuthMain',
          redirect: { name: 'LoginView' }
        },
        {
          path: 'login',
          name: 'LoginView',
          component: () => import('../views/auth/LoginView.vue')
        },
        {
          path: 'signup',
          name: 'SignUpView',
          component: () => import('../views/auth/SignUpView.vue')
        }
      ]
    },
    // {
    //   path: '/uscis-forms',
    //   name: '',
    //   component: import()
    // },
    // {
    //   path: '/green-card-renewal',
    //   name: '',
    //   component: import()
    // },
    // {
    //   path: '/immigration-form-packages-and-services',
    //   name: '',
    //   component: import()
    // },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
