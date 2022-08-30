import React, {ChangeEvent, useState} from 'react'
import Affairs from './Affairs'
import styles from './Affairs.module.css'
import {AddAffair} from './AddAffair';

// types
export type AffairPriorityType = 'high' | 'middle' | 'low' // need to fix any
export type AffairType = {
    _id: number
    name: string
    priority: FilterType
}
// need to fix any
export type FilterType = 'all' | AffairPriorityType


// constants
const defaultAffairs: Array<AffairType> = [ // need to fix any
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]



// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => { // need to fix any
    switch (filter) {
        case 'high':
            return affairs.filter(a => a.priority === 'high');
        case 'middle':
            return affairs.filter(a => a.priority === 'middle')
        case 'low':
            return affairs.filter(a => a.priority === 'low')
        default:
            return affairs
    }
    // need to fix
}
export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => { // need to fix any
    return affairs.filter(a => a._id !== _id) // need to fix
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')
    const [inputValueUpdate, setInputValueUpdate] = useState('')
    const [affPriority, setAffPriority] = useState<FilterType>('high')

    const filteredAffairs = filterAffairs(affairs, filter)
    console.log(filteredAffairs)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)) // need to fix any

    const onInputValueChange = (value: string) => {
        setInputValueUpdate(value)
    }
    const onInputValueUpdateHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onInputValueChange(e.currentTarget.value)
    }
    const addAffair = (aff: AffairType) => {
        setAffairs([aff, ...affairs])
        setInputValueUpdate('')
    }

    const onAddAffairHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        addAffair({_id: Date.now(), name: inputValueUpdate, priority: affPriority})
    }

    const onSelectPriorityChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setAffPriority(e.currentTarget.value as FilterType)
    }
    return (
        <div className={styles.hw2__wrapper}>
            <hr/>
            <h2 className={styles.hw2__title}> homework 2</h2>
            <AddAffair onAddAffairHandler={onAddAffairHandler}
                       onSelectPriorityChangeHandler={onSelectPriorityChangeHandler}
                       onInputValueUpdateHandler={onInputValueUpdateHandler}
                       inputValueUpdate={inputValueUpdate}
            />
            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    )
}

export default HW2
