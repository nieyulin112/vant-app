import http from '../../utils/http'

function importApi () {
  let apis = {}
  const apiFiles = require.context('./src/', false, /\.js$/)

  apiFiles.keys().forEach(key => {
    let matches = /^\.\/([\w_-]+)\.js$/.exec(key)
    if (matches && matches[1]) {
      apis[matches[1]] = createApi(apiFiles(key).default)
    }
  })
  return apis
}

/**
 * 生成API调用方法
 * @param apiList
 */
function createApi (apiList) {
  let apis = {}

  for (let key of Object.keys(apiList)) {
    apis[key] = (params, config = {}) => {
      apiList[key].method = apiList[key].method || 'post'
      if (['PUT', 'POST', 'PATCH'].includes(apiList[key].method.toUpperCase())) {
        config.data = params
      } else {
        config.params = params
      }
      let conf = Object.assign(apiList[key], config)
      return http.ajax(conf)
    }
  }
  return apis
}

export default importApi()
