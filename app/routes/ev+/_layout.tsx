import { Outlet } from "@remix-run/react";
import Button from "~/components/buildingBlocks/button";
import Flex from "~/components/buildingBlocks/flex";
import FlexFull from "~/components/buildingBlocks/flexFull";
import HStackFull from "~/components/buildingBlocks/hStackFull";
import VStack from "~/components/buildingBlocks/vStack";

export default function EvIndex() {
  return (
    <FlexFull className="h-screen">
      <HStackFull>
        <VStack className="w-[13vw] flex-shrink-0 py-[2vh] px-[1vh] bg-col-270">
          <Button
            type="smallNormal"
            buttonText="home"
            to="/"
            width="w-[10vw]"
          />
          <Button
            type="smallNormal"
            buttonText="sphere & background"
            to="/ev/sphere-and-background"
            width="w-[10vw]"
          />
          <Button
            type="smallNormal"
            buttonText="another page"
            to="/ev/another-page"
            width="w-[10vw]"
          />
        </VStack>
        <FlexFull className="h-full justify-center">
          <Flex className="h-full p-[2vh] w-[85vw]">
            <Outlet />
          </Flex>{" "}
        </FlexFull>
      </HStackFull>
    </FlexFull>
  );
}
