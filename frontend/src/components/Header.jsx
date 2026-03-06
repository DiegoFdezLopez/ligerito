import React from 'react';

export default function Header({ nombreMochila, onLogout }) {
  return (
    <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-100 px-8 flex items-center justify-between sticky top-0 z-10 shrink-0">
      
      {/* 1. Título dinámico de la mochila activa */}
      <div>
        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-0.5">
          Mochila Seleccionada
        </div>
        <h2 className="text-2xl font-black text-slate-800 tracking-tight">
          {nombreMochila}
        </h2>
      </div>

      {/* 2. Acciones y Perfil */}
      <div className="flex items-center gap-4">
        
        {/* Botones de acción rápidos */}
        <div className="flex items-center border-r border-slate-100 pr-4 gap-1">
          <button className="p-2 text-slate-400 hover:text-blue-500 hover:bg-blue-50 rounded-xl transition-all cursor-pointer" title="Compartir lista">
            <span className="material-symbols-outlined text-2xl">share</span>
          </button>
          <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-xl transition-all cursor-pointer" title="Ajustes">
            <span className="material-symbols-outlined text-2xl">settings</span>
          </button>
        </div>
        
        {/* Bloque de Usuario y Logout */}
        <div className="flex items-center gap-3 pl-2">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-slate-800 leading-none">Diego User</p>
            <button 
              onClick={onLogout}
              className="text-[11px] font-bold text-red-400 hover:text-red-600 transition-colors cursor-pointer uppercase tracking-wider"
            >
              Cerrar Sesión
            </button>
          </div>

          {/* Avatar con iniciales o imagen */}
          <div className="h-10 w-10 rounded-xl overflow-hidden border-2 border-white shadow-md ring-1 ring-slate-100">
            <img
              alt="Profile"
              className="w-full h-full object-cover"
              src="https://ui-avatars.com/api/?name=Diego+User&background=1e293b&color=fff" 
            />
          </div>
        </div>

      </div>
    </header>
  );
}