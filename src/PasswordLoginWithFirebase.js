import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import RegisterAndLogin from './RegisterAndLogin'
import HomeScreen from './Home'
import './PasswordLoginWithFirebase.css';

import './PasswordLoginWithFirebase.css';

const PasswordLoginWithFirebase = () => {
  return (
    <BrowserRouter>
        <div>
            <Routes>
                <Route path='/' element={<RegisterAndLogin/>}/>
                <Route path='/home' element={<HomeScreen/>}/>
            </Routes>
        </div>
    </BrowserRouter>
  )
}

export default PasswordLoginWithFirebase