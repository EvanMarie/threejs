import { Canvas } from "@react-three/fiber";
import {
  MovingBackground,
  SpinningSphere,
} from "./components/background-and-sphere";
import TransitionFullScreen from "~/components/buildingBlocks/transitionFullScreen";
import CodeModal from "../design+/svg+/components/codeModal";

export default function SphereAndBackground() {
  return (
    <TransitionFullScreen className="relative">
      <CodeModal
        isPath={false}
        iconOnly
        code={`import React, { useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Box, Sphere } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";
import * as THREE from "three";
import { Environment, useTexture } from "@react-three/drei";

export function SpinningSphere() {
  const [active, setActive] = useState(false);
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useTexture("/images/textures/pink-scales-texture.png");

  // Define the animation for scaling
  const { scale } = useSpring({
    scale: active ? 2 : 1,
    config: { mass: 1, tension: 170, friction: 26 },
  });

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
      meshRef.current.rotation.x += 0.002;
    }
  });

  return (
    <animated.mesh
      ref={meshRef}
      scale={scale.to((s) => [s, s, s])}
      onClick={() => setActive(!active)}
      castShadow
      receiveShadow
    >
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial
        map={texture}
        color={active ? "purple" : "skyblue"}
      />
    </animated.mesh>
  );
}

export function MovingBackground() {
  const texture = useLoader(
    THREE.TextureLoader,
    "/images/textures/background-texture-swirls.png"
  );
  const ref = useRef<THREE.Mesh | null>(null);
  const [yRotationSpeed, setYRotationSpeed] = useState(0.0003);
  const [xRotationSpeed, setXRotationSpeed] = useState(0.0005);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += yRotationSpeed;
      ref.current.rotation.x += xRotationSpeed;
    }
  });

  return (
    <mesh ref={ref} scale={[100, 100, 100]}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshBasicMaterial map={texture} side={THREE.BackSide} />
    </mesh>
  );
}

<Canvas
  shadows
  camera={{ position: [0, 0, 5] }}
  style={{ backgroundColor: "#222222", height: "100%", width: "100%" }}
>
  <ambientLight intensity={0.5} />
  <directionalLight position={[0, 0, 5]} intensity={1.5} castShadow />
  <SpinningSphere />
  <MovingBackground />
</Canvas>
`}
        title="sphere and background"
        buttonClassName="absolute top-[1vh] right-[1vh] z-10"
      />
      <Canvas
        shadows
        camera={{ position: [0, 0, 5] }}
        style={{ backgroundColor: "#222222", height: "100%", width: "100%" }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 0, 5]} intensity={1.5} castShadow />
        <SpinningSphere />
        <MovingBackground />
      </Canvas>
    </TransitionFullScreen>
  );
}
