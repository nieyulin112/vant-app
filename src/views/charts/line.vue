<template lang="html">
  <div class="charts-line">
    <div id="container">

    </div>
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
    this.threeStart()
  },
  methods: {
    initThree() {
      this.width = document.getElementById('container').clientWidth
      this.height = document.getElementById('container').clientHeight
      this.renderer = new Three.WebGLRenderer({
        antialias: true
      })
      this.renderer.setSize(this.width, this.height)
      document.getElementById('container').appendChild(this.renderer.domElement)
      this.renderer.setClearColor(0xfffff, 1.0)
    },
    initCamera() {
      this.camera = new Three.PerspectiveCamera(45, this.width / this.height, 1, 10000)
      this.camera.position.x = 0
      this.camera.position.y = 1000
      this.camera.position.z = 0
      this.camera.up.x = 0
      this.camera.up.y = 0
      this.camera.up.z = 1
      this.camera.lookAt({
        x : 0,
        y : 0,
        z : 0
      })
    },
    initScene() {
      this.scene = new Three.Scene()
    },
    initLight() {
      this.light = new Three.DirectionalLight(0xFF0000, 1.0, 0)
      this.light.position.set(100, 100, 200)
      this.scene.add(this.light)
    },
    initObject() {
      var geometry = new Three.Geometry();
      geometry.vertices.push(new Three.Vector3(-500, 0, 0))
      geometry.vertices.push(new Three.Vector3(500, 0, 0))
      for ( var i = 0; i <= 20; i ++ ) {
        var line = new Three.Line( geometry, new Three.LineBasicMaterial({ color: 0x000000, opacity: 0.2 }))
        line.position.z = (i * 50) - 500
        this.scene.add(line)
        var ls = new Three.Line(geometry, new Three.LineBasicMaterial({ color: 0x000000, opacity: 0.2 }))
        line.position.x = ( i * 50 ) - 500
        line.rotation.y = 90 * Math.PI / 180
        this.scene.add(ls)
      }
    },
    threeStart() {
      this.initThree()
      this.initCamera()
      this.initScene()
      this.initLight()
      this.initObject()
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
