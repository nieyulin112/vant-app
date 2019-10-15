<template lang="html">
  <div class="charts-index">
    <div id="container">
    </div>
    <div @click="skipBall">
      圆球图形
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
      mesh: null
    }
  },
  methods: {
    // 初始化图形
    init() {
      let container = document.getElementById('container');
      this.camera = new Three.PerspectiveCamera(70, container.clientWidth/container.clientHeight, 0.01, 10)
      this.camera.position.z = 1
      this.camera.position.y = 0.01
      this.scene = new Three.Scene()
      let geometry = new Three.BoxGeometry(0.2, 0.2, 0.2)
      let material = new Three.MeshNormalMaterial()
      // 将图形和材质放入网格中，先放入图形，再放入网格
      this.mesh = new Three.Mesh(geometry, material)
      // 将网格放入场景中
      this.scene.add(this.mesh)
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
      // 设置网格的坐标
      this.mesh.rotation.x += 0.01
      this.mesh.rotation.y += 0.02
      // 将场景和图形动态的渲染到渲染器上去
      this.renderer.render(this.scene, this.camera)
    },
    skipBall() {
      this.$router.push({
        name: 'ballIndex'
      })
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
  height: 80vh;
}
</style>
