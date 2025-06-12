import { useState } from "react"
import { useNavigate } from "react-router-dom"

const register : React.FC = () => {
    const [nombre,serNombre] = useState("");
    const [correo,setCorreo] = useState("");
    const [direccion,setDireccion] = useState("");
    const [telefono,setTelefono] = useState("");
    const [contrasena,setContrasena] = useState("");
    const navigate = useNavigate();
    }

    const registrar = async (e: React.FormEvent)=>{
        e.preventDefault();
        try{
            const res = await fetch('')
        }

    }

            
  return (
        <div className="min-h-screen bg-gray-200 flex items-center justify-center px-4">
            <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Registrate</h2>

                <form onSubmit={registrar}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-semibold mb-2">
                            Correo electrónico
                        </label>
                        <input
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200"
                            type="email"
                            onChange={(e)=>{(e.target.value)}}
                            placeholder="tucorreo@ejemplo.com"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-semibold mb-2">
                            Contraseña
                        </label>
                        <input
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200"
                            type="password"
                            onChange={(e)=>{(e.target.value)}}
                            placeholder="********"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
                    >
                        Registrarse
                    </button>
                </form>
                <a href="/" className="text-blue-600">Iniciar sesión</a>
            </div>
        </div>
  )
  export default register;