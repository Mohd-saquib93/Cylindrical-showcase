import React from 'react'
import { Canvas } from '@react-three/fiber';
import "./App.css"
import { OrbitControls, useTexture } from '@react-three/drei';
import Cyl from './Cyl';
import { Bloom, EffectComposer, ToneMapping } from '@react-three/postprocessing';

function App() {
  return (
    <>
  <Canvas camera={{fov:22}}>
    <ambientLight />
    <Cyl />
    <EffectComposer>
    <Bloom
    mipmapBlur
    intensity={1.0} // The bloom intensity.
    luminanceThreshold={0} // luminance threshold. Raise this value to mask out darker elements in the scene.
    luminanceSmoothing={0} // smoothness of the luminance threshold. Range is [0, 1]
  />

    </EffectComposer>
 
  </Canvas>

  
  </>
  
  )
}

export default App