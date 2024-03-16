/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { CodeIcon } from "styles";
import Box from "~/components/buildingBlocks/box";
import Button from "~/components/buildingBlocks/button";
import CodeExample from "~/components/buildingBlocks/codeExample";
import FlexFull from "~/components/buildingBlocks/flexFull";
import Modal from "~/components/buildingBlocks/modal";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import { SVGHeading } from "../../components/formattingComponents";
import IconButton from "~/components/buildingBlocks/iconButton";

export default function CodeModal({
  code,
  title,
  isPath = true,
  buttonClassName,
  iconOnly = false,
}: {
  code: string;
  title: string;
  isPath?: boolean;
  buttonClassName?: string;
  iconOnly?: boolean;
}) {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      {iconOnly ? (
        <Box className={buttonClassName}>
          <IconButton icon={CodeIcon} onClick={() => setModalOpen(true)} />
        </Box>
      ) : (
        <Box className={buttonClassName}>
          <Button
            iconLeft={CodeIcon}
            onClick={() => setModalOpen(true)}
            buttonText={isPath ? "View Path" : "View Code"}
            type="smallNormal"
          />
        </Box>
      )}
      <Modal
        isOpen={modalOpen}
        setModalOpen={setModalOpen}
        onClose={() => setModalOpen(false)}
        modalSize="w-full h-fit max-h-[90vh] sm:w-80% md:w-70% lg:w-60% xl:w-50% 2xl:w-40%"
      >
        <FlexFull className=" h-full max-h-[70vh] p-[1vh] text-col-100 py-[2vh] bg-col-700 ">
          <VStackFull gap="gap-[2vh]" className="overflow-y-hidden">
            <SVGHeading>{title}</SVGHeading>
            <FlexFull className="h-full overflow-y-auto">
              <FlexFull className="h-fit py-[1vh] px-[2vh]">
                <CodeExample>{isPath ? "d=" + `"${code}"` : code}</CodeExample>
              </FlexFull>
            </FlexFull>
          </VStackFull>
        </FlexFull>
      </Modal>
    </>
  );
}
