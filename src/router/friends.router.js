const friendsIndex = resolve => {
  import(/* webpackChunkName: 'friendsIndex' */'../views/friends/index').then(friendsIndex => {
    resolve(friendsIndex)
  })
}

export default [{
  path: '/friends',
  name: 'friends',
  component: friendsIndex,
  meta: {
    title: '朋友',
    requireAuth: true,
    keepAlive: false,
    footer: true
  }
}]
