import React, { useState } from 'react';

export default function ListaCategorias({ listaDeObjetos, categorias, onAñadirCategoria, onCambiarCantidad, onEliminar, onNuevoItem }) {
  const [catEditando, setCatEditando] = useState(null);
  const [nuevaCatNombre, setNuevaCatNombre] = useState("");
  const [mostrandoNuevaCat, setMostrandoNuevaCat] = useState(false);
  const [nuevoItem, setNuevoItem] = useState({ nombre: '', desc: '', peso: '' });

  const manejarGuardarItem = (categoria) => {
    if (!nuevoItem.nombre || !nuevoItem.peso) return;

    onNuevoItem({
      nombre: nuevoItem.nombre,
      peso: parseInt(nuevoItem.peso),
      desc: nuevoItem.desc,
      categoria: categoria
    });

    setNuevoItem({ nombre: '', desc: '', peso: '' });
    setCatEditando(null);
  };

  // Función para capturar el Enter en los inputs del ítem
  const manejarKeyPress = (e, categoria) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Evita que el formulario se recargue
      manejarGuardarItem(categoria);
    }
  };

  return (
    <div className="space-y-3 pb-10">
      {/* 1. Mapeo de categorías existentes */}
      {categorias.map(cat => {
        const objetosCat = listaDeObjetos.filter(obj => obj.categoria === cat);
        const pesoTotalCat = objetosCat.reduce((acc, obj) => acc + (obj.peso * obj.cant), 0);

        return (
          <section key={cat} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
            <div className="bg-slate-50/50 px-4 py-1.5 flex items-center justify-between border-b border-slate-100">
              <div className="flex items-center gap-2">
                <h4 className="font-bold text-slate-700 text-[11px] uppercase tracking-wider">{cat}</h4>
                <button 
                  onClick={() => setCatEditando(cat === catEditando ? null : cat)} 
                  className="text-slate-400 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-lg">add_circle</span>
                </button>
              </div>
              <span className="text-[10px] font-bold text-slate-400">{pesoTotalCat} g</span>
            </div>

            <div className="divide-y divide-slate-50">
              {objetosCat.map(item => (
                <div key={item.id} className="flex items-center px-4 py-1 hover:bg-slate-50/50 group text-xs transition-colors">
                  <div className="flex-1 min-w-0">
                    <span className="font-bold text-slate-700">{item.nombre}</span>
                    {item.desc && (
                      <span className="text-slate-400 italic ml-2 border-l border-slate-200 pl-2 text-[10px]">
                        {item.desc}
                      </span>
                    )}
                  </div>
                  <div className="w-14 text-right font-mono text-slate-400 text-[10px]">{item.peso}g</div>
                  <div className="w-20 flex justify-center items-center gap-2">
                    <button onClick={() => onCambiarCantidad(item.id, -1)} className="text-slate-400 hover:text-blue-600 px-1 cursor-pointer font-bold">-</button>
                    <span className="font-bold w-4 text-center">{item.cant}</span>
                    <button onClick={() => onCambiarCantidad(item.id, 1)} className="text-slate-400 hover:text-blue-600 px-1 cursor-pointer font-bold">+</button>
                  </div>
                  <button onClick={() => onEliminar(item.id)} className="text-slate-200 hover:text-red-500 cursor-pointer ml-2 transition-colors">
                    <span className="material-symbols-outlined text-sm">delete</span>
                  </button>
                </div>
              ))}

              {catEditando === cat && (
                <div className="p-3 bg-blue-50/30 flex flex-col gap-2 border-t border-blue-100 animate-in slide-in-from-top-1">
                  <div className="flex gap-2">
                    <input 
                      autoFocus 
                      placeholder="¿Qué llevas?" 
                      className="flex-1 bg-white border border-slate-200 rounded px-2 py-1 text-xs outline-none focus:border-blue-400" 
                      value={nuevoItem.nombre} 
                      onChange={(e) => setNuevoItem({ ...nuevoItem, nombre: e.target.value })}
                      onKeyDown={(e) => manejarKeyPress(e, cat)} 
                    />
                    <input 
                      placeholder="Gramos" 
                      type="number" 
                      className="w-20 bg-white border border-slate-200 rounded px-2 py-1 text-xs outline-none focus:border-blue-400" 
                      value={nuevoItem.peso} 
                      onChange={(e) => setNuevoItem({ ...nuevoItem, peso: e.target.value })}
                      onKeyDown={(e) => manejarKeyPress(e, cat)} 
                    />
                  </div>
                  <div className="flex gap-2">
                    <input 
                      placeholder="Añadir descripción y pulsa Enter..." 
                      className="flex-1 bg-white border border-slate-200 rounded px-2 py-1 text-[10px] italic outline-none focus:border-blue-400" 
                      value={nuevoItem.desc} 
                      onChange={(e) => setNuevoItem({ ...nuevoItem, desc: e.target.value })}
                      onKeyDown={(e) => manejarKeyPress(e, cat)} // <--- AQUÍ ESTÁ EL ENTER
                    />
                    <button 
                      onClick={() => manejarGuardarItem(cat)} 
                      className="bg-blue-600 text-white rounded px-2 py-1 hover:bg-blue-700 transition-colors flex items-center"
                    >
                      <span className="material-symbols-outlined text-sm">done</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </section>
        );
      })}

      {/* 2. Botón Añadir Categoría */}
      {mostrandoNuevaCat ? (
        <div className="p-2 bg-white border-2 border-dashed border-blue-200 rounded-xl">
          <form 
            onSubmit={(e) => { 
              e.preventDefault(); 
              if (nuevaCatNombre.trim()) { 
                onAñadirCategoria(nuevaCatNombre.trim()); 
                setNuevaCatNombre(""); 
                setMostrandoNuevaCat(false); 
              } 
            }} 
            className="flex gap-2"
          >
            <input 
              autoFocus 
              className="flex-1 px-3 py-1.5 text-xs outline-none text-slate-700" 
              placeholder="Nombre de categoría..." 
              value={nuevaCatNombre} 
              onChange={(e) => setNuevaCatNombre(e.target.value)} 
            />
            <button type="submit" className="text-blue-600 font-bold text-xs px-3">Añadir</button>
            <button type="button" onClick={() => setMostrandoNuevaCat(false)} className="text-slate-400 text-xs px-2">Cancelar</button>
          </form>
        </div>
      ) : (
        <button 
          onClick={() => setMostrandoNuevaCat(true)} 
          className="w-full py-2 border-2 border-dashed border-slate-200 rounded-xl text-slate-400 hover:text-blue-500 hover:border-blue-200 hover:bg-blue-50/30 transition-all flex items-center justify-center gap-2 group cursor-pointer"
        >
          <span className="material-symbols-outlined text-lg group-hover:rotate-90">add_circle</span>
          <span className="text-[10px] font-bold uppercase tracking-widest">Añadir Nueva Categoría</span>
        </button>
      )}
    </div>
  );
}