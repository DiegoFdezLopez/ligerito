import React, { useState } from 'react'; // Faltaba el useState

export default function Sidebar({ inventario = [], onAñadir }) {
  const [busqueda, setBusqueda] = useState("");

  const listasViajes = [
    { id: 1, nombre: "Viaje a Japón", peso: "6.2kg" },
    { id: 2, nombre: "Ruta de la Montaña", peso: "8.9kg" },
    { id: 3, nombre: "Fin de semana Lisboa", peso: "4.1kg" }
  ];

  const filtrados = inventario.filter(item =>
    item.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="w-120 bg-white border-r border-gray-200 h-screen flex flex-col shrink-0">
      <div className="p-5 flex items-center gap-2">
        <span className="material-symbols-outlined text-blue-500">scale</span>
        <h1 className="text-lg font-bold">Ligerito</h1>
      </div>

      <div className="p-4">
        <h2 className="text-xs font-bold text-gray-400 uppercase mb-3">Mis Listas</h2>
        <div className="space-y-2">
          {listasViajes.map((viaje) => (
            <div key={viaje.id} className="flex justify-between text-sm p-2 hover:bg-gray-100 rounded cursor-pointer">
              <span>{viaje.nombre}</span>
              <span className="text-gray-400">{viaje.peso}</span>
            </div>
          ))}
        </div>
      </div>

      <hr className="my-2 border-gray-100" />

      <div className="p-4 flex-1 overflow-y-auto">
        <h2 className="text-xs font-bold text-gray-400 uppercase mb-3">Mi Inventario</h2>

        <input
          type="text"
          placeholder="Buscar..."
          className="w-full p-2 mb-4 bg-gray-50 border border-gray-200 rounded text-sm outline-none"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
        <div className="space-y-2">
          {filtrados.map((obj) => (
            <div key={obj.id} className="p-2 border border-gray-100 rounded-sm group hover:border-blue-200 hover:bg-blue-50/30 transition-all cursor-default">
              <div className="flex justify-between items-center gap-2">

                {/* Contenedor de Texto: Nombre + Desc (en una línea) */}
                <div className="flex-1 min-w-0 flex items-baseline gap-2">
                  <span className="font-medium text-gray-700 text-sm whitespace-nowrap">
                    {obj.nombre}
                  </span>
                  {obj.desc && (
                    <span className="text-[10px] text-gray-400 truncate italic">
                      {obj.desc}
                    </span>
                  )}
                </div>

                {/* Peso y Botón */}
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-[10px] text-gray-400 font-mono bg-gray-50 px-1 rounded">
                    {obj.peso}g
                  </span>
                  <button
                    onClick={() => onAñadir(obj)}
                    className="hidden group-hover:block bg-blue-500 text-white text-[9px] px-2 py-1 rounded-sm uppercase font-bold hover:bg-blue-600 transition-colors cursor-pointer"
                  >
                    +
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}