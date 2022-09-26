import React, { useState } from "react";
import SuperEditableSpan from "./common/c4-SuperEditableSpan/SuperEditableSpan";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import { restoreState, saveState } from "./localStorage/localStorage";
import styles from "./Hw6.module.css";

function HW6() {
  const [value, setValue] = useState<string>("");

  const save = () => {
    saveState<string>("editable-span-value", value);
  };
  const restore = () => {
    setValue(restoreState<string>("editable-span-value", ""));
  };

  return (
    <>
      <hr />
      <div className={styles.hw6__wrapper}>
        <h2 className={styles.title}>homeworks 6</h2>{" "}
        {/*should work (должно работать)*/}
        <div>
          <SuperEditableSpan
            value={value}
            onChangeText={setValue}
            spanProps={{ children: value ? undefined : "enter text..." }}
          />
          <div className={styles.btn__wrapper}>
            <SuperButton className={styles.button} onClick={save}>
              save
            </SuperButton>
            <SuperButton className={styles.button} onClick={restore}>
              restore
            </SuperButton>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperEditableSpan/>*/}
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default HW6;
