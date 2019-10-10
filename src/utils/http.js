import axios from 'axios'
/**
 * config axios
 *
 */
(function () {
  /* api前缀 */
  axios.defaults.baseURL = process.env.VUE_APP_BASEURL
  /* 请求超时 */
  axios.defaults.timeout = 10 * 1000

  /* 请求头类型 */
  axios.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8'

  /* 请求拦截 */
  axios.interceptors.request.use(config => {
    if (config.loading === false) {
      console.log('console1')
    } else {
      config = Object.assign({
        loading: 'body'
      }, config)
      if (config.loading) {
        console.log('console')
      }
    }
    config.headers['access-token'] = window.localStorage.getItem('token') || ''
    config.withCredentials = true
    return config
  }, error => {
    return Promise.reject(error)
  })

  /* 响应拦截 */
  axios.interceptors.response.use(response => {
    return response.data
  }, error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          console.log('401')
          break
        case 500:
          console.log('500')
          break
        case 404:
          console.log('404')
          break
        case 504:
          console.log('504')
          break
      }
      return Promise.reject(error.response.data)
    } else {
      console.log(2222)
    }
  })
})()

/**
 * get封装
 * @param {String} url
 * @param {Object} params
 * @param {Object} config
 */
const get = (url, params, config = {}) => {
  let conf = Object.assign({
    url,
    method: 'get',
    params: params
  }, config)
  return axios(conf).then(respnose => {
    return none(respnose)
  })
}

/**
 * post封装
 * @param {String} url
 * @param {Object} data
 * @param {Object} config
 */
const post = (url, data, config) => {
  let conf = Object.assign({
    url,
    method: 'post',
    data: data
  }, config)
  return axios(conf).then(respnose => {
    return none(respnose)
  })
}

/**
 *
 * @param {Object} config
 */
const ajax = (config) => {
  return axios(config).then(respnose => {
    return none(respnose)
  })
}

/**
 * 错误code处理
 * @param {Object} respnose
 */
const none = (response) => {
  if (response) {
    return Promise.resolve(response)
    // if (response.success === 1) {
    //   if (response.errorCode) {
    //     return Promise.reject(response)
    //   }
    //   return Promise.resolve(response)
    // } else {
    //   return Promise.reject(response)
    // }
  }
}

export default {
  get,
  post,
  ajax
}
