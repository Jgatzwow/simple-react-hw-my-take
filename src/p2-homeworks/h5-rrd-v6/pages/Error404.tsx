import React from 'react'
import s from './Pages.module.css'

function Error404() {
    return (
        <div className={s.error404__wrapper}>
            <div className={s.error__code}>404</div>
            <div className={s.error__text}>Page not found!</div>
            <div className={s.error__face}>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
        </div>
    )
}

export default Error404
