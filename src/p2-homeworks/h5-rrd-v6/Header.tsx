import React from 'react'
import {NavLink} from 'react-router-dom';
import {JUNIOR, JUNIOR_PLUS, PRE_JUNIOR} from './Pages';
import s from './pages/Pages.module.css'

function Header() {
    return (
        <nav className={s.navbar}>
            <div>
                <NavLink className={s.hw__link} to={PRE_JUNIOR}>PreJunior</NavLink>
            </div>
            <div>
                <NavLink className={s.hw__link} to={JUNIOR}>Junior</NavLink>
            </div>
            <div>
                <NavLink className={s.hw__link} to={JUNIOR_PLUS}>Junior Plus</NavLink>
            </div>
        </nav>
    )
}

export default Header
