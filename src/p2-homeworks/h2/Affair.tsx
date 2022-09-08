import React from 'react'
import {AffairType} from './HW2';
import styles from './Affairs.module.css'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';

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
        <div>
            <div className={styles.affair__wrapper}>
                <div className={styles.affair__title}>{props.affair.name} </div>
                <div className={styles.affair__priority}>[{props.affair.priority}]</div>
                <div>
                    <SuperButton className={styles.affair__delete_btn} onClick={deleteCallback}>
                        X
                    </SuperButton>
                </div>
            </div>
        </div>
    )
}

export default Affair
