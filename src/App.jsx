import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignIn from './pages/signIn'
import SignUp from './pages/SignUp'
import MessageUI from './pages/messageUi'

const App = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<SignIn/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/message' element={<MessageUI/>}/>
        </Routes>
    </div>
  )
}

export default App