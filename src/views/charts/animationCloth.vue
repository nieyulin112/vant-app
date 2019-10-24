<template lang="html">
  <div class="charts-line" id="container">
  </div>
</template>

<script>
import * as Three from 'three'
export default {
  data() {
    return {
      renderer: null,
      camera: null,
      scene: null,
      stats: null,
      model: null,
      skeleton: null,
      mixer: null,
      clock: null,
      crossFadeControls: [],
      idleAction: null,
      walkAction: null,
      runAction: null,
      idleWeight: null,
      walkWeight: null,
      runWeight: null,
      actions: null,
      settings: null,
      singleStepMode: false,
      sizeOfNextStep: 0
    }
  },
  mounted() {
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
#container {
  background-color: #cce0ff;
  color: #000;
  width: 100vw;
  min-height: 100vh;
}
</style>
