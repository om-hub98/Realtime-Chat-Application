import React from 'react'
import Search from './Search'
import Navbar from './Navbar'
import Chats from './Chats'

const Sidebar = ({ setSelectedUser, setChatId }) => {
  return (
    <div  className='sidebar'>
      <div className="sidebar-header">
        <Navbar/>
        <Search setSelectedUser={setSelectedUser} setChatId={setChatId}/>
        <Chats setSelectedUser={setSelectedUser} setChatId={setChatId}/>
      </div>
    </div>
  )
}

export default Sidebar
