<template lang="html">
  <div class="charts-footer-ball">
    <div id="container">
    </div>
  </div>
</template>

<script>
import * as Three from 'three'
let step = 0
export default {
  data() {
    return {
      renderer: null,
      scene: null,
      camera: null,
      control: null,
      camControl: null
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      let container = document.getElementById('container');
      this.scene = new Three.Scene()
      this.camera = new Three.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 1000)
      this.camera.position.x = 15
      this.camera.position.y = 6
      this.camera.position.z = 15
      this.camera.lookAt(this.scene.position)
      this.renderer = new Three.WebGLRenderer()
      this.renderer.setClearColor(0x000000, 1.0)
      this.renderer.setSize(window.innerWidth, window.innerHeight)
      this.renderer.shadowMapEnabled = true
      var spotLight = new Three.SpotLight()
      spotLight.position.set(0, 80, 30)
      spotLight.castShadow = true
      this.scene.add(spotLight)
      container.appendChild(this.renderer.domElement)
      this.addFloor()
      this.addRail()
      this.addSphere()
      this.render()
    },
    addFloor() {
      var floorGeom = new Three.PlaneGeometry(100,100,20,20)
      var floorMater = new Three.MeshPhongMaterial()
      floorMater.map = Three.ImageUtils.loadTexture('http://10.1.26.29:84/assets/textures/06_DIFFUSE.jpg')
      //沿着(S)x,(T)y方向允许纹理重复自己
      floorMater.map.wrapS = floorMater.map.wrapT = Three.REpeatWrapping
      floorMater.map.repeat.set(10,10)
      var floor = new Three.Mesh(floorGeom,floorMater)
      floor.receiveShadow = true
      floor.rotation.x = -0.5 * Math.PI
      this.scene.add(floor)
    },
    addRail() {
      var cylinderGeometry = new Three.CylinderGeometry(0.1, 0.1,15,50,50)
      var cylinderMaterial = new Three.MeshPhongMaterial({color: 0xeeeeee})
      var cylinder = new Three.Mesh(cylinderGeometry, cylinderMaterial)
      cylinder.position.set(1,5,1)
      cylinder.rotation.x = '15'
      cylinder.rotation.y = '-57.8'
      cylinder.rotation.z = '-14.85'
      cylinder.name = 'cylinder'
      this.scene.add(cylinder)
    },
    addSphere() {
      var sphereGeometry = new Three.SphereGeometry(0.8, 25, 25)
      var sphereMaterial = new Three.MeshBasicMaterial({specular: '#a9fcff',emissive: '#006063',shininess: 10})
      var sphere = new Three.Mesh(sphereGeometry, sphereMaterial)
      sphere.position.set(7,0.8,-1)
      sphere.castShadow = true
      var texture = new Three.ImageUtils.loadTexture("http://10.1.26.29:84/assets/football.jpg")
      sphereMaterial.map = texture
      sphere.name = 'sphere'
      this.scene.add(sphere)
    },
    render() {
      var sphere = this.scene.getObjectByName('sphere')
      this.renderer.render(this.scene, this.camera)
      this.camera.lookAt(sphere.position)
      step += 0.02
      sphere.position.x = 0 + ( 10 * (Math.cos(step)))
      sphere.position.y = 0.75 * Math.PI / 2 + ( 6.5 * Math.abs(Math.sin(step)))
      sphere.rotation.z += 0.03
      var x = this.camera.position.x
      var z = this.camera.position.z
      this.camera.position.x = x * Math.cos(0.015) + z * Math.sin(0.015)
      this.camera.position.z = z * Math.cos(0.015) - x * Math.sin(0.015)
      window.requestAnimationFrame(this.render)
    },
    onResize() {
      this.camera.aspect = window.innerWidth / window.innerHeight
      this.camera.updateProjectionMatrix()
      this.renderer.setSize(window.innerWidth, window.innerHeight)
    }
  }
}
</script>

<style lang="less" scoped>
#container {
  width: 100vw;
  height: 100vh;
}
</style>
