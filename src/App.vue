<template>
  <div id="app">
    <keep-alive>
      <router-view class="main-container" v-if="$route.meta.keepAlive">
      </router-view>
    </keep-alive>
    <router-view class="main-container" v-if="!$route.meta.keepAlive">
    </router-view>
    <van-tabbar v-model="active" v-if="$route.meta.footer">
      <van-tabbar-item icon="home-o" replace to="/home">
        首页
      </van-tabbar-item>
      <van-tabbar-item icon="search" replace to="/shop">商城</van-tabbar-item>
      <van-tabbar-item icon="friends-o" replace to="/friends">朋友</van-tabbar-item>
      <van-tabbar-item icon="cluster-o" replace to="/charts">3D</van-tabbar-item>
      <van-tabbar-item icon="setting-o" replace to="/me">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>

export default {
  data() {
    return {
      active: 0
    }
  },
  mounted() {
  },
  // 处理全局的footer
  beforeUpdate() {
    if (this.$route.name === 'home') {
      this.active = 0
    } else if (this.$route.name === 'shop') {
      this.active = 1
    } else if (this.$route.name === 'friends') {
      this.active = 2
    } else if (this.$route.name === 'charts') {
      this.active = 3
    }else if (this.$route.name === 'me') {
      this.active = 4
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
