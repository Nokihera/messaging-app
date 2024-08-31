import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignIn from './pages/signIn'
import SignUp from './pages/SignUp'
import HomePage from './pages/HomePage'
import MessageUI from './pages/messageUi'
import Profile from './pages/Profile'
import Setting from './pages/Setting'
import Help from './pages/Help'
import PublicChat from './components/PublicChat'
import EditProfile from './pages/EditProfile'

const App = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<SignIn/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/home' element={<HomePage/>}/>
            <Route path='/chat-box' element={<MessageUI/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/setting' element={<Setting/>}/>
            <Route path='/help' element={<Help/>}/>
            <Route path='/edit-profile' element={<EditProfile/>}/>
        </Routes>
    </div>
  )
}

export default App
