import { Outlet } from "@remix-run/react";
import { useState } from "react";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import { RiMenuUnfoldLine } from "react-icons/ri";
import Button from "~/components/buildingBlocks/button";
import Flex from "~/components/buildingBlocks/flex";
import FlexFull from "~/components/buildingBlocks/flexFull";
import HStack from "~/components/buildingBlocks/hStack";
import HStackFull from "~/components/buildingBlocks/hStackFull";
import IconButton from "~/components/buildingBlocks/iconButton";
import Transition from "~/components/buildingBlocks/transition";
import VStack from "~/components/buildingBlocks/vStack";

function EvIndexVStack() {
  return (
    <VStack className="w-fit flex-shrink-0 py-[2vh] px-[1vh] bg-col-270 rounded-none h-full">
      <Button type="smallNormal" buttonText="home" to="/" width="w-[13vh]" />
      <Button
        type="smallNormal"
        buttonText="sphere & background"
        to="/ev/sphere-and-background"
        width="w-[13vh] "
      />
      <Button
        type="smallNormal"
        buttonText="another page"
        to="/ev/another-page"
        width="w-[13vh]"
      />
    </VStack>
  );
}

export default function EvIndex() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [exiting, setExiting] = useState(false);

  return (
    <FlexFull className="h-screen">
      <HStackFull>
        {menuVisible && (
          <HStack
            className={`md:hidden items-center h-screen animate-slideInLeft`}
          >
            <EvIndexVStack />
            <Flex className="text-col-100 h-full px-[1vh]">
              <IconButton
                icon={FaRegArrowAltCircleLeft}
                type="smallUnstyled"
                onClick={() => setMenuVisible(false)}
              />
            </Flex>
          </HStack>
        )}
        {!menuVisible && (
          <Flex className="absolute left-0 top-1/2 text-col-100 px-[1vh]">
            <IconButton
              icon={FaRegArrowAltCircleRight}
              type="smallUnstyled"
              onClick={() => {
                setMenuVisible(true);
              }}
            />
          </Flex>
        )}
        <Flex className="hidden md:flex">
          <EvIndexVStack />
        </Flex>
        <FlexFull className="h-full justify-center">
          <Flex className="h-full p-[2vh] w-full">
            <Outlet />
          </Flex>{" "}
        </FlexFull>
      </HStackFull>
    </FlexFull>
  );
}
