import React from 'react';

export default function ListaCategorias() {
  // Datos de ejemplo para la categoría de Ropa
  const itemsRopa = [
    { id: 1, nombre: "Camiseta Merino", desc: "Capa base gris", peso: "150g", cant: 3 },
    { id: 2, nombre: "Chaqueta Plumas", desc: "Para el frío", peso: "280g", cant: 1 }
  ];

  // Datos de ejemplo para la categoría de Electrónica
  const itemsElectronica = [
    { id: 3, nombre: "Cámara Fotos", desc: "Con lente 35mm", peso: "650g", cant: 1 },
    { id: 4, nombre: "Adaptador Enchufe", desc: "Carga rápida", peso: "180g", cant: 1 }
  ];

  return (
    <div className="space-y-10 pb-10">
      
      {/* SECCIÓN: ROPA */}
      <div>
        <div className="flex items-center gap-4 mb-3">
          <h4 className="font-bold text-gray-700">Ropa</h4>
          <button className="text-[10px] bg-gray-200 px-2 py-1 rounded font-bold uppercase text-gray-500 hover:bg-blue-100 hover:text-blue-600">
            + Añadir Objeto
          </button>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        {/* Cabecera de la "tabla" */}
        <div className="flex px-4 py-2 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
          <div className="flex-1">Nombre y Descripción</div>
          <div className="w-24 text-center">Peso</div>
          <div className="w-24 text-center">Cant.</div>
          <div className="w-8"></div>
        </div>

        {/* Lista de objetos de ropa */}
        <div className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm">
          {itemsRopa.map((item) => (
            <div key={item.id} className="flex items-center px-4 py-3 border-b border-gray-50 hover:bg-gray-50">
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-700">{item.nombre}</p>
                <p className="text-xs text-gray-400">{item.desc}</p>
              </div>
              <div className="w-24 text-center text-sm text-gray-600">{item.peso}</div>
              <div className="w-24 flex justify-center items-center gap-2">
                <button className="w-6 h-6 bg-gray-100 rounded text-gray-500 hover:bg-gray-200">-</button>
                <span className="text-sm font-bold">{item.cant}</span>
                <button className="w-6 h-6 bg-gray-100 rounded text-gray-500 hover:bg-gray-200">+</button>
              </div>
              <div className="w-8 text-right">
                <button className="text-gray-300 hover:text-red-500 transition-colors">
                  <span className="material-symbols-outlined text-sm">close</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECCIÓN: ELECTRÓNICA */}
      <div>
        <div className="flex items-center gap-4 mb-3">
          <h4 className="font-bold text-gray-700">Electrónica</h4>
          <button className="text-[10px] bg-gray-200 px-2 py-1 rounded font-bold uppercase text-gray-500 hover:bg-blue-100 hover:text-blue-600">
            + Añadir Objeto
          </button>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        <div className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm">
          {itemsElectronica.map((item) => (
            <div key={item.id} className="flex items-center px-4 py-3 border-b border-gray-50 hover:bg-gray-50">
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-700">{item.nombre}</p>
                <p className="text-xs text-gray-400">{item.desc}</p>
              </div>
              <div className="w-24 text-center text-sm text-gray-600">{item.peso}</div>
              <div className="w-24 flex justify-center items-center gap-2">
                <button className="w-6 h-6 bg-gray-100 rounded text-gray-500">-</button>
                <span className="text-sm font-bold">{item.cant}</span>
                <button className="w-6 h-6 bg-gray-100 rounded text-gray-500">+</button>
              </div>
              <div className="w-8 text-right">
                <button className="text-gray-300 hover:text-red-500">
                  <span className="material-symbols-outlined text-sm">close</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BOTÓN: AÑADIR NUEVA CATEGORÍA */}
      <button className="w-full py-4 border-2 border-dashed border-gray-200 rounded-xl text-gray-400 font-bold text-xs uppercase hover:bg-gray-50 hover:border-gray-300 transition-all">
        + Añadir Nueva Categoría
      </button>

    </div>
  );
}