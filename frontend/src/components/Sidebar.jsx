import React from 'react';

export default function Sidebar() {
  // Datos de ejemplo
  const listasViajes = [
    { id: 1, nombre: "Viaje a Japón", peso: "6.2kg" },
    { id: 2, nombre: "Ruta de la Montaña", peso: "8.9kg" },
    { id: 3, nombre: "Fin de semana Lisboa", peso: "4.1kg" }
  ];

  const misObjetos = [
    { id: 101, nombre: "Mochila 40L", peso: "920g" },
    { id: 102, nombre: "Camiseta Térmica", peso: "140g" },
    { id: 103, nombre: "Cargador Móvil", peso: "280g" }
  ];

  return (
    <div className="w-80 bg-white border-r border-gray-200 h-screen flex flex-col">
      {/* Logo sencillo */}
      <div className="p-5 flex items-center gap-2">
        <span className="material-symbols-outlined text-blue-500">scale</span>
        <h1 className="text-lg font-bold">Ligerito</h1>
      </div>

      {/* Listas de Viajes */}
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

      {/* Inventario de objetos */}
      <div className="p-4 flex-1 overflow-y-auto">
        <h2 className="text-xs font-bold text-gray-400 uppercase mb-3">Inventario</h2>
        <input 
          type="text" 
          placeholder="Buscar..." 
          className="w-full p-2 mb-4 bg-gray-50 border border-gray-200 rounded text-sm outline-none"
        />
        <div className="space-y-2">
          {misObjetos.map((obj) => (
            <div key={obj.id} className="p-2 border border-gray-100 rounded text-sm hover:border-blue-300">
              <div className="flex justify-between">
                <span className="font-medium">{obj.nombre}</span>
                <span className="text-gray-400">{obj.peso}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}