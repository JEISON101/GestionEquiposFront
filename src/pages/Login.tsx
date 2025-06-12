import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {

    const navigate = useNavigate();
    const [correo, setCorreo] = useState<string>("");
    const [contrasena, setContrasena] = useState<string>("");

    const loguear = async(e: React.FormEvent) => {
        e.preventDefault();
        try {    
            const res = await fetch('http://localhost:3333/login',{
                method:'POST',
                headers:{ 'Content-Type':'application/json' },
                body:JSON.stringify({correo, contrasena})
            })
            const data = await res.json();
            
            if(data.valid){
                localStorage.setItem("correo", correo)
                localStorage.setItem("auth", 'true');
                console.log(data.mensaje)
                navigate('/dashboard')
            }else{
                alert(data.mensaje);
            }
        } catch (error) {
            alert('Hubo problemas en el servidor')
        }
    }

  return (
            <div className="min-h-screen bg-gray-200 flex items-center justify-center px-4">
            <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Bienvenido 👋</h2>

                <form onSubmit={loguear}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-semibold mb-2">
                            Correo electrónico
                        </label>
                        <input
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-green-600"
                            type="email"
                            onChange={(e) => setCorreo(e.target.value)}
                            placeholder="tucorreo@ejemplo.com"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-semibold mb-2">
                            Contraseña
                        </label>
                        <input
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-green-600"
                            type="password"
                            onChange={(e) => setContrasena(e.target.value)}
                            placeholder="********"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
                    >
                        Iniciar sesión
                    </button>
                </form>

                <p className="mt-6 text-center text-sm text-gray-600">
                    ¿No tienes cuenta?
                    <a href="" className="text-blue-500 hover:underline font-medium" onClick={() => ('/register')}>Regístrate</a>
                </p>
            </div>
        </div>
  )
}
