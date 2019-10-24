<template lang="html">
  <div class="shop-index">
    <h4>商品列表</h4>
    <img v-for="(img, index) in imageList" v-lazy="img" :key="index">
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageList: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg'
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.shop-index {
  overflow-x: hidden;
  img {
    width: 100vw;
  }
}
</style>
