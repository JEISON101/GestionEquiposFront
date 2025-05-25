import { useState } from "react";

export interface EquipoProp {
  id_equipo: number;
  nombre: string;
  anio_fundacion: number;
}

export const FormularioEquipo: React.FC<any> = ({equipo,setFormequip}) => {
  const [nombre, setNombre] = useState<string>("");
  const [anio_f, setAnioF] = useState<number>();
  const PutOrPost = () => {};
  setNombre(equipo.nombre);
  setAnioF(equipo.anio_fundacion);
  console.log(nombre, anio_f);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md mt-10">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          {equipo ? `Editar Equipo` : "Agregar Equipo"}
        </h2>
        <form onSubmit={() => PutOrPost}>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nombre
            </label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Año Fundacionn
            </label>
            <input
              type="number"
              value={anio_f}
              onChange={(e) => setAnioF(parseInt(e.target.value))}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="w-md bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition m-1"
            >
              {equipo ? "Editar" : "Agregar"}
            </button>

            <button
              className="w-md bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition m-1"
              onClick={() => {setFormequip(false)}}            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
