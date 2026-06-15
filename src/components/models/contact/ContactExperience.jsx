import { Suspense } from "react";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const ContactModel = () => {
  const { scene } = useGLTF("/models/computer-optimized-transformed.glb");
  const clonedScene = scene.clone();

  return (
    <primitive
      object={clonedScene}
      scale={2.05}
      position={[0, -1.05, 0]}
      rotation={[0, -0.35, 0]}
    />
  );
};

const ContactExperience = () => {
  return (
    <Canvas camera={{ position: [0, 0.8, 4.2], fov: 42 }} dpr={[1, 1.5]}>
      <ambientLight intensity={1.8} />
      <directionalLight position={[4, 5, 5]} intensity={2.5} />
      <Suspense fallback={null}>
        <ContactModel />
      </Suspense>
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
};

useGLTF.preload("/models/computer-optimized-transformed.glb");

export default ContactExperience;
