import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.proper__input // need to fix with (?:)

    return (
        <div className={s.addGreetings__wrapper}>
            <div>
                <input value={name} onChange={setNameCallback} className={inputClass}/>
                {error ? <button disabled onClick={addUser}>add</button>
                    : <button onClick={addUser}>add</button>}
                <span>{totalUsers}</span>
            </div>
            <span className={s.error__message}>{error}</span>

        </div>
    )
}

export default Greeting
