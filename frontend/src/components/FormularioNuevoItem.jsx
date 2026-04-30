import React, { useState } from "react";

export default function FormularioNuevoItem({ categoria, onGuardar, onCancelar }) {
  const [nuevoItem, setNuevoItem] = useState({ nombre: "", descripcion: "", peso: "" });

  const guardar = () => {
    if (!nuevoItem.nombre || !nuevoItem.peso) return;
    onGuardar({
      nombre: nuevoItem.nombre,
      peso: parseInt(nuevoItem.peso),
      descripcion: nuevoItem.descripcion,
      categoria,
    });
    onCancelar();
  };

  const manejarKeyDown = (e) => {
    if (e.key === "Enter") { e.preventDefault(); guardar(); }
  };

  return (
    <div className="p-4 bg-blue-50/30 space-y-3 animate-in slide-in-from-top-2 duration-200">
      <div className="flex gap-2">
        <input
          autoFocus
          placeholder="¿Qué añades?"
          className="flex-1 bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs outline-none focus:border-blue-400 shadow-sm"
          value={nuevoItem.nombre}
          onChange={(e) => setNuevoItem({ ...nuevoItem, nombre: e.target.value })}
          onKeyDown={manejarKeyDown}
        />
        <input
          placeholder="Gramos"
          type="number"
          className="w-24 bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs outline-none focus:border-blue-400 shadow-sm"
          value={nuevoItem.peso}
          onChange={(e) => setNuevoItem({ ...nuevoItem, peso: e.target.value })}
          onKeyDown={manejarKeyDown}
        />
      </div>
      <div className="flex gap-2">
        <input
          placeholder="Descripción opcional..."
          className="flex-1 bg-white border border-slate-200 rounded-xl px-3 py-2 text-[10px] italic outline-none focus:border-blue-400 shadow-sm"
          value={nuevoItem.descripcion}
          onChange={(e) => setNuevoItem({ ...nuevoItem, descripcion: e.target.value })}
          onKeyDown={manejarKeyDown}
        />
        <button
          onClick={guardar}
          className="bg-blue-600 text-white rounded-xl px-4 py-2 hover:bg-blue-700 transition-all active:scale-95 shadow-md shadow-blue-100"
        >
          <span className="material-symbols-outlined text-sm">done</span>
        </button>
      </div>
    </div>
  );
}
