import React, { ChangeEvent } from "react";
import styles from "./Affairs.module.css";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type PropsType = {
  onInputValueUpdateHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  onSelectPriorityChangeHandler: (e: ChangeEvent<HTMLSelectElement>) => void;
  onAddAffairHandler: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  onEnterPressHandler: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  inputValueUpdate: string;
};

export const AddAffair = (props: PropsType) => {
  const {
    onAddAffairHandler,
    onInputValueUpdateHandler,
    inputValueUpdate,
    onSelectPriorityChangeHandler,
    onEnterPressHandler,
  } = props;

  return (
    <div className={styles.affair__add_block}>
      <SuperInputText
        placeholder={"Enter Affair Name"}
        onKeyDown={onEnterPressHandler}
        onChange={onInputValueUpdateHandler}
        value={inputValueUpdate}
        type="text"
      />
      <div>
        <label className={styles.label} htmlFor="priority">
          Choose priority:
        </label>
        <select onChange={onSelectPriorityChangeHandler} id="priority">
          <option value="high">high</option>
          <option value="middle">middle</option>
          <option value="low">low</option>
        </select>
      </div>
      <SuperButton onClick={onAddAffairHandler}>add affair</SuperButton>
    </div>
  );
};