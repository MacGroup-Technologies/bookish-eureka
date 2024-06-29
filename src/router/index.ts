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
        },
        {
          path: 'about-us',
          name: 'AboutUsView',
          component: () => import('../views/AboutUsView.vue'),
        },
        {
          path: 'forms/',
          name: 'ApplicationForms',
          children: [
            {
              path: 'green-card-renewal',
              name: 'GreenCardRenewwal',
              component: () => import('../views/forms/GreenCardRenewalView.vue')
            },
          ]
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
  ]
})

export default router
