import React, { useState } from "react";
import { Box, Slider } from "@mui/material";

type SuperDoubleRangePropsType = {
  onChangeRange?: (value: [number, number]) => void;
  value?: [number, number];
  min?: number;
  max?: number;
  step?: number;
  disable?: boolean;
  // min, max, step, disable, ...
};

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = ({
  onChangeRange,
  value,
  min,
  max,
  step,
  // min, max, step, disable, ...
}) => {
  const minSliderValue = value ? value[0] : 0;
  const maxSliderValue = value ? value[1] : 100;
  const [finalVal, setFinalVal] = useState([minSliderValue, maxSliderValue]);

  /*  const handleChange = (event: Event, newValue: number | number[]) => {
        if (finalVal[1] < finalVal[0] + 4) {
          finalVal[0] = finalVal[1] - 4;
          if (finalVal[0] === min) {
            finalVal[1] = 4;
          }
        }
        setFinalVal(newValue as number[]);
        onChangeRange && onChangeRange([finalVal[0], finalVal[1]]);
      };*/

  function valuetext(value: number) {
    return `${value}°C`;
  }

  const minDistance = 10;
  const handleChange1 = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    onChangeRange && onChangeRange([finalVal[0], finalVal[1]]);
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setFinalVal([
        Math.min(newValue[0], finalVal[1] - minDistance),
        finalVal[1],
      ]);
    } else {
      setFinalVal([
        finalVal[0],
        Math.max(newValue[1], finalVal[0] + minDistance),
      ]);
    }
  };
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={finalVal}
        onChange={handleChange1}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        min={min}
        max={max}
        step={step}
        disableSwap
      />
    </Box>
  );
};

export default SuperDoubleRange;
