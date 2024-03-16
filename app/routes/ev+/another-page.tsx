import { Canvas } from "@react-three/fiber";
import TransitionFullScreen from "~/components/buildingBlocks/transitionFullScreen";
import CodeModal from "../design+/svg+/components/codeModal";
import { useState } from "react";
import { RotatingCube } from "./components/another-one";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import HStackFull from "~/components/buildingBlocks/hStackFull";
import Button from "~/components/buildingBlocks/button";
import Flex from "~/components/buildingBlocks/flex";
import Text from "~/components/buildingBlocks/text";

export default function AnotherPage() {
  const [rotationSpeed, setRotationSpeed] = useState(0.02);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowUp") {
      setRotationSpeed(rotationSpeed + 0.005);
    } else if (event.key === "ArrowDown") {
      setRotationSpeed(rotationSpeed - 0.005);
    }
  };

  const handleClickFaster = () => {
    setRotationSpeed(rotationSpeed + 0.0005);
  };

  const handleClickSlower = () => {
    setRotationSpeed(rotationSpeed - 0.005);
  };

  return (
    <TransitionFullScreen className="relative">
      <CodeModal
        isPath={false}
        code={`
`}
        title="animation title"
        buttonClassName="absolute top-[1vh] right-[1vh] z-10"
      />{" "}
      <VStackFull>
        <HStackFull className="justify-evenly">
          <Button
            type="smallNormal"
            buttonText="faster"
            onClick={handleClickFaster}
            width="w-[10vw]"
          />
          <Button
            type="smallNormal"
            buttonText="slower"
            onClick={handleClickSlower}
            width="w-[10vw]"
          />
          <Flex className="text-md-normal text-col-100">
            <Text>Current Rotation Speed: {rotationSpeed} </Text>
          </Flex>
        </HStackFull>
        <div
          onKeyDown={handleKeyDown}
          tabIndex={0}
          style={{ width: "100%", height: "100%" }}
        >
          <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <RotatingCube rotationSpeed={rotationSpeed} />
          </Canvas>
        </div>
      </VStackFull>
    </TransitionFullScreen>
  );
}
