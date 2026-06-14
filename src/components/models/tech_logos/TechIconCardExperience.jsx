import { Suspense } from "react";
import { Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const TechModel = ({ model }) => {
  const { scene } = useGLTF(model.modelPath);
  const clonedScene = scene.clone();

  return (
    <Float speed={3} rotationIntensity={0.35} floatIntensity={0.65}>
      <primitive
        object={clonedScene}
        scale={model.scale}
        rotation={model.rotation}
        position={[0, 0, 0]}
      />
    </Float>
  );
};

const TechIconCardExperience = ({ model }) => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 1.5]}>
      <ambientLight intensity={1.4} />
      <directionalLight position={[3, 3, 3]} intensity={2} />
      <Suspense fallback={null}>
        <TechModel model={model} />
      </Suspense>
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
};

export default TechIconCardExperience;
