
import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Sphere component with distortion
const AnimatedSphere = ({ position, color, speed, distort, size }) => {
  const mesh = useRef(null);
  
  useFrame(({ clock }) => {
    if (mesh.current) {
      mesh.current.rotation.x = Math.sin(clock.getElapsedTime() * speed * 0.3) * 0.2;
      mesh.current.rotation.y = Math.cos(clock.getElapsedTime() * speed * 0.2) * 0.2;
      mesh.current.position.y = Math.sin(clock.getElapsedTime() * speed) * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={mesh} position={position}>
        <sphereGeometry args={[size, 64, 64]} />
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={distort}
          speed={0.8}
          roughness={0.1}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
};

// Torus component
const AnimatedTorus = ({ position, color, speed, size }) => {
  const mesh = useRef(null);
  
  useFrame(({ clock }) => {
    if (mesh.current) {
      mesh.current.rotation.x = clock.getElapsedTime() * speed * 0.3;
      mesh.current.rotation.y = clock.getElapsedTime() * speed * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.4}>
      <mesh ref={mesh} position={position}>
        <torusGeometry args={[size, size / 3, 16, 100]} />
        <meshStandardMaterial
          color={color}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>
    </Float>
  );
};

// The main ThreeAnimation component
const ThreeAnimation = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#5f5cff" />
        
        <AnimatedSphere 
          position={[-2, 0, 0]} 
          color="#4f46e5" 
          speed={0.5} 
          distort={0.4} 
          size={0.8} 
        />
        <AnimatedSphere 
          position={[2, -0.5, -2]} 
          color="#8b5cf6" 
          speed={0.3} 
          distort={0.3} 
          size={0.6} 
        />
        <AnimatedTorus 
          position={[1.5, 0.5, -1]} 
          color="#6366f1" 
          speed={0.2} 
          size={0.7} 
        />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          enableRotate={false} 
          autoRotate={true}
          autoRotateSpeed={0.5}
        />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default ThreeAnimation;
