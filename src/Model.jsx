// src/Model.js
import React from 'react';
import { useGLTF } from '@react-three/drei';

const Model = () => {
  const { scene } = useGLTF('./model.glb'); // Ensure this path is correct
  return <primitive object={scene} />;
};

export default Model;
