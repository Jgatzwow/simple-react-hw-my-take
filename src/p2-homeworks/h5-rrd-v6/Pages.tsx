import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import PreJunior from "../h5/pages/PreJunior";

import Junior from "./pages/Junior";
import JuniorPlus from "./pages/JuniorPlus";
import Error404 from "../h5-rrd-v6/pages/Error404";

export const PATH = {
  PRE_JUNIOR: "/pre-junior",
  JUNIOR: "/junior",
  JUNIOR_PLUS: "/junior-plus",
  // add paths
};
export const { PRE_JUNIOR, JUNIOR_PLUS, JUNIOR } = PATH;

function Pages() {
  return (
    <div>
      {/*Routes выбирает первый подходящий роут*/}
      <Routes>
        {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
        <Route path={"/"} element={<Navigate to={PATH.PRE_JUNIOR} />} />
        <Route path={PRE_JUNIOR} element={<PreJunior />} />
        <Route path={JUNIOR} element={<Junior />} />
        <Route path={JUNIOR_PLUS} element={<JuniorPlus />} />
        // add routes
        {/*он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
        <Route path={"/*"} element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default Pages
