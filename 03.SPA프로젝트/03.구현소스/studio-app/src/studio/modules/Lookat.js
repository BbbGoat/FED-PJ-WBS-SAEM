// Lookat 모듈 - Lookat.js
import * as THREE from 'three'
import { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { easing } from 'maath'
// CSS
import "../css/lookat.css"
import useIsMobile from "./useIsMobile";


// 컴포넌트
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
    <mesh ref={mesh} geometry={ new THREE.PlaneGeometry(1.5, 1, 1, 1)} {...props}>
      {/* <meshNormalMaterial /> */}
      <meshBasicMaterial map={texture}/>
    </mesh>
  )
} /////////////// Model ////////////////


export default function Lookat() {


  useIsMobile();
  console.log("호출중?",useIsMobile());

  // 판별함수
  const SetImgSize = () => {

    // 새로고침시에만 먹는 이슈.. -> 실시간으로 변동시켜보자
    if (useIsMobile()) {
      console.log("true!!!")
      return 2
    }
    else {
      return 1
    }

  } //////// SetImgSize 메서드 /////////
  
  
  return (
    <Canvas className="cvs_look" camera={{ position: [0, 0.1, SetImgSize()] }}>
      <ambientLight />
      <directionalLight position={[10, 10, 10]} />
      <Model />
    </Canvas>
  )
} /////////////// Lookat ////////////////
