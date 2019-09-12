import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false
import 'amfe-flexible';
import {
  Button,
  Uploader,
  PullRefresh,
  Collapse,
  CollapseItem,
  ImagePreview,
  Skeleton
} from 'vant';
let comps = [
  Button,
  Uploader,
  PullRefresh,
  Collapse,
  CollapseItem,
  ImagePreview,
  Skeleton
]
for (let comp of comps) {
  Vue.use(comp)
}
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  if (to.matched.some(record => record.meta.requireAuth)) {
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
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
