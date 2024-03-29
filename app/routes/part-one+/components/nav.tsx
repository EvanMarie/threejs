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
          <Button to="/part-one" buttonText="Puppy" type="smallNormal" />
          <Button to="/part-one/ev" buttonText="Ev" type="smallNormal" />
          <Button
            to="/ https://www.npmjs.com/package/@react-three/drei/v/9.0.1"
            buttonText="drei"
            type="smallNormal"
          />

          <Button
            to="https://threejs.org/docs/#manual/en/introduction/Installation"
            target="_blank"
            buttonText="threejs"
            type="smallNormal"
          />
          <Button
            to="https://docs.pmnd.rs/react-three-fiber/getting-started/introduction"
            target="_blank"
            buttonText="fiber"
            type="smallNormal"
          />
        </HStackFull>
      </HStackFull>
    </NavContainer>
  );
}
