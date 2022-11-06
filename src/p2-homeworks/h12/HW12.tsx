import React from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import { useDispatch, useSelector } from "react-redux";
import { AppStoreType } from "../h10/bll/store";
import { setThemeAC } from "./bll/themeReducer";

const themes = ["some", "red", "dark", "ua"];
/*export type ThemesType = "some" | "red" | "dark";*/

const HW12 = () => {
  const theme = useSelector<AppStoreType, string>(
    (state) => state.themes.theme
  ); // useSelector
  console.log(theme);

  const dispatch = useDispatch();

  const setThemeHandler = (chosenTheme: string) => {
    dispatch(setThemeAC(chosenTheme));
  };
  // useDispatch, onChangeCallback

  return (
    <div className={s[theme]}>
      <hr />
      <span className={s[theme + "-text"]}>Homeworks 12</span>

      {/*should work (должно работать)*/}
      <SuperSelect
        options={themes}
        onChangeOption={(chosenTheme) => setThemeHandler(chosenTheme)}
      />

      <hr />
    </div>
  );
};

export default HW12;
