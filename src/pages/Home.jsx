import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'

const Home = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [chatId, setChatId] = useState(null);
  return (
    <div className='home'>
      <div className="container">
      <Sidebar setSelectedUser={setSelectedUser} setChatId={setChatId} />
      <Chat selectedUser={selectedUser} chatId={chatId} />
      </div>
    </div>
  )
}

export default Home
