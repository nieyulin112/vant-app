<template lang="html">
  <div class="charts-ball">
    <div id="container">
    </div>
    <!--图形的处理-->
    <div class="skipIndex" @click="skipIndex">
      球星返回首页
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
  mounted() {
    this.init()
    this.animate()
  },
  methods: {
    init() {
      let container = document.getElementById('container');
      this.renderer = new Three.WebGLRenderer();
      this.camera = new Three.PerspectiveCamera(45, 0.75, 0.1, 10000)
      this.scene = new Three.Scene()
      this.scene.add(this.camera)
      this.camera.position.z = 600
      this.camera.position.x = 10
      this.camera.position.y = 10
      this.renderer.setSize(container.clientWidth, container.clientHeight)
      container.appendChild(this.renderer.domElement)
      // 设置球的基本属性
      let radius = 50, segemnt = 16, rings = 16
      let sphereMaterial = new Three.MeshLambertMaterial({ color: 0xCC0000 })
      this.mesh = new Three.Mesh(
        new Three.SphereGeometry(radius, segemnt, rings),
        sphereMaterial
      )
      this.mesh.geometry.verticesNeedUpdate = true
      this.mesh.geometry.normalsNeedUpdate = true
      this.scene.add(this.mesh)
      var pointLight = new Three.PointLight(0XFFFFFF)
      pointLight.position.x = 10
      pointLight.position.y = 50
      pointLight.position.z = 150
      this.scene.add(pointLight)
      this.renderer.render(this.scene, this.camera)
    },
    animate() {
      // 使用动画效果，浏览器全新的动画效果
      window.requestAnimationFrame(this.animate)
      // 设置网格旋转的位移
      this.mesh.rotation.x += 0.01
      this.mesh.rotation.y += 0.02
      this.mesh.rotation.z += 0.02
      // 将场景和图形动态的渲染到渲染器上去
      this.renderer.render(this.scene, this.camera)
    },
    skipIndex() {
      this.$router.push({
        name: 'charts'
      })
    }
  }
}
</script>

<style lang="less" scoped>
  #container {
    width: 100vw;
    height: 80vh;
  }
</style>
