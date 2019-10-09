const shopIndex = resolve => {
  import(/* webpackChunkName: 'shopIndex' */'../views/shop/index').then(shopIndex => {
    resolve(shopIndex)
  })
}

export default [{
  path: '/shop',
  name: 'shop',
  component: shopIndex,
  meta: {
    title: '商城',
    requireAuth: false,
    keepAlive: false,
    footer: true
  }
}]
