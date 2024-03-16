import { Outlet } from "@remix-run/react";
import LayoutContainer from "~/components/buildingBlocks/layoutContainer";
import PartOneNav from "./components/nav";

export default function RouteIndex() {
  return (
    <LayoutContainer>
      {" "}
      <PartOneNav />
      <LayoutContainer className="pt-nav">
        <Outlet />
      </LayoutContainer>
    </LayoutContainer>
  );
}
