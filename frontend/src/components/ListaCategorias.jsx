import React from 'react';

export default function ListaCategorias({ listaDeObjetos, onCambiarCantidad, onEliminar, onNuevoItem }) {
  
  // Filtramos los objetos por categoría
  const ropa = listaDeObjetos.filter(obj => obj.categoria === "Ropa");
  const electronica = listaDeObjetos.filter(obj => obj.categoria === "Electrónica");

  // Función para añadir un objeto rápido (usando prompt para simplicidad)
  const manejarAñadir = (cat) => {
    const nombre = prompt(`Nombre del objeto para ${cat}:`);
    const peso = prompt(`Peso en gramos para ${cat}:`);
    const descripcion = prompt(`Descripción (opcional):`);
    
    if (nombre && peso) {
      onNuevoItem({ 
        nombre: nombre, 
        peso: parseInt(peso), 
        desc: descripcion || "",
        categoria: cat 
      });
    }
  };

  // Componente interno para las filas y no repetir código
  const FilaObjeto = ({ item }) => (
    <div className="flex items-center px-4 py-3 border-b border-gray-50 hover:bg-slate-50 transition-colors group">
      {/* Nombre y Descripción en la misma línea */}
      <div className="flex-1 flex items-baseline gap-3 min-w-0">
        <p className="text-sm font-semibold text-gray-700 whitespace-nowrap">
          {item.nombre}
        </p>
        {item.desc && (
          <p className="text-[11px] text-gray-400 truncate italic border-l border-gray-200 pl-3">
            {item.desc}
          </p>
        )}
      </div>
      
      {/* Peso */}
      <div className="w-20 text-right text-sm text-gray-500 font-mono pr-4">
        {item.peso}g
      </div>

      {/* Controles de Cantidad */}
      <div className="w-24 flex justify-center items-center gap-2">
        <button 
          onClick={() => onCambiarCantidad(item.id, -1)}
          className="w-6 h-6 flex items-center justify-center bg-gray-100 rounded hover:bg-gray-200 cursor-pointer text-gray-600 transition-colors"
        >
          -
        </button>
        <span className="text-sm font-bold w-4 text-center text-gray-700">{item.cant}</span>
        <button 
          onClick={() => onCambiarCantidad(item.id, 1)}
          className="w-6 h-6 flex items-center justify-center bg-gray-100 rounded hover:bg-gray-200 cursor-pointer text-gray-600 transition-colors"
        >
          +
        </button>
      </div>

      {/* Botón Eliminar */}
      <div className="w-10 text-right">
        <button 
          onClick={() => onEliminar(item.id)}
          className="text-gray-300 hover:text-red-600 cursor-pointer text-2xl leading-none px-2 transition-colors"
          title="Eliminar objeto"
        >
          &times;
        </button>
      </div>
    </div>
  );

  return (
    <div className="space-y-10 pb-10">
      
      {/* SECCIÓN: ROPA */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-4 flex-1">
            <h4 className="font-bold text-gray-700">Ropa</h4>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>
          <button 
            onClick={() => manejarAñadir("Ropa")}
            className="ml-4 flex items-center gap-1 text-xs font-bold text-blue-500 hover:text-blue-700 transition-colors cursor-pointer"
          >
            <span className="text-lg leading-none">+</span> Añadir Objeto
          </button>
        </div>

        <div className="bg-white border border-gray-100 rounded-lg shadow-sm overflow-hidden">
          {ropa.length > 0 ? (
            ropa.map(item => <FilaObjeto key={item.id} item={item} />)
          ) : (
            <p className="p-4 text-sm text-gray-400 italic">No hay objetos en esta categoría</p>
          )}
        </div>
      </div>

      {/* SECCIÓN: ELECTRÓNICA */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-4 flex-1">
            <h4 className="font-bold text-gray-700">Electrónica</h4>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>
          <button 
            onClick={() => manejarAñadir("Electrónica")}
            className="ml-4 flex items-center gap-1 text-xs font-bold text-blue-500 hover:text-blue-700 transition-colors cursor-pointer"
          >
            <span className="text-lg leading-none">+</span> Añadir Objeto
          </button>
        </div>

        <div className="bg-white border border-gray-100 rounded-lg shadow-sm overflow-hidden">
          {electronica.length > 0 ? (
            electronica.map(item => <FilaObjeto key={item.id} item={item} />)
          ) : (
            <p className="p-4 text-sm text-gray-400 italic">No hay objetos en esta categoría</p>
          )}
        </div>
      </div>

      {/* BOTÓN AÑADIR CATEGORÍA */}
      <div className="pt-4">
        <button 
          className="w-full py-4 border-2 border-dashed border-gray-200 rounded-xl text-gray-400 font-bold text-xs uppercase hover:bg-gray-50 hover:border-gray-300 hover:text-gray-500 transition-all cursor-pointer"
          onClick={() => alert('Función para añadir categoría próximamente')}
        >
          + Añadir Nueva Categoría
        </button>
      </div>

    </div>
  );
}