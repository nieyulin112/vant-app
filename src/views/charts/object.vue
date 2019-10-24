<template lang="html">
  <div class="charts-object" id="container">
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
      light: null,
      cube: null,
      width: null,
      height: null
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      let object = new Three.Object3D()
      let container = document.getElementById('container')
      this.renderer = new Three.WebGLRenderer()
      this.renderer.setSize(window.innerWidth, window.innerHeight)
      container.appendChild(this.renderer.domElement)
      this.camera = new Three.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 1, 10000)
      this.camera.position.set(0, 0, 100)
      this.camera.lookAt(0, 0, 0)
      this.scene = new Three.Scene()
      var object1 = new Three.Object3D()
      var object2 = new Three.Object3D()
      object1.add(object2)
      this.scene.add(object1)
      object.matrixAutoUpdate  = false
      object.updateMatrix()
      this.renderer.render(this.scene, this.camera)
    }
  }
}
</script>

<style lang="less" scoped>
#container {
  background: #eeeeee;
  width: 100vw;
  min-height: 100vh;
}
</style>
