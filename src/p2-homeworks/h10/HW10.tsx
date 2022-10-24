import React from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import { useDispatch, useSelector } from "react-redux";
import { handleLoadingAC } from "./bll/loadingReducer";
import { AppStoreType } from "./bll/store";
import styles from "./hw10.module.css";
import preLoader from "./images/preLoader.svg";

function HW10() {
  const isLoading = useSelector(
    (state: AppStoreType) => state.loading.isLoading
  );
  // useSelector, useDispatch
  const dispatch = useDispatch();

  const setLoading = () => {
    dispatch(handleLoadingAC(true));
    setTimeout(() => {
      dispatch(handleLoadingAC(false));
    }, 2000);
    console.log("loading...");
  };

  return (
    <div className={styles.hw10__wrapper}>
      <h2 className={styles.hw10__title}>homeworks 10</h2>
      {/*should work (должно работать)*/}
      {isLoading ? (
        <div>
          <img className={styles.hw10_preLoader} src={preLoader} alt="loader" />
        </div>
      ) : (
        <div>
          <SuperButton className={styles.hw10__btn} onClick={setLoading}>
            set loading...
          </SuperButton>
        </div>
      )}

      {/*для личного творчества, могу проверить*/}
      {/*<Alternative/>*/}
    </div>
  );
}

export default HW10;
