<template lang="html">
  <div class="home-index">
    <van-skeleton
      title
      avatar
      :row="20"
      :loading="loading">
      <van-grid>
        <van-grid-item icon="refund-o" text="转账"/>
        <van-grid-item icon="balance-o" text="商家服务"/>
        <van-grid-item icon="gem-o" text="城市服务"/>
        <van-grid-item icon="diamond-o" text="芝麻信用"/>
      </van-grid>
      <van-grid>
        <van-grid-item icon="refund-o" text="蚂蚁森林"/>
        <van-grid-item icon="balance-o" text="蚂蚁保险"/>
        <van-grid-item icon="gem-o" text="生活缴费"/>
        <van-grid-item icon="diamond-o" text="体育服务"/>
      </van-grid>
    </van-skeleton>
  </div>
</template>

<script>
export default {
  data () {
    return {
      count: 0,
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
