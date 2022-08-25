import React from 'react'
import {AffairType} from './HW2';
import styles from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void// need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div className={styles.affair__wrapper}>
                <div className={styles.affair__title}>{props.affair.name} </div>
                <div className={styles.affair__priority}>[{props.affair.priority}]</div>
                <div>
                    <button className={styles.affair__delete_btn} onClick={deleteCallback}>X</button>
                </div>

        </div>
    )
}

export default Affair
