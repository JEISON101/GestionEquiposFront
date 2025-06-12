import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Login } from './pages/Login'
import Dashboard from './pages/Dashboard'
import { Register } from './pages/Register'
import { Equipos } from './pages/Equipos'
import { Presidentes } from './pages/Presidentes'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path="/equipos" element={<Equipos/>}/>
        <Route path="/presidentes" element={<Presidentes/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
