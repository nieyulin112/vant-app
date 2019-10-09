import Vue from 'vue'
import Router from 'vue-router'
import homeRouter from './home.router.js'
import shopRouter from './shop.router.js'
import friendsRouter from './friends.router.js'
import meRouter from './me.router.js'
Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      component: () => import('../views/login/index'),
      meta: {
        keepAlive: false,
        title: '登录',
        footer: false
      }
    },
    ...homeRouter,
    ...shopRouter,
    ...friendsRouter,
    ...meRouter
  ]
})
export default router
