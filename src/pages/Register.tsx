import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Register: React.FC = () => {
  const navigate = useNavigate();

  const [nombre, setNombre] = useState<string>('');
  const [correo, setCorreo] = useState<string>('');
  const [direccion, setDireccion] = useState<string>('');
  const [telefono, setTelefono] = useState<number>(); 
  const [contrasena, setContrasena] = useState<string>('');

  const registrar = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:3333/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre, correo, direccion, telefono, contrasena })
      });
      const data = await res.json();
      console.log(data);
      if (data.mensaje === 'USUARIO REGISTRADO EXITOSAMENTE') {
        localStorage.setItem("correo", correo);
        localStorage.setItem("auth", "true");
        navigate('/dashboard');
      } else {
        alert(data.mensaje);
      }
    } catch (error) {
      alert('Error en el registro');
    }
  }

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Regístrate
        </h2>
        <form onSubmit={registrar}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Nombre
            </label>
            <input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200"
              type="text"
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Nombre"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Correo
            </label>
            <input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200"
              type="email"
              onChange={(e) => setCorreo(e.target.value)}
              placeholder="Correo@gmail.com"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Dirección
            </label>
            <input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200"
              type="text"
              onChange={(e) => setDireccion(e.target.value)}
              placeholder="Dirección"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Teléfono
            </label>
            <input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200"
              type="text"
              onChange={(e) => setTelefono(parseInt(e.target.value))}
              placeholder="+57..."
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Contraseña
            </label>
            <input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200"
              type="password"
              onChange={(e) => setContrasena(e.target.value)}
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
        <a href="/" className="text-blue-600 mt-4 block text-center">
          Iniciar sesión
        </a>
      </div>
    </div>
  );
}
