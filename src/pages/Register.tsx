import { useState } from "react"
import { useNavigate } from "react-router-dom"


export const Register:React.FC = () => {
    const navigate=useNavigate();

    const [nombre,setNombre] = useState<string>('');
    const [correo,setCorreo] = useState<string>('');
    const [direccion,setDireccion] = useState<string>('');
    const [telefono,setTelfono] = useState<number>();
    const [contrasena,setContraena] = useState<string>('');

    const registrar = async (e:React.FormEvent)=>{
        e.preventDefault();
        try{
            const res = await fetch ('http://localhost:3333/register',{
                method: 'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({nombre, correo, direccion, telefono, contrasena})
            })
            const data =  await res.json();
            console.log(data.mensaje)
            if(data.mensaje='USUARIO REGISTRADO EXITOSAMENTE'){
                localStorage.setItem("correo",correo);
                localStorage.setItem("auth","true");
                navigate('/dashboard');
                
            }
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
  } 
