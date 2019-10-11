<template lang="html">
  <div class="me-index">
    <!-- <van-overlay :show="show" @click="show = false" z-index="1000"/>
    <van-button type="primary" text="显示遮罩层" @click="show = true" /> -->
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
.list-caontainer {
  margin-bottom: 1.2rem;
}
</style>
