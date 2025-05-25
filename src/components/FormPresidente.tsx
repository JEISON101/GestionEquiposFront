import { useState, useEffect } from "react";
import type { Equipo } from "../pages/Equipos";
import type { Presidente } from "../pages/Presidentes";


export const FormularioPresidente: React.FC <any> = ({ presidente,setFormPres}) => {
  const [equpDis, setEquiDis] = useState<Equipo[]>([]);
  const [dni, setDni] = useState<number>();
  const [nombre, setNombre] = useState<string>("");
  const [id_equipo, setIdEquipo] = useState<number>();
 
  useEffect(()=>{
    if (presidente !== undefined){
        setDni(presidente.dni);
        setNombre(presidente.nombre);
        setIdEquipo(presidente.id_equipo);
    }
  },[presidente]);

  const fetchEquipos = async () => {
      await fetch("http://localhost:3333/equipos_disponibles")
    .then((response) => response.json())
      .then((data) => {
        setEquiDis(data.datos);
        console.log(data);
      });
  };
  
  const postorPutPresidente = async (e: React.FormEvent) => {
    e.preventDefault();

    const metodo = presidente === undefined ? "POST" : "PUT";
    const url =
      presidente === undefined
        ? "http://localhost:3333/presidente"
        : `http://localhost:3333/presidente/${presidente.dni}`;
    await fetch(url, {
      method: metodo,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre,dni,id_equipo}),
    });

    setNombre("");
    setDni(0);
    setIdEquipo(undefined);
    console.log("Presidente guardado");
    setFormPres(false);
  };

  useEffect(() => {
    fetchEquipos();
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md mt-10">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          {"Agregar Libro Editar Libro"}
        </h2>
        <form onSubmit={postorPutPresidente}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              DNI
            </label>
            <input
              type="number"
              name="dni"
              value={dni}
              onChange={(e) => setDni(parseInt(e.target.value))}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              NOMBRE
            </label>
            <input
              type="text"
              name="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Editorial
            </label>
            <select
              name="editorial_id"
              value={id_equipo}
              onChange={(e) => setIdEquipo(parseInt(e.target.value))}
            
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Seleccione un equipo</option>
              {equpDis.length > 0 ? (
                equpDis.map((equip) => (
                  <option key={equip.id_equipo} value={equip.id_equipo}>
                    {equip.nombre}
                  </option>
                ))
              ) : (
                <option>NO HAY EQUIPOS DISPONIBLES</option>
              )}
            </select>
          </div>
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="w-md bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition m-1"
            >
              {presidente === undefined ? "Agregar" : "Actualizar"}
            </button>

            <button
              className="w-md bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition m-1"
              onClick={() => {setFormPres(false);
              }}
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
