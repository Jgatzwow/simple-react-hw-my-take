import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import styles from './Affairs.module.css'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}

        />
    ))

    const setAll = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        props.setFilter('all')
    } // need to fix
    const setHigh = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        props.setFilter('high')
    }
    const setMiddle = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        props.setFilter('middle')
    }
    const setLow = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        props.setFilter('low')
    }

    return (
        <div>

            {mappedAffairs}
            <div className={styles.affair__filter__btn__wrapper}>
                <SuperButton className={styles.affair__filter_btn} onClick={setAll}>All</SuperButton>
                <SuperButton className={styles.affair__filter_btn} onClick={setHigh}>High</SuperButton>
                <SuperButton className={styles.affair__filter_btn} onClick={setMiddle}>Middle</SuperButton>
                <SuperButton className={styles.affair__filter_btn} onClick={setLow}>Low</SuperButton>
            </div>
        </div>
    )
}

export default Affairs
