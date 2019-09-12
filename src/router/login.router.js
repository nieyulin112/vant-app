const loginIndex = resolve => {
  import(/* webpackChunkName: 'loginIndex' */'../views/login/index').then(loginIndex => {
    resolve(loginIndex)
  })
}

export default [{
  path: '/login',
  name: 'login',
  component: loginIndex,
  meta: {
    title: '登录',
    requireAuth: false,
    keepAlive: false
  }
}]
