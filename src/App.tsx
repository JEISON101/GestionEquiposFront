import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Login } from './pages/Login'
import Dashboard from './pages/Dashboard'
import { Register } from './pages/Register'
import { Equipos } from './pages/Equipos'
import { Presidentes } from './pages/Presidentes'
import { useEffect, useState } from 'react'
import { NotLogin } from './components/NotLogin'

function App() {
    const [authStorage, setAuthStorage] = useState(false);
  useEffect(() => {
    const auth = localStorage.getItem('auth')
    if (auth) {
      setAuthStorage(true)
    }
  }, [])

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/dashboard' element={authStorage?<Dashboard/>:<NotLogin/>}/>
        <Route path="/equipos" element={authStorage?<Equipos/>:<NotLogin/>}/>
        <Route path="/presidentes" element={authStorage?<Presidentes/>:<NotLogin/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
