import React from "react";

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 w-full py-8 mt-auto">
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <img src="/LogoAzul.png" alt="Ligerito logo" className="w-7 h-7 object-contain" />
            <span className="text-xl font-bold text-blue-900">Ligerito</span>
          </div>
          <p className="font-['Plus_Jakarta_Sans'] text-xs uppercase tracking-widest text-slate-400">
            © 2026 Ligerito. Creado para los ultraligeros o los apasionados de la organización.
          </p>
        </div>
      </div>
    </footer>
  );
}
