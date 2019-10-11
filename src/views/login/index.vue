<template lang="html">
  <div class="login-index">
    <van-field
      v-model="username"
      required
      clearable
      label="用户名"
      right-icon="question-o"
      placeholder="请输入用户名"
      @click-right-icon="$toast('question')"
    />
    <van-button @click="login" class="f-w" type="primary">登录</van-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: null
    }
  },
  created() {
    if(window.localStorage.getItem('token')) {
      this.$router.push({
        name: 'home'
      })
    }
  },
  methods: {
    login() {
      window.localStorage.setItem('token', this.username)
      if (this.$route.query.redirect) {
        this.$router.push({
          name: this.$route.query.redirect
        })
      } else {
        this.$router.push({
          name: 'home'
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
.f-w {
  width: 100%;
}
</style>
