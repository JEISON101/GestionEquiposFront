import { BrowserRouter, Route, Routes } from "react-router-dom"
import { NavBar } from "../components/NavBar"

export const Dashboard : React.FC = () => {
  return (
    <BrowserRouter>
    <NavBar/>
        <Routes>
            <Route path="/equipos"/>
            <Route path="/presidentes"/>
        </Routes>
    </BrowserRouter>
  )
}

export default Dashboard
