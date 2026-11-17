import React from 'react'
import {BrowserRouter, Routes, Route} from  'react-router'
import LoginPage from "./pages/loginpage/LoginPage"
import Dashboard from './pages/dashboard/Dashboard'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App