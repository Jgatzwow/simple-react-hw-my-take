import React, { useState } from "react";
import SuperRange from "./common/c7-SuperRange/SuperRange";
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";
import "../../App.css";

function HW11() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(100);
  const step = 1;
  const min = 0;
  const max = 100;
  const setFinalValue = (value: [number, number]) => {
    setValue1(value[0]);
    setValue2(value[1]);
  };

  return (
    <div>
      <hr />
      homeworks 11
      {/*should work (должно работать)*/}
      <div className="doubleRange__wrapper">
        <span>{value1}</span>
        <SuperRange
          value={value1}
          onChangeRange={setValue1}
          step={step}
          // сделать так чтоб value1 изменялось
        />
      </div>
      <div className="doubleRange__wrapper">
        <span>{value1}</span>
        <SuperDoubleRange
          value={[value1, value2]}
          min={min}
          max={max}
          step={step}
          onChangeRange={(value) => setFinalValue(value)}
          // сделать так чтоб value1 и value2 изменялось
        />
        <span>{value2}</span>
      </div>
      <hr />
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeSuperRange/>*/}
      {/*<AlternativeSuperDoubleRange/>*/}
      <hr />
    </div>
  );
}

export default HW11;
