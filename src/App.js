import React from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import './style.scss';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      {/* <Route path="/" elemnt={<Login/>}/> */}
      <Route path="/" element={<Login/>}/>
      <Route path="/signup" element={<Register/>}/>
      <Route path="/home" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
