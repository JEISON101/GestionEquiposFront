import { useEffect, useState } from "react";
import { FormularioEquipo } from "../components/FormEquipo";

export interface Equipo {
  id_equipo: number;
  nombre: string;
  anio_fundacion: number;
}


export const Equipos: React.FC = () => {
  const [equipos, setEquipo] = useState<Equipo[]>([]);
  const [formequip, setFormequip] = useState<boolean>(false);
  const [equipo, setEquip] = useState<Equipo>();
  const getEquipos = async () => {
    await fetch("http://localhost:3333/equipo")
      .then((response) => response.json())
      .then((data) => {
        setEquipo(data.datos);
        console.log(data);
      });
  };
  const eliminarEquipo = async (id: number) => {
    await fetch(`http://localhost:3333/equipo/${id}`, { method: "DELETE" })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };

  useEffect(() => {
    getEquipos();
  }, []);

  return (
    <div>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Listado de Equipos
          </h2>
          <button
            className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition cursor-pointer"
            onClick={() => setFormequip(true)}
          >
            Añadir Equipo
          </button>
        </div>

        <div className="overflow-x-auto bg-white shadow rounded-lg">
          <table className="min-w-full text-left text-sm text-gray-800">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="px-6 py-3 font-medium uppercase">NOMBRE</th>
                <th className="px-6 py-3 font-medium uppercase">
                  AÑO FUNDACION
                </th>
                <th className="px-6 py-3 font-medium uppercase">ACCIONES</th>
              </tr>
            </thead>
            <tbody>
              {equipos.length > 0 ? (
                equipos.map((equi) => (
                  <tr
                    key={equi.id_equipo}
                    className="border-b border-gray-200 hover:bg-gray-50"
                  >
                    <td className="px-6 py-4">{equi.nombre}</td>
                    <td className="px-6 py-4">{equi.anio_fundacion}</td>
                    <td className="px-6 py-4 space-x-2">
                      <button
                        className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-1 rounded-md cursor-pointer"
                        onClick={() => {setEquip(equi); 
                          setFormequip(true)}}
                      >
                        Editar
                      </button>
                      <button
                        className="bg-red-600 hover:bg-red-500 text-white px-3 py-1 rounded-md cursor-pointer"
                        onClick={() => eliminarEquipo(equi.id_equipo)}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={3}
                    className="px-6 py-4 text-center text-gray-800 text-lg"
                  >
                    No hay Equipos disponibles
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      {formequip && <FormularioEquipo equipo={equipo} setFormequip={setFormequip} ></FormularioEquipo>}
      
    </div>
  );
};
