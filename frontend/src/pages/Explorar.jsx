import React from 'react';

export default function Explorar({ onVolver }) {
  const mochilasPublicas = [
    { id: 101, autor: "Alex Walker", titulo: "Camino de Santiago", peso: "6.2", items: 24, cat: "Hiking" },
    { id: 102, autor: "Elena Travel", titulo: "Sudeste Asiático", peso: "8.5", items: 42, cat: "Backpacking" },
  ];

  return (
    <div className="p-10 max-w-5xl mx-auto w-full animate-in fade-in duration-500">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h2 className="text-3xl font-black text-slate-800 tracking-tight">Comunidad</h2>
          <p className="text-slate-500 mt-1">Inspírate en las listas de otros viajeros.</p>
        </div>
        <button onClick={onVolver} className="px-4 py-2 bg-white border border-slate-200 rounded-xl font-bold text-slate-600 hover:bg-slate-50 cursor-pointer shadow-sm">
          Volver
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mochilasPublicas.map((m) => (
          <div key={m.id} className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all group">
             <span className="text-[10px] font-black uppercase tracking-widest text-blue-500 bg-blue-50 px-3 py-1 rounded-full">{m.cat}</span>
             <h3 className="text-xl font-bold text-slate-800 mt-4">{m.titulo}</h3>
             <p className="text-sm text-slate-400 mb-6">por {m.autor}</p>
             <div className="flex justify-between items-end border-t border-slate-50 pt-4">
                <div className="text-2xl font-black text-slate-800">{m.peso} <span className="text-xs text-slate-400">KG</span></div>
                <button className="bg-slate-800 text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition-all font-bold text-sm cursor-pointer">Clonar</button>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
}