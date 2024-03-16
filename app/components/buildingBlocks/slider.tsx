// app/components/Slider.tsx
import React from "react";
import HStack from "./hStack";
import Text from "./text";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import IconButton from "./iconButton";
import FlexFull from "./flexFull";
import HStackFull from "./hStackFull";

interface SliderProps {
  label?: string;
  direction?: "flex-col" | "flex-row";
  labelColor?: string;
  min?: number;
  max?: number;
  width?: string;
  value?: number;
  labelTextSizes?: string;
  onChange: (value: number) => void;
  iconTextColor?: string;
}

const Slider: React.FC<SliderProps> = ({
  label,
  width,
  direction = "flex-col",
  min = 0,
  max = 100,
  value,
  labelColor = "text-cyan-200 textShadow",
  labelTextSizes = "text-sm-tight md:text-md-tight",
  onChange,
  iconTextColor = "text-col-100",
}) => {
  const sliderValue = value ?? min;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(event.target.value));
  };
  const step = max - min <= 5 ? 0.1 : 1;

  // Increment and decrement now use sliderValue
  const incrementValue = () => {
    const newValue = Math.min(sliderValue + step, max); // Use sliderValue
    onChange(newValue);
  };

  const decrementValue = () => {
    const newValue = Math.max(sliderValue - step, min); // Use sliderValue
    onChange(newValue);
  };

  return (
    <FlexFull className={`${direction} ${width} gap-[0px]`}>
      {label && (
        <HStack
          className={` ${labelTextSizes} text-col-100 justify-center whitespace-nowrap`}
        >
          <Text className={`${labelColor}`}>{label}: </Text>
          <Text>{value}</Text>
        </HStack>
      )}
      <HStackFull className="items-center">
        <IconButton
          type="smallUnstyled"
          icon={FiMinusCircle}
          onClick={decrementValue}
          iconClassName={iconTextColor}
        />
        <span className="text-xs text-col-100">{min}</span>
        <HStackFull className="items-center" gap="gap-[0.4vh]">
          <input
            type="range"
            min={min}
            max={max}
            value={value}
            step={step}
            onChange={handleChange}
            className="slider h-[0.5vh] w-full cursor-pointer appearance-none  bg-col-300 dark:bg-col-300 focus:outline-none focus:ring focus:ring-col-400 shadowBroadTight"
          />{" "}
          <span className="text-xs text-col-100">{max}</span>
        </HStackFull>
        <IconButton
          type="smallUnstyled"
          icon={FiPlusCircle}
          onClick={incrementValue}
          iconClassName={iconTextColor}
        />
      </HStackFull>
    </FlexFull>
  );
};

export default Slider;
