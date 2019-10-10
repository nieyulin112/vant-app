import Vue from 'vue'
import App from './App.vue'
import router from './router'
import http from './utils/http'
import libs from './libs'
Vue.config.productionTip = false
Vue.prototype.$http = http
Vue.use(libs)
console.log('http', http)
import 'amfe-flexible';
import {
  Button,
  Uploader,
  PullRefresh,
  Collapse,
  CollapseItem,
  ImagePreview,
  Skeleton,
  Tabbar,
  TabbarItem,
  Field,
  Grid,
  GridItem,
  Lazyload,
  swipe,
  swipeItem
} from 'vant';
let comps = [
  Button,
  Uploader,
  PullRefresh,
  Collapse,
  CollapseItem,
  ImagePreview,
  Skeleton,
  Tabbar,
  TabbarItem,
  Field,
  Grid,
  GridItem,
  Lazyload,
  swipe,
  swipeItem
]
for (let comp of comps) {
  Vue.use(comp)
}
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  if (to.matched.some(record => record.meta.requireAuth)) {
    if (!window.localStorage.getItem('token')) {
      next({
        path: '/login',
        query: {
          redirect: to.name,
          ...to.query
        }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
