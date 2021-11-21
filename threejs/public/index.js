'use strict'

/* webpack */
// import './index.css'
// import * as THREE from './build/three.js'

window.addEventListener('load', () => hello())

const hello = () => {
  // サイズ
  const width = 1000
  const height = 600

  // レンダラー
  const renderer = new THREE.WebGLRenderer()
  renderer.setSize(width, height)
  document.body.appendChild(renderer.domElement)

  // シーン
  const scene = new THREE.Scene()

  // カメラ
  const camera = new THREE.PerspectiveCamera(45, width / height)
  camera.position.set(0, 0, +1000)

  /* 地球Map */
  const geometry = new THREE.SphereGeometry(300, 30, 30)
  const loader = new THREE.TextureLoader()
  const texture = loader.load('img/earthmap.jpg')
  const material = new THREE.MeshStandardMaterial({
    map: texture
  })
  const mesh = new THREE.Mesh(geometry, material)
  scene.add(mesh)

  // 平行光源
  const directionalLight = new THREE.DirectionalLight(0xffffff)
  directionalLight.position.set(1, 1, 1)
  scene.add(directionalLight)

  // ループアニメーション
  ;(function loopAnimation() {
    mesh.rotation.y += 0.01
    renderer.render(scene, camera)
    requestAnimationFrame(loopAnimation)
  })()
}

// const scene = new THREE.Scene()
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

// const renderer = new THREE.WebGLRenderer()
// renderer.setSize(window.innerWidth, window.innerHeight)
// document.body.appendChild(renderer.domElement)

// const geometry = new THREE.BoxGeometry()
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
// const cube = new THREE.Mesh(geometry, material)
// scene.add(cube)

// camera.position.z = 5

// const animate = function () {
//   requestAnimationFrame(animate)

//   cube.rotation.x += 0.01
//   cube.rotation.y += 0.01

//   renderer.render(scene, camera)
// }

// animate()
