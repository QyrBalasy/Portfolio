import React, {Suspense} from 'react'
import {Canvas} from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei'
import { Model } from './model'

const Scene = () => {
  return (
    <Canvas
      camera={{position: [2, 0, 12.25], fov: 10}}
      style={{
        backgroundColor: 'transparent',
        width: '100%',
        height: '460px',
      }}>
      <ambientLight intensity={1.25} />
      <ambientLight intensity={0.1} />
      <directionalLight intensity={0.4} />
      <Suspense fallback={null}>
        {/* <Model position={[0.025, -0.9, 0]} /> */}
        <Model position={[0.025, -0.9, 0]} />
      </Suspense>
      <OrbitControls />
    </Canvas>
  )
}

export default Scene