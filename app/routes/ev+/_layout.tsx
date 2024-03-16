import { Outlet } from "@remix-run/react";
import { useState } from "react";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import { RiMenuUnfoldLine } from "react-icons/ri";
import Button from "~/components/buildingBlocks/button";
import Drawer from "~/components/buildingBlocks/drawer";
import DrawerWithButton from "~/components/buildingBlocks/drawerWithButton";
import Flex from "~/components/buildingBlocks/flex";
import FlexFull from "~/components/buildingBlocks/flexFull";
import HStack from "~/components/buildingBlocks/hStack";
import HStackFull from "~/components/buildingBlocks/hStackFull";
import IconButton from "~/components/buildingBlocks/iconButton";
import Transition from "~/components/buildingBlocks/transition";
import VStack from "~/components/buildingBlocks/vStack";

function EvIndexVStack({
  isDrawerOpen,
  setDrawerOpen,
}: {
  isDrawerOpen: boolean;
  setDrawerOpen: (arg0: boolean) => void;
}) {
  return (
    <VStack className="w-fit flex-shrink-0 py-[2vh]  px-[1vh] bg-col-270 rounded-none h-full">
      <Button
        buttonText="home"
        to="/"
        width="w-[26vh]"
        onClick={isDrawerOpen ? () => setDrawerOpen(false) : () => {}}
        type={isDrawerOpen ? "normal" : "smallNormal"}
      />
      <Button
        buttonText="sphere & background"
        to="/ev/sphere-and-background"
        width="w-[26vh]"
        type={isDrawerOpen ? "normal" : "smallNormal"}
        onClick={isDrawerOpen ? () => setDrawerOpen(false) : () => {}}
      />
      <Button
        buttonText="another page"
        to="/ev/another-page"
        width="w-[26vh]"
        type={isDrawerOpen ? "normal" : "smallNormal"}
        onClick={isDrawerOpen ? () => setDrawerOpen(false) : () => {}}
      />
    </VStack>
  );
}

export default function EvIndex() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  return (
    <>
      <FlexFull className="h-screen">
        <Flex className="fixed left-[1vh] top-1/2 z-10 lg:hidden">
          <IconButton
            onClick={() => setDrawerOpen(!isDrawerOpen)}
            icon={FaRegArrowAltCircleRight}
            type="unstyled"
            iconClassName="text-col-100"
          />
        </Flex>
        <FlexFull className="h-full hidden lg:flex">
          <EvIndexVStack
            isDrawerOpen={isDrawerOpen}
            setDrawerOpen={setDrawerOpen}
          />
        </FlexFull>
        <FlexFull className="h-full justify-center">
          <Flex className="h-full p-[2vh] w-full">
            <Outlet />
          </Flex>{" "}
        </FlexFull>
      </FlexFull>
      <Drawer
        isOpen={isDrawerOpen}
        setDrawerOpen={setDrawerOpen}
        onClose={() => setDrawerOpen(false)}
        slideDirection="left"
        drawerHeight="h-screen"
        drawerWidth="w-fit"
        showBottomButton={false}
      >
        <FlexFull className="h-full pt-[6vh] justify-center items-center">
          <EvIndexVStack
            isDrawerOpen={isDrawerOpen}
            setDrawerOpen={setDrawerOpen}
          />
        </FlexFull>
      </Drawer>
    </>
  );
}
