import React from 'react'
import styles from "./Message.module.css";

type PropsType = {
    avatar: string
    name: string
    message: string
    time: string
}


function AlternativeMessage(props: PropsType) {
    const {time, message, name, avatar} = props
    return (
        <div className={styles.message__comp}>
            <div className={styles.avatar__block}>
                <img src={avatar} alt="Profile avatar"/>
            </div>
            <div className={styles.info__block}>
                <h2 className={styles.name}>{name}</h2>
                <div className={styles.messageTimeWrapper}>
                    <span className={styles.message}>{message}</span>
                    <span className={styles.time}>{time}</span>
                </div>
            </div>
        </div>
    )
}

export default AlternativeMessage
