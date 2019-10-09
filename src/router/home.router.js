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
    title: '首页',
    requireAuth: true,
    keepAlive: false,
    footer: true
  }
}]
