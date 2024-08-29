import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignIn from './pages/signIn'
import SignUp from './pages/SignUp'
<<<<<<< HEAD
import HomePage from './pages/HomePage'
=======
import MessageUI from './pages/messageUi'
>>>>>>> dc79a4ca3986a164994855e39f14d3ae3e335f73

const App = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<SignIn/>}/>
            <Route path='/signup' element={<SignUp/>}/>
<<<<<<< HEAD
            <Route path='/home' element={<HomePage/>}/>
=======
            <Route path='/message' element={<MessageUI/>}/>
>>>>>>> dc79a4ca3986a164994855e39f14d3ae3e335f73
        </Routes>
    </div>
  )
}

export default App