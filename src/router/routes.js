import auth from './AuthMiddleware'
import authenticated from './AuthenticatedMiddleware'
const routes = [
  {
    path: '/auth',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      { path: 'login', component: () => import('pages/auth/Login.vue'), meta: {middlewares: [authenticated]}},
      { path: 'logout', component: () => import('pages/auth/Logout.vue'), meta: {middlewares: [auth]}},
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    meta: { middlewares: [auth] },
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/schedules', component: () => import('pages/schedule/Index.vue')},
      { path: '/shifts', component: () => import('pages/shift/Index.vue')},
      { path: '/projects', component: () => import('pages/project/Index.vue')},
      { path: '/attendances', component: () => import('pages/attendance/Index.vue')}
    ]
  },
  
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
