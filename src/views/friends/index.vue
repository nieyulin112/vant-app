<template lang="html">
  <div class="friends-index">
    <van-index-bar>
      <van-index-anchor index="A" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-index-anchor index="B" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />
    </van-index-bar>
    <!--美丽的彩虹-->
    <div class="container">
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {},
  components: {}
}
</script>

<style lang="less" scoped>
.container {
  margin: 0 auto;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: prink;
  box-shadow:
  0 0 0 5px inset red,
  0 0 0 10px inset orange,
  0 0 0 15px inset yellow,
  0 0 0 20px inset lime,
  0 0 0 25px inset aqua,
  0 0 0 30px inset blue,
  0 0 0 35px inset magenta;
  clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
}
</style>
