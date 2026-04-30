import React, { useState } from "react";

export default function ModalEnlace({ itemId, enlaceInicial, onGuardar, onCerrar }) {
  const [tempEnlace, setTempEnlace] = useState(enlaceInicial ?? "");
  const urlCompleta = tempEnlace.startsWith("http") ? tempEnlace : `https://${tempEnlace}`;

  return (
    <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-[4px] z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-[2.5rem] p-8 w-full max-w-sm shadow-2xl animate-in zoom-in-95 duration-200 text-center relative border border-slate-100">
        <div className="bg-blue-50 w-16 h-16 rounded-3xl flex items-center justify-center mx-auto mb-4">
          <span className="material-symbols-outlined text-blue-600 text-3xl">link</span>
        </div>

        <h3 className="text-xl font-black text-slate-800 mb-2">Enlace de producto</h3>
        <p className="text-xs text-slate-400 mb-8 px-4 font-medium leading-relaxed">
          Pega la URL del artículo para consultarlo o comprarlo más tarde.
        </p>

        <input
          autoFocus
          type="url"
          placeholder="https://..."
          value={tempEnlace}
          onChange={(e) => setTempEnlace(e.target.value)}
          className="w-full border border-slate-200 rounded-2xl px-5 py-3.5 text-sm outline-none focus:border-blue-400 mb-6 bg-slate-50 transition-all focus:bg-white"
        />

        <div className="flex flex-col gap-3">
          {tempEnlace && tempEnlace.includes(".") && (
            <a
              href={urlCompleta}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-blue-600 text-white py-3.5 rounded-2xl text-xs font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-xl shadow-blue-200 active:scale-95"
            >
              <span className="material-symbols-outlined text-sm">open_in_new</span> Visitar Tienda
            </a>
          )}
          <div className="flex gap-3 pt-2">
            <button
              onClick={onCerrar}
              className="flex-1 py-3 text-xs font-bold text-slate-400 hover:text-slate-600 transition-colors uppercase tracking-widest"
            >
              Cancelar
            </button>
            <button
              onClick={() => { onGuardar(itemId, tempEnlace); onCerrar(); }}
              className="flex-1 bg-slate-800 text-white py-3.5 rounded-2xl text-xs font-bold hover:bg-slate-900 transition-all active:scale-95 shadow-lg shadow-slate-200"
            >
              {tempEnlace ? "Actualizar" : "Guardar"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
