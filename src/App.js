import React, { useContext, useState } from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import './style.scss';
import Home from './pages/Home';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';

const App = () => {

  const { currentUser } = useContext(AuthContext);

  console.log("currentUser", currentUser);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />
    }
    return children;
  }


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<ProtectedRoute>
            <Home />
          </ProtectedRoute>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
