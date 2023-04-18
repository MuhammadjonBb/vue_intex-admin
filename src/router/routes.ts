import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '',
    component: () => import('layouts/MainLayout.vue'),
    redirect: '/product/list',
    children: [
      { path: 'product/list', component: () => import('pages/product/list/ProductList.vue') },
      { path: 'product/create', component: () => import('pages/product/list/ProductCreate.vue') }
    ]
  },
  {
    path: '/product/attributes',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/product/attributes', component: () => import('pages/product/attributes/MainAttribute.vue') },
      { path: '/product/attributes-create', component: () => import('pages/product/attributes/CreateAtribute.vue') }
    ]
  },
  {
    path: '/product',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/product/categories', component: () => import('src/pages/product/categories/CategoriesPage.vue') },
      { path: '/product/categories/add', component: () => import('src/pages/product/categories/CategoriesAddPage.vue') },
    ]
  },
  {
    path: '/login',
    component: () => import('layouts/EmptyLayout.vue'),
    children: [{ path: '', component: () => import('src/pages/login/LogIn.vue') }]
  },
  {
    path: '/orders/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/orders/OrdersPage.vue') },
      { path: '/orders/edit', component: () => import('src/pages/orders/OrdersFormPage.vue') },
      { path: '/orders/create', component: () => import('src/pages/orders/OrdersFormPage.vue') }

    ]
  },
  {
    path: '/feedback',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('src/pages/feedback/FeedbackPage.vue') }]
  },
  {
    path: '/settings',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('src/pages/settings/SettingsPage.vue') }]
  },
  {
    path: '/users/about',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('src/pages/users/AboutUserPage.vue') }]
  },
  {
    path: '/users',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('src/pages/users/UsersPage.vue') }]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
