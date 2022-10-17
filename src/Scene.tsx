import React, {Suspense} from 'react'
import {Canvas} from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei'
import { Model } from './model'

const Scene = () => {
  return (
    <Canvas
      camera={{position: [0, 3, 9], fov: 14}}
      style={{
        backgroundColor: 'transparent',
        width: '100%',
        height: '460px',
      }}>
      <ambientLight intensity={1.25} />
      <ambientLight intensity={0.1} />
      <directionalLight intensity={0.4} />
      <Suspense fallback={null}>
        <Model position={[0, -0.5, 0]} />
      </Suspense>
      <OrbitControls />
    </Canvas>
  )
}

export default Scene