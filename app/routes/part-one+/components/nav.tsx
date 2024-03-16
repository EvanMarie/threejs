import { HomeIcon } from "styles";
import Button from "~/components/buildingBlocks/button";
import HStackFull from "~/components/buildingBlocks/hStackFull";
import IconButton from "~/components/buildingBlocks/iconButton";
import NavContainer from "~/components/buildingBlocks/navContainer";

export default function PartOneNav() {
  return (
    <NavContainer>
      <HStackFull className="px-[1vh] justify-between">
        <IconButton icon={HomeIcon} type="smallNormal" to="/" />
        <HStackFull className="h-full items-center justify-around">
          <Button to="/part-one" buttonText="Intro" type="smallNormal" />
          <Button
            to="https://github.com/ansonlichtfuss/remix-tailwind-threejs-template"
            target="_blank"
            buttonText="Helpful Repo"
            type="smallNormal"
          />
        </HStackFull>
      </HStackFull>
    </NavContainer>
  );
}
