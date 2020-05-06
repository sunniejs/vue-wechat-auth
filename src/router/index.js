import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export const router = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/home/index'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/home/about'),
    meta: {
      title: '关于我',
      keepAlive: false
    }
  },
  {
    path: '/404',
    name: 'error',
    component: () => import('@/views/home/error'),
    meta: {
      keepAlive: false
    }
  }
]

const createRouter = () =>
  new Router({
    // mode: 'history', // 如果你是 history模式 需要配置vue.config.js publicPath
    // base: '/app/',
    scrollBehavior: () => ({y: 0}),
    routes: router
  })

export default createRouter()
