import { useEffect, useState } from "react";
import { FormularioPresidente } from "../components/FormPresidente";

export interface Presidente{
    dni:number;
    nombre:string;
    id_equipo?:number
}

export const Presidentes: React.FC = () => {
    const [presidentes, setPresidentes] = useState<Presidente[]>([])
    const [formPres, setFormPres] = useState<boolean>(false)

    const getPresidentes = async() => {
        await fetch('http://localhost:3333/presidentes')
        .then(response => response.json())
        .then(data => {
            setPresidentes(data.datos)
        })
    }

    useEffect(()=>{
        getPresidentes()
    },[presidentes])

    return (
        <div>
            <div className="max-w-4xl mx-auto px-4 py-8">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">Listado de Presidentes</h2>
                    <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition cursor-pointer" onClick={()=> setFormPres(true)}>
                        Añadir Presidente
                    </button>
                </div>

                <div className="overflow-x-auto bg-white shadow rounded-lg">
                    <table className="min-w-full text-left text-sm text-gray-800">
                        <thead className="bg-gray-800 text-white">
                            <tr>
                                <th className="px-6 py-3 font-medium uppercase">DNI</th>
                                <th className="px-6 py-3 font-medium uppercase">NOMBRE</th>
                                <th className="px-6 py-3 font-medium uppercase">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {presidentes.length > 0 ? (
                                presidentes.map((presi, index) => (
                                    <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                                        <td className="px-6 py-4">{presi.dni}</td>
                                        <td className="px-6 py-4">{presi.nombre}</td>
                                        <td className="px-6 py-4 space-x-2">
                                            <button className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-1 rounded-md cursor-pointer">
                                                Editar
                                            </button>
                                            <button className="bg-red-600 hover:bg-red-500 text-white px-3 py-1 rounded-md cursor-pointer">
                                                Eliminar
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={3} className="px-6 py-4 text-center text-gray-800 text-lg">
                                        No hay presidentes disponibles
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            { formPres && <FormularioPresidente/> }
        </div>
    )
}