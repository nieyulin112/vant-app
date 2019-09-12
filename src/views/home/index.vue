<template lang="html">
  <div class="home-index">
    <van-skeleton
      title
      avatar
      :row="20"
      :loading="loading">
      <div>
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
          <p>刷新次数: {{ count }}</p>
        </van-pull-refresh>
        <div>
          <van-collapse v-model="activeNames">
            <van-collapse-item title="标题1" value="右侧" name="1">内容</van-collapse-item>
            <van-collapse-item title="标题2" value="右侧" name="2">内容</van-collapse-item>
          </van-collapse>
        </div>
      </div>
    </van-skeleton>
  </div>
</template>

<script>
export default {
  data () {
    return {
      count: 0,
      isLoading: false,
      activeNames: ['1'],
      show: true,
      images: [
        'https://img.yzcdn.cn/1.jpg',
        'https://img.yzcdn.cn/2.jpg'
      ],
      imageList: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg'
      ],
      loading: true
    }
  },
  created() {
  },
  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 3000)
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false
        this.count++
      }, 500)
    }
  }
}
</script>

<style lang="css">
</style>
