import { Suspense } from "react";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const HeroModel = () => {
  const { scene } = useGLTF("/models/optimized-room.glb");
  const clonedScene = scene.clone();

  return (
    <primitive
      object={clonedScene}
      scale={0.9}
      position={[0, -1.5, 0]}
      rotation={[0, -0.35, 0]}
    />
  );
};

const HeroExperience = () => {
  return (
    <Canvas camera={{ position: [0, 1.5, 6], fov: 45 }} dpr={[1, 1.5]}>
      <ambientLight intensity={1.2} />
      <directionalLight position={[5, 5, 5]} intensity={2} />
      <Suspense fallback={null}>
        <HeroModel />
      </Suspense>
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
};

useGLTF.preload("/models/optimized-room.glb");

export default HeroExperience;
