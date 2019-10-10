const chartsIndex = resolve => {
  import(/* webpackChunkName: 'chartsIndex' */'../views/charts/index').then(chartsIndex => {
    resolve(chartsIndex)
  })
}

export default [{
  path: '/charts',
  name: 'charts',
  component: chartsIndex,
  meta: {
    title: '3d酷炫效果',
    requireAuth: true,
    keepAlive: false,
    footer: true
  }
}]
