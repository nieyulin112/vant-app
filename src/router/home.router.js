const homeIndex = resolve => {
  import(/* webpackChunkName: 'homeIndex' */'../views/home/index').then(homeIndex => {
    resolve(homeIndex)
  })
}

export default [{
  path: '/home',
  name: 'home',
  component: homeIndex,
  meta: {
    title: '主页',
    requireAuth: false,
    keepAlive: false
  }
}]
