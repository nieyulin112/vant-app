<template lang="html">
  <div class="me-index">
    <!-- <van-overlay :show="show" @click="show = false" z-index="1000"/>
    <van-button type="primary" text="显示遮罩层" @click="show = true" /> -->
    <!-- <van-sticky :offset-top="0">
      <van-button type="info">吸顶距离</van-button>
    </van-sticky>
    <div class="list-caontainer">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad">
            <van-cell
              v-for="item in list"
              :key="item"
              :title="item">
            </van-cell>
        </van-list>
      </van-pull-refresh>
    </div> -->
    <div id="container">

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      list: [],
      loading: false,
      finished: false,
      isLoading: false
    }
  },
  mounted() {
    let marker = new window.AMap.Marker()
    let map = new window.AMap.Map('container', {
      resizeEnable: true
    })
    console.log('marker', marker)
    console.log('map', map)
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    },
    onLoad() {
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1)
        }
        // 加载状态结束
        this.loading = false
        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true
        }
      }, 500)
    }
  }
}
</script>

<style lang="less" scoped>
#container{
  width: 100%;
  z-index: 0;
  min-height: 100vh;
}
.list-caontainer {
  margin-bottom: 1.2rem;
}
</style>
