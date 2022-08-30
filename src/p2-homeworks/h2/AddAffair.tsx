import React, {ChangeEvent} from 'react';
import styles from './Affairs.module.css';

type PropsType = {
    onInputValueUpdateHandler: (e: ChangeEvent<HTMLInputElement>) => void
    onSelectPriorityChangeHandler: (e: ChangeEvent<HTMLSelectElement>) => void
    onAddAffairHandler: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    inputValueUpdate: string

}


export const AddAffair = (props: PropsType) => {
    const {
        onAddAffairHandler,
        onInputValueUpdateHandler, inputValueUpdate,
        onSelectPriorityChangeHandler
    } = props


    return (
        <div className={styles.affair__add_block}>
            <input placeholder={'Enter Affair Name'}
                   onChange={onInputValueUpdateHandler}
                   value={inputValueUpdate}
                   type="text"/>
            <div>
                <label className={styles.label} htmlFor="priority">Choose priority:</label>
                <select onChange={onSelectPriorityChangeHandler} id="priority">
                    <option value="high">high</option>
                    <option value="middle">middle</option>
                    <option value="low">low</option>
                </select>
            </div>
            <button onClick={onAddAffairHandler}>add affair</button>
        </div>
    )
}