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
      let container = document.getElementById('container')
      this.renderer = new Three.WebGLRenderer()
      this.renderer.setSize(window.innerWidth, window.innerHeight)
      container.appendChild(this.renderer.domElement)
      this.camera = new Three.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 1, 10000)
      this.camera.position.set(0, 0, 100)
      this.camera.lookAt(0, 0, 0)
      this.scene = new Three.Scene()
      this.scene.background = new Three.Color(0x0f0f0f)
      var material = new Three.LineBasicMaterial({color: 0xffffff})
      var geometry = new Three.Geometry();
      geometry.vertices.push(new Three.Vector3(-10, 0, 0))
      geometry.vertices.push(new Three.Vector3(0, 10, 0))
      geometry.vertices.push(new Three.Vector3(10, 0, 0))
      geometry.vertices.push(new Three.Vector3(20, 0, 0))
      geometry.vertices.push(new Three.Vector3(-20, 0, 0))
      var line = new Three.Line(geometry, material)
      this.scene.add(line)
      console.log('renderer', this.renderer)
      console.log('camera', this.camera)
      console.log('line', line)
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
