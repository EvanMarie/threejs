import { Canvas } from "@react-three/fiber";
import TransitionFullScreen from "~/components/buildingBlocks/transitionFullScreen";
import CodeModal from "../design+/svg+/components/codeModal";

export default function AnotherPage() {
  return (
    <TransitionFullScreen className="relative">
      <CodeModal
        isPath={false}
        code={`
`}
        title="animation title"
        buttonClassName="absolute top-[1vh] right-[1vh] z-10"
      />
      <Canvas
        shadows
        camera={{ position: [0, 0, 5] }}
        style={{ backgroundColor: "#222222", height: "100%", width: "100%" }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 0, 5]} intensity={1.5} castShadow />
      </Canvas>
    </TransitionFullScreen>
  );
}
