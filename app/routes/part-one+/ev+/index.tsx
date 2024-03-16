import Button from "~/components/buildingBlocks/button";
import FlexFull from "~/components/buildingBlocks/flexFull";
import HStackFull from "~/components/buildingBlocks/hStackFull";

export default function EvIndex() {
  return (
    <FlexFull className="h-screen">
      <HStackFull>
        <Button
          type="smallNormal"
          buttonText="sphere & background"
          to="sphere-and-background"
        />
      </HStackFull>
    </FlexFull>
  );
}
