// Lookat 모듈 - Lookat.js
import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { easing } from 'maath'

import "../css/lookat.css"


function Model(props) {
  const mesh = useRef()
  // const { nodes } = useGLTF('./Model.glb')
  const [dummy] = useState(() => new THREE.Object3D())
  let texture = new THREE.TextureLoader().load('./images/SWAN-1.png')
  useFrame((state, dt) => {
    dummy.lookAt(state.pointer.x, state.pointer.y, 2)
    easing.dampQ(mesh.current.quaternion, dummy.quaternion, 0.15, dt)
  })

  return (
    <mesh ref={mesh} geometry={ new THREE.PlaneGeometry(1, 1, 1, 1)} {...props}>
      {/* <meshNormalMaterial /> */}
      <meshBasicMaterial map={texture}/>
    </mesh>
  )
}

export default function Lookat() {
  return (
    <Canvas className="cvs_look" camera={{ position: [0, 0.1, 2] }}>
      <ambientLight />
      <directionalLight position={[10, 10, 10]} />
      <Model />
    </Canvas>
  )
}
