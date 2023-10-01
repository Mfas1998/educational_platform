import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import SignUp from '../pages/SignUp'
import Login from '../pages/Login'
import CoursesPlaylist from '../pages/CoursesPlaylist'

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='signup' element={<SignUp/>} />
        <Route path='login' element={<Login/>} />
        <Route path='course' element={<CoursesPlaylist/>} />
      </Routes>
    </>
  )
}

export default Routers