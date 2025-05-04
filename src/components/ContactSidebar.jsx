import React, { useContext } from 'react'
import Search from './Search'
import Navbar from './Navbar'
import Chats from './Chats'

const ContactSidebar = () => {

  return (
    <div  className='sidebar'>
      <div className="sidebar-header">
        <Navbar/>
        <Search />
        <Chats />
      </div>
    </div>
  )
}

export default ContactSidebar
