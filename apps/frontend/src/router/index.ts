// Composables
import { createRouter, createWebHistory } from 'vue-router'

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
  },
  {
    path: '/eurojackpot',
    name: 'Eurojackpot',
    component: () => import(/* webpackChunkName: "eurojackpot" */ '@/views/Eurojackpot.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/default/Root.vue'),
      children: routes,
    },
  ],
})

export default router
