import api from './api'

const install = (Vue) => {
  Vue.prototype.$api = api
}

export default { install }
