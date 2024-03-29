// import React, { useRef, useState } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { Box, Sphere } from "@react-three/drei";
// import { useSpring, a } from "@react-spring/three";
// import * as THREE from "three";

// function SpinningBox() {
//   const [active, setActive] = useState(false);
//   const meshRef = useRef<THREE.Mesh | null>(null);

//   const { scale } = useSpring({
//     scale: active ? 1.5 : 1,
//     config: { mass: 1, tension: 170, friction: 26 },
//   });

//   useFrame(() => {
//     if (meshRef.current) {
//       meshRef.current.rotation.x += 0.01;
//       meshRef.current.rotation.y += 0.01;
//     }
//   });

//   return (
//     <a.mesh
//       ref={meshRef}
//       scale={scale.to((s) => [s, s, s])}
//       onClick={() => setActive(!active)}
//     >
//       <boxGeometry args={[1, 1, 1]} />
//       <meshStandardMaterial color={active ? "hotpink" : "orange"} />
//     </a.mesh>
//   );
// }

// function SpinningSphere() {
//   const [active, setActive] = useState(false);
//   const meshRef = useRef<THREE.Mesh | null>(null);

//   const { scale } = useSpring({
//     scale: active ? 2 : 1,
//     config: { mass: 1, tension: 170, friction: 26 },
//   });

//   useFrame(() => {
//     if (meshRef.current) {
//       meshRef.current.rotation.y += 0.02;
//       meshRef.current.rotation.x += 0.02;
//     }
//   });

//   return (
//     <a.mesh
//       ref={meshRef}
//       scale={scale.to((s) => [s, s, s])}
//       onClick={() => setActive(!active)}
//     >
//       <sphereGeometry args={[1, 32, 32]} />
//       <meshStandardMaterial color={active ? "purple" : "skyblue"} />
//     </a.mesh>
//   );
// }

// function App() {
//   return (
//     <Canvas>
//       <ambientLight />
//       <pointLight position={[10, 10, 10]} />
//       {/* <SpinningBox /> */}
//       <SpinningSphere />
//     </Canvas>
//   );
// }

// export default App;



function SpinningBox() {
  const [active, setActive] = useState(false);
  const meshRef = useRef<THREE.Mesh | null>(null);

  const { scale } = useSpring({
    scale: active ? 1.5 : 1,
    config: { mass: 1, tension: 170, friction: 26 },
  });

  useFrame(() => {
    console.log("Frame is running");
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.02;
      meshRef.current.rotation.x += 0.02;
    }
  });

  return (
    <a.mesh
      ref={meshRef}
      scale={scale.to((s) => [s, s, s])}
      onClick={() => setActive(!active)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={active ? "hotpink" : "orange"} />
    </a.mesh>
  );
}
