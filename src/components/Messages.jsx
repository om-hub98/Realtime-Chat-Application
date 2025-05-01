import React from 'react'
import Message from './Message'

const Messages = ({chatId}) => {
  return (
    <div className="messages" style={{overflowY: "scroll", padding: "1rem"}}>
        <Message chatId={{chatId}}/>
    </div>
  )
}

export default Messages
