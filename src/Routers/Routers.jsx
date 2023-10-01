import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import SignUp from '../pages/SignUp'
import Login from '../pages/Login'
import CoursesPlaylist from '../pages/CoursesPlaylist'
import ForgotPassword from '../pages/ForgitPassword'
import SendEmail from '../pages/CheckEmail'
import SetNewPassword from '../pages/SetNewPassword'
import PasswordReset from '../pages/ResetPasswordDone'
import StudentCourses from '../pages/StudentCourses'

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='signUp' element={<SignUp/>} />
        <Route path='login' element={<Login/>} />
        <Route path='course' element={<CoursesPlaylist/>} />
        <Route path='forgotPassword' element={<ForgotPassword/>} />
        <Route path='sendEmail' element={<SendEmail/>} />
        <Route path='setNewPassword' element={<SetNewPassword/>} />
        <Route path='passwordReset' element={<PasswordReset/>} />
        <Route path='studentCourses' element={<StudentCourses/>} />
      </Routes>
    </>
  )
}

export default Routers