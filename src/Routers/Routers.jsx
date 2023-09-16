import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
// import Login from '../pages/Login'
import SignUp from '../pages/SignUp'

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='login' element={<SignUp/>} />
      </Routes>
    </>
  )
}

export default Routers