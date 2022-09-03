import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3';

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any
    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        const inputValue = e.currentTarget.value

        if (inputValue.trim() !== '') {
            setName(inputValue.trim());
            setError('');
        } else {
            setName('')
            setError('Name is required')
            console.log('Name is required')

        }


    }

    const addUser = () => {
        if (name === '') {
            setError('Name is required')
            console.log('Name is required');

        } else {
            addUserCallback(name.trim())
            alert(`Hello ${name.trim()}`)
            setName('')
        }

    }

    const keyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        return e.key === 'Enter' ? addUser() : '';
    }

    const totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            keyDownCallback={keyDownHandler}
        />
    )
}

export default GreetingContainer
