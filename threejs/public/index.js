'use strict'

/* webpack */
// import './index.css'
// import * as THREE from './build/three.js'

import 'https://unpkg.com/three@0.131.3/examples/js/controls/OrbitControls.js'

window.addEventListener('load', async () => hello())

const hello = () => {
  // サイズ
  const width = window.innerWidth
  const height = window.innerHeight

  // レンダラー
  const renderer = new THREE.WebGLRenderer()
  renderer.setSize(width, height)
  document.body.appendChild(renderer.domElement)

  // シーン
  const scene = new THREE.Scene()

  // カメラ
  const camera = new THREE.PerspectiveCamera(50, width / height)
  camera.position.set(0, 0, 1000)

  // カメラコントローラ
  const controls = new THREE.OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.dampingFactor = 0.2

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
    controls.update()
    renderer.render(scene, camera)
    requestAnimationFrame(loopAnimation)
  })()
}
