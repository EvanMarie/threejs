import { Canvas } from "@react-three/fiber";
import {
  MovingBackground,
  SpinningSphere,
} from "./components/background-and-sphere";
import TransitionFullScreen from "~/components/buildingBlocks/transitionFullScreen";

export default function SphereAndBackground() {
  return (
    <TransitionFullScreen>
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
