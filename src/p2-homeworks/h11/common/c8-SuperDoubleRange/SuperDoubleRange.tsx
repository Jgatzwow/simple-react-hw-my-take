import React, { useState } from "react";
import { Box, Slider } from "@mui/material";

type SuperDoubleRangePropsType = {
  onChangeRange?: (value: [number, number]) => void;
  value?: [number, number];
  min?: number;
  max?: number;
  step?: number;
  disabled: boolean;
  // min, max, step, disable, ...
};

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = ({
  onChangeRange,
  value,
  min,
  max,
  step,
  disabled,
  // min, max, step, disable, ...
}) => {
  const minSliderValue = value ? value[0] : 0;
  const maxSliderValue = value ? value[1] : 100;
  const [finalVal, setFinalVal] = useState([minSliderValue, maxSliderValue]);
  const handleChange = (event: Event, newValue: number | number[]) => {
    setFinalVal(newValue as number[]);
  };

  function valuetext(value: number) {
    return `${value}°C`;
  }

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={finalVal}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        min={min}
        max={max}
        step={step}
        disabled={max === min}
      />
    </Box>
  );
};

export default SuperDoubleRange;
