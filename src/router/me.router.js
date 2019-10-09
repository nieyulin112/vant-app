const meIndex = resolve => {
  import(/* webpackChunkName: 'meIndex' */'../views/me/index').then(meIndex => {
    resolve(meIndex)
  })
}

export default [{
  path: '/me',
  name: 'me',
  component: meIndex,
  meta: {
    title: '我的',
    requireAuth: true,
    keepAlive: false,
    footer: true
  }
}]
