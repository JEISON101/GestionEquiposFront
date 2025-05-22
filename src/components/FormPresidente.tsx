import { useState } from "react"
import type { Equipo } from "../pages/Equipos";

export const FormularioPresidente:React.FC = () => {
    const [equpDis, setEquiDis] = useState<Equipo[]>([])

    const [dni, setDni] = useState<number>();
    const [nombre, setNombre] = useState<string>("");
    const [id_equipo, setIdEquipo] = useState<number>()

    return(
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md mt-10">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">
                    {"Agregar Libro Editar Libro"}
                </h2>
                <form onSubmit={}>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            DNI
                        </label>
                        <input
                            type="text"
                            name="titulo"
                            value={dni}
                            onChange={(e) => (e.target.value)}
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
                            name="autor"
                            value={nombre}
                            onChange={(e) => (e.target.value)}
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
                            onChange={(e) => setEditorial_id(parseInt(e.target.value))}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Seleccione una editorial</option>
                            {equpDis.length > 0 ? (
                                equpDis.map((equip, index) => (
                                    <option key={index} value={equip.id_editorial}>
                                        {equip.nombre}
                                    </option>
                                ))) : (
                                <option>NO HAY EDITORIALES DIPONIBLES</option>
                            )}
                        </select>
                    </div>
                    <div className="flex justify-between items-center">
                        <button
                            type="submit"
                            className="w-md bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition m-1"
                        >
                            { "Agregar Actualizar"}
                        </button>

                        <button
                            className="w-md bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition m-1"
                            onClick={() => {}}
                        >
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}