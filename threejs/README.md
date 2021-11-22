## THREE.WebGLRenderer クラス

3D 空間のレンダリングを行うクラスです。

```
const renderer = new THREE.WebGLRenderer()
```

## THREE.Scene クラス

3D の空間を表すクラスです。<br>
3D のオブジェクトを add()メソッドを利用して追加できます。

```
const scene = new THREE.Scene()
scene.add(obj)
```

## THREE.PerspectiveCamera クラス

3D 空間を撮影するクラスです。<br>
どの視点で撮影するのかの情報が必要となります。

```
const scene = new THREE.PerspectiveCamera(視野角, アスペクト比)
```
