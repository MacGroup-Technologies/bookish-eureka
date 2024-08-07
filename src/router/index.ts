import { createRouter, createWebHistory, type RouteLocationNormalized, type NavigationGuardNext } from 'vue-router'
import { useUserStore } from '@/stores/userStore';
import { isEmpty } from 'lodash';

import HomeView from '@/views/HomeView.vue'
import defaultLayout from '@/layouts/defaultLayout.vue'

const authGuard = function (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) {
  const { user } = useUserStore()

  if (isEmpty(user.email)) {
    return next('/auth/login')
  }
  return next()
}

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
            {
              path: ':pathMatch(.*)*',
              redirect: to => ({
                name: 'ApplicationsView',
                query: { form: to.params.pathMatch[0] } // Redirect to the matched path as query params
              })
            }
          ]
        },
        {
          path: 'applications',
          name: 'ApplicationsView',
          component: () => import('../views/ApplicationsView.vue'),
          beforeEnter: authGuard
        },
        {
          path: 'application',
          redirect: { name: 'ApplicationsView' }
        },
        {
          path:"immigration-questions",
          name:"immigrationQuestion",
          component: () => import('../views/immigrationQuestions.vue'),
        },
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
    {
      path: '/:pathMatch(.*)*',
      name: 'ErrorView',
      component: () => import('../views/ApplicationsView.vue'),
    },
  ]
})

export default router
