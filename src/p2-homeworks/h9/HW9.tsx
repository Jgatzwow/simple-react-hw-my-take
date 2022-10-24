import React from "react";
import Clock from "./Clock";
import styles from "./Clock.module.css";

function HW9() {
  return (
    <div className={styles.hw9__wrapper}>
      <hr />
      <h2 className={styles.hw9__title}>homeworks 9</h2>
      <Clock />
      <hr />
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeClock/>*/}
      <hr />
    </div>
  );
}

export default HW9;
