<template lang="html">
  <div class="charts-index">
    <van-cell-group title="全景超级3d效果">
      <van-cell title="球型动画" is-link to="ballIndex" />
      <van-cell title="正方体动画" is-link to="sequreIndex" />
      <van-cell title="圆锥体" is-link to="cylinder" />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  }
}
</script>

<style lang="less" scoped>
.charts-index {
  text-align: left;
}
</style>
