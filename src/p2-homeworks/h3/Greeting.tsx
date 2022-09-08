import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'
import SuperInputText from '../h4/common/c1-SuperInputText/SuperInputText';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number// need to fix any
    keyDownCallback: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers,keyDownCallback} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.proper__input // need to fix with (?:)

    return (
        <div className={s.addGreetings__wrapper}>
            <div className={s.addGreetings}>
                <SuperInputText onKeyDown={keyDownCallback}
                                value={name}
                                onChange={setNameCallback}
                                className={inputClass}/>
                <SuperButton disabled={!!error} onClick={addUser}>
                    add
                </SuperButton>
                <span className={s.total__users}>{totalUsers}</span>
            </div>
            {error && <span className={s.error__message}>{error}</span>}

        </div>
    )
}

export default Greeting
