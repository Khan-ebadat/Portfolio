"use client";

import * as THREE from 'three';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTheme } from 'next-themes';

export function Cube() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  // Colors based on theme
  const primaryColor = isDark ? new THREE.Color('#38bdf8') : new THREE.Color('#0ea5e9');
  const secondaryColor = isDark ? new THREE.Color('#2dd4bf') : new THREE.Color('#14b8a6');
  
  // Wireframe material
  const wireframeMaterial = new THREE.MeshBasicMaterial({
    color: primaryColor,
    wireframe: true,
    transparent: true,
    opacity: 0.3,
  });

  // Solid material with random color from palette
  const solidMaterial = new THREE.MeshStandardMaterial({
    color: secondaryColor,
    roughness: 0.3,
    metalness: 0.8,
    transparent: true,
    opacity: 0.7,
  });

  // Animation
  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Rotate the cube
    meshRef.current.rotation.x += 0.002;
    meshRef.current.rotation.y += 0.003;
    
    // Subtle scale animation based on time
    const scale = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
    meshRef.current.scale.set(scale, scale, scale);
  });

  return (
    <group>
      {/* Inner solid cube */}
      <mesh ref={meshRef} material={solidMaterial}>
        <boxGeometry args={[2, 2, 2]} />
      </mesh>
      
      {/* Outer wireframe cube */}
      <mesh scale={[1.1, 1.1, 1.1]}>
        <boxGeometry args={[2, 2, 2]} />
        <primitive object={wireframeMaterial} attach="material" />
      </mesh>
    </group>
  );
}