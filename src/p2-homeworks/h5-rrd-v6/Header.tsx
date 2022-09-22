import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { JUNIOR, JUNIOR_PLUS, PRE_JUNIOR } from "./Pages";
import s from "./pages/Pages.module.css";

function Header() {
  const [toggle, setToggle] = useState<boolean>(false);

  const animatedNavClassName = !toggle
    ? s.nav__links__closed
    : s.nav__links__opened;
  const animatedBurgerClassName = !toggle ? s.burger : s.burger__none;

  const onBurgerClickHandler = () => {
    setToggle((prevState) => !prevState);
  };

  const onBurgerMouseLeaveHandler = () => {
    setTimeout(onBurgerMouseOverHandler, 5000);
  };

  const onBurgerMouseOverHandler = () => {
    setToggle((prevState) => !prevState);
  };

  return (
    <nav className={s.navbar__wrapper}>
      <div
        onMouseEnter={onBurgerMouseLeaveHandler}
        onMouseOver={onBurgerMouseOverHandler}
        onClick={onBurgerClickHandler}
        className={animatedBurgerClassName}
      >
        <div className={s.line}></div>
        <div className={s.line}></div>
        <div className={s.line}></div>
      </div>
      <div className={animatedNavClassName}>
        <div>
          <NavLink className={s.hw__link} to={PRE_JUNIOR}>
            PreJunior
          </NavLink>
        </div>
        <div>
          <NavLink className={s.hw__link} to={JUNIOR}>
            Junior
          </NavLink>
        </div>
        <div>
          <NavLink className={s.hw__link} to={JUNIOR_PLUS}>
            Junior Plus
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Header
