<template lang="html">
  <div class="charts-cylinder">
    <div id="container">
    </div>
  </div>
</template>

<script>
import * as Three from 'three'
export default {
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      mesh: null,
      cylinder: null,
      angularSpeed: 0.2,
      lastTime: 0
    }
  },
  methods: {
    // 初始化图形
    init() {
      let container = document.getElementById('container');
      this.camera = new Three.PerspectiveCamera(45, container.clientWidth/container.clientHeight, 1, 1000)
      this.camera.position.z = 700
      this.scene = new Three.Scene()
      this.cylinder = new Three.Mesh(new Three.CylinderGeometry(0, 100, 400, 50, 50, false), new Three.MeshNormalMaterial())
      this.cylinder.overdraw = true
      this.scene.add(this.cylinder)
      // 创建web渲染器
      this.renderer = new Three.WebGLRenderer({antialias: true})
      // 设置渲染器的大小
      this.renderer.setSize(container.clientWidth, container.clientHeight)
      // 将渲染器的dom放入到dom的容器中
      container.appendChild(this.renderer.domElement)
    },
    animate() {
      // 使用动画效果，浏览器全新的动画效果
      window.requestAnimationFrame(this.animate)
      var time = (new Date()).getTime()
      var timeDiff = time - this.lastTime
      var angleChange = this.angularSpeed * timeDiff * 2 * Math.PI / 1000
      this.cylinder.rotation.x += angleChange
      this.lastTime = time
      // 将场景和图形动态的渲染到渲染器上去
      this.renderer.render(this.scene, this.camera)
    }
  },
  mounted() {
    console.log(Three)
    this.init()
    // 持续的动画
    this.animate()
  }
}
</script>

<style lang="less" scoped>
#container {
  width: 100vw;
  height: 100vh;
}
</style>
