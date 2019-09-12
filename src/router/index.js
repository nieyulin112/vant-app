import Vue from 'vue'
import Router from 'vue-router'
import homeRouter from './home.router.js'
Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      component: () => import('../views/login/index'),
      meta: {
        keepAlive: false,
        title: '登录'
      }
    },
    ...homeRouter
  ]
})
export default router
