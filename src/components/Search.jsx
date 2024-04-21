import React from 'react'

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" className="text" placeholder="Find a user"/>
      </div>
      <div className="userChat">
        <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
        <div className="userChatInfo">
          <span>Omraj</span>
        </div>
      </div>
    </div>
  )
}

export default Search
