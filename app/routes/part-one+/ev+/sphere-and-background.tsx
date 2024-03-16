import { Canvas } from "@react-three/fiber";
import {
  MovingBackground,
  SpinningSphere,
} from "./components/background-and-sphere";

export default function SphereAndBackground() {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 5] }}
      style={{ backgroundColor: "darkCyan", height: "100vh" }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 5]} intensity={1.5} castShadow />
      <SpinningSphere />
      <MovingBackground />
    </Canvas>
  );
}
