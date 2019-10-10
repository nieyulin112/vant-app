<template lang="html">
  <div class="footer">
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" replace to="/home">
        首页
      </van-tabbar-item>
      <van-tabbar-item icon="search" replace to="/shop">商城</van-tabbar-item>
      <van-tabbar-item icon="friends-o" replace to="/friends">朋友</van-tabbar-item>
      <van-tabbar-item icon="setting-o" replace to="/me">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'foot',
  props: {
    active: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="css">
.footer{
  height: 1rem;
}
</style>
