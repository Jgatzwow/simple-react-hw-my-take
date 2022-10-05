import React, { useState } from "react";
import {
  filterByAgeAC,
  homeWorkReducer,
  sortDownAC,
  sortUpAC,
} from "./bll/homeWorkReducer";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import styles from "./HW8.module.css";

export type UserType = {
  _id: number;
  name: string;
  age: number;
};

const initialPeople = [
  { _id: 0, name: "Кот", age: 3 },
  { _id: 1, name: "Александр", age: 66 },
  { _id: 2, name: "Коля", age: 16 },
  { _id: 3, name: "Виктор", age: 44 },
  { _id: 4, name: "Дмитрий", age: 40 },
  { _id: 5, name: "Ирина", age: 55 },
];

function HW8() {
  const [people, setPeople] = useState<UserType[]>(initialPeople); // need to fix any

  // need to fix any
  const finalPeople = people.map((p: UserType) => (
    <div key={p._id}>
      User name is: {p.name}, age is: {p.age}
    </div>
  ));

  const sortUp = () => setPeople(homeWorkReducer(initialPeople, sortUpAC()));
  const sortDown = () =>
    setPeople(homeWorkReducer(initialPeople, sortDownAC()));
  const filterByAge = () =>
    setPeople(homeWorkReducer(initialPeople, filterByAgeAC()));

  return (
    <div className={styles.HW8__wrapper}>
      <hr />
      <h2 className={styles.hw8__title}> homeworks 8 </h2>
      <div className={styles.list__wrapper}>{finalPeople}</div>
      <div className={styles.btn__wrapper}>
        <div>
          <SuperButton className={styles.btn__for_sort} onClick={sortUp}>
            sort up
          </SuperButton>
        </div>
        <div>
          <SuperButton className={styles.btn__for_sort} onClick={sortDown}>
            sort down
          </SuperButton>
        </div>
        <div>
          <SuperButton className={styles.btn__3} onClick={filterByAge}>
            check 18+
          </SuperButton>
        </div>
        {/*для личного творчества, могу проверить*/}
        {/*<AlternativePeople/>*/}
      </div>
      <hr />
    </div>
  );
}

export default HW8;
