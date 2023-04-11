import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '',
    component: () => import('layouts/MainLayout.vue'),
    redirect: '/product/list',
    children: [
      { path: 'product/list', component: () => import('pages/product/ProductList.vue') }
    ]
  },
  {
    path: '/product',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/product/create', component: () => import('components/product/listProduct/ProductCreate.vue') }
    ]
  },
  {
    path: '/login',
    component: () => import('layouts/EmptyLayout.vue'),
    children: [{ path: '', component: () => import('pages/LogIn.vue') }]
  },
  {
    path: '/orders/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/OrdersPage.vue') }]
  },
  {
    path: '/orders/edit',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/OrdersEditPage.vue') }]
  },
  {
    path: '/feedback',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/FeedbackPage.vue') }]
  },
  {
    path: '/users',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/UsersPage.vue') }]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
