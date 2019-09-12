import Vue from 'vue'
import Router from 'vue-router'
import homeRouter from './home.router.js'
Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes: [
    ...homeRouter
  ]
})
export default router
