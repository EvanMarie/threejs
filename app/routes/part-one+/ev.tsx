import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import { CubeCamera } from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import Center from "~/components/buildingBlocks/center";
import CenterFull from "~/components/buildingBlocks/centerFull";

export default function EvsPage() {
  const [count, setCount] = useState(0);

  return (
    <CenterFull>
      this
      {/* <CubeCamera
        resolution={256}
        frames={Infinity}
        // fog={customFog}
        near={1}
        far={1000}
      >
        {(texture) => (
          <mesh>
            <sphereGeometry />
            <meshStandardMaterial envMap={texture} />
          </mesh>
        )}
      </CubeCamera> */}
    </CenterFull>
  );
}
