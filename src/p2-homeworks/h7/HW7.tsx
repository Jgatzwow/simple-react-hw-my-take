import React, { useState } from "react";
import SuperSelect from "./common/c5-SuperSelect/SuperSelect";
import SuperRadio from "./common/c6-SuperRadio/SuperRadio";
import styles from "./HW7.module.css";
const arr = ["x", "y", "z"];

function HW7() {
  const [value, onChangeOption] = useState(arr[1]);

  return (
    <div className={styles.HW7__wrapper}>
      <hr />
      <h3 className={styles.HW7__title}>homeworks 7</h3>

      {/*should work (должно работать)*/}
      <div>
        <SuperSelect
          options={arr}
          value={value}
          onChangeOption={onChangeOption}
        />
      </div>
      <div>
        <SuperRadio
          name={"radio"}
          options={arr}
          value={value}
          onChangeOption={onChangeOption}
        />
      </div>

      <hr />
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeSuperSelect/>*/}
      {/*<AlternativeSuperRadio/>*/}
      <hr />
    </div>
  );
}

export default HW7;
