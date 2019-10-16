# vue.js + three.js轻松构建3d场景的动画图形

## 3d场景实现

### 实现彩色正方体旋转

```
<template lang="html">
  <div class="charts-sequre">
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
      // 创建物体
      let geometry = new Three.BoxGeometry(0.2, 0.2, 0.2)
      // 创建材质
      let material = new Three.MeshNormalMaterial()
      // 创建光源
      let spotLight = new Three.SpotLight(0xff0000)
      spotLight.position.set(30, 25, -2)
      spotLight.castShadow = true
      // 将图形和材质放入网格中，先放入图形，再放入网格
      this.mesh = new Three.Mesh(geometry, material)
      // 将网格放入场景中
      this.scene.add(this.mesh)
      this.scene.add(spotLight)
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

```

### 实现旋转球型

```
<template lang="html">
  <div class="charts-ball">
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
    height: 100vh;
  }
</style>

```

### 实现圆锥旋转

```
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
      this.camera = new Three.PerspectiveCamera(90, container.clientWidth/container.clientHeight, 1, 1000)
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

```


### 实现足球运动场景
```
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
      camControl: null,
      green: require('../../assets/green.jpeg'),
      footer: require('../../assets/footer.jpg')
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
      spotLight.position.set(0, 10, 10)
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
      floorMater.map = Three.ImageUtils.loadTexture(this.green)
      //沿着(S)x,(T)y方向允许纹理重复自己
      floorMater.map.wrapS = floorMater.map.wrapT = Three.REpeatWrapping
      floorMater.map.repeat.set(10,10)
      var floor = new Three.Mesh(floorGeom,floorMater)
      floor.receiveShadow = true
      floor.rotation.x = - 0.5 * Math.PI
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
      sphere.position.set(7, 0.8, -1)
      sphere.castShadow = true
      var texture = new Three.ImageUtils.loadTexture(this.footer)
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

```


## 项目的地址
[vant-app](https://github.com/nieyulin112/vant-app)
