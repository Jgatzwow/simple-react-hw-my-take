import React from 'react'
import Message from './Message';
import AlternativeMessage from './AlternativeMessage';

const messageData = [
    {
        avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
        name: 'Some Name',
        message: 'some text',
        time: '22:00',
    },
    {
        avatar: 'https://www.hollywoodreporter.com/wp-content/uploads/2019/03/avatar-publicity_still-h_2019.jpg?w=1024',
        name: 'Some Name2',
        message: 'some text2',
        time: '19:00',
    }

]

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            should work (должно работать)

            <Message
                avatar={messageData[0].avatar}
                name={messageData[0].name}
                message={messageData[0].message}
                time={messageData[0].time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {messageData.map( (el, idx) => {
                return <AlternativeMessage key={idx}
                                           avatar={el.avatar}
                                           name={el.name}
                                           message={el.message}
                                           time={el.time}/>
            })}
            <hr/>
        </div>
    )
}

export default HW1
