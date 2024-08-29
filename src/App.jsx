import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignIn from './pages/signIn'
import SignUp from './pages/SignUp'

const App = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<SignIn/>}/>
            <Route path='/signup' element={<SignUp/>}/>
        </Routes>
    </div>
  )
}

export default App