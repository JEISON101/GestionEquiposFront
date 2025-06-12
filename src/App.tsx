import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Equipos } from './pages/Equipos'
import './App.css'
import { Presidentes } from './pages/Presidentes'
import { NavBar } from './components/NavBar'
import { Login } from './pages/Login'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/equipos' element={<Equipos/>}/>
        <Route path='/presidentes' element={<Presidentes/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
