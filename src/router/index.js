import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/AView.vue')
  },
  {
    path: '/BStore',
    component: () => import('../views/BView.vue')
  }
  // { //* 代表所有主頁面下的頁面，路由錯誤都會被導向
  //   path: '/:pathMatch(.*)*',
  //   redirect: '/'
  // },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (to.fullPath.match('/')) {
      return {
        top: 0 //* 切換頁面時會切換到最上面的位置
      }
    }
    return {}
  }
})

export default router
