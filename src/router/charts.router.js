const chartsIndex = resolve => {
  import(/* webpackChunkName: 'chartsIndex' */'../views/charts/index').then(chartsIndex => {
    resolve(chartsIndex)
  })
}
const ballIndex = resolve => {
  import(/* webpackChunkName: 'ballIndex' */'../views/charts/ball').then(ballIndex => {
    resolve(ballIndex)
  })
}
const sequreIndex = resolve => {
  import(/* webpackChunkName: 'sequreIndex' */'../views/charts/sequre').then(sequreIndex => {
    resolve(sequreIndex)
  })
}
const cylinder = resolve => {
  import(/* webpackChunkName: 'cylinder' */'../views/charts/cylinder').then(cylinder => {
    resolve(cylinder)
  })
}
export default [{
  path: '/charts',
  name: 'charts',
  component: chartsIndex,
  meta: {
    title: '3d列表',
    requireAuth: true,
    keepAlive: false,
    footer: true
  }
}, {
  path: '/ballIndex',
  name: 'ballIndex',
  component: ballIndex,
  meta: {
    title: '球型酷炫效果',
    requireAuth: true,
    keepAlive: false,
    footer: false
  }
}, {
  path: '/sequreIndex',
  name: 'sequreIndex',
  component: sequreIndex,
  meta: {
    title: '正方体酷炫效果',
    requireAuth: true,
    keepAlive: false,
    footer: false
  }
}, {
  path: '/cylinder',
  name: 'cylinder',
  component: cylinder,
  meta: {
    title: '圆锥体酷炫效果',
    requireAuth: true,
    keepAlive: false,
    footer: false
  }
}]
