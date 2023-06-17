// Lookat 모듈 - Lookat.js
import * as THREE from 'three'
import { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
// import { useLoader } from '@react-three/drei'
import { easing } from 'maath'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
// CSS
import "../css/lookat.css"
import useIsMobile from "./useIsMobile";


// 컴포넌트
function Model(props) {

  const mesh = useRef()
  const nodes = useLoader(GLTFLoader, 'Thonker.glb')
  const [dummy] = useState(() => new THREE.Object3D())

  useFrame((state, dt) => {
    dummy.lookAt(state.pointer.x, state.pointer.y, 2)
    easing.dampQ(mesh.current.quaternion, dummy.quaternion, 0.15, dt)
  })
  return (
    <mesh ref={mesh} {...props}>
      <primitive object={nodes.scene} rotation-y={0.8} />
      <meshNormalMaterial />
    </mesh>
  )
} /////////////// Model ////////////////


export default function Lookat() {


  // useIsMobile();
  // 호출하면 리턴값 isMobile이 찍힌다!

  // Hook으로 사용될 함수!
  const useImgSize = () => {

    // 새로고침시에만 먹는 이슈.. -> 실시간으로 변동시켜보자
    if (useIsMobile()) {
      console.log("true!!!");
      return 2
    }
    else {
      console.log("false!!!");
      return 1
    }

  } //////// SetImgSize 메서드 /////////
  
  
  return (
    <div className="cvswrap">
      <Canvas className="canvas_tit" camera={{ position: [1, 0.1, useImgSize()] }}>
        <ambientLight />
        {/* <directionalLight position={[10, 10, 10]} /> */}
        <Model />
        <axesHelper args={[5]} />
      </Canvas>
    </div>
  )
} /////////////// Lookat ////////////////
