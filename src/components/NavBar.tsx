import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

export const NavBar:React.FC = () => {
    const navigate = useNavigate()
        const [coreoStorage, setCorreoStorage] = useState('Usuario sin correo');
        const [nombreStorage, setNombreStorage] = useState("Sin nombre");
        useEffect(()=>{
            const name = localStorage.getItem("nombre");
            const email = localStorage.getItem("correo");
            if(email && name){
                setCorreoStorage(email);
                setNombreStorage(name);
            }
        },[])

        const cerrarSesion = ()=> {
            localStorage.clear()
            navigate('/')
        }
    return(
        <nav className="bg-gray-800 text-white py-3">
            <div className="px-2 flex justify-between items-center">
                <div className="flex items-center">
                    <a className="hover:bg-gray-600 px-3 py-2 rounded transition cursor-pointer text-lg" onClick={()=>{cerrarSesion}}>📤 Salir</a>
                    <div className="grid">
                        <p className="text-2xl px-3 py-2" onClick={()=>{navigate('/')}}><b>{nombreStorage}</b></p>
                        <a className="px-3 py-2 rounded text-lg" onClick={()=>{cerrarSesion}}>{coreoStorage}</a>
                    </div>
                </div>
                <div className="space-x-4">
                    <a className="hover:bg-gray-600 px-3 py-2 rounded transition cursor-pointer text-lg" onClick={()=>{navigate('/equipos')}}>Equipos</a>
                    <a className="hover:bg-gray-600 px-3 py-2 rounded transition cursor-pointer text-lg" onClick={()=>{navigate('/presidentes')}}>Presidentes</a>
                </div>
            </div>
        </nav>
    )
}