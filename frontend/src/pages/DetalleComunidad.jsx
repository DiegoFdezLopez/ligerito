import React, { useMemo } from "react";
import ResumenPesos from "../components/ResumenPesos";
import FilaItem from "../components/FilaItem";

export default function DetalleComunidad({ mochila, onVolver }) {
  if (!mochila) return null;

  const detalleObjetos = mochila.detalleObjetos ?? [];

  const categorias = useMemo(() => {
    if (Array.isArray(mochila.categorias) && mochila.categorias.length > 0) {
      return mochila.categorias;
    }
    // fallback: deducir categorías a partir de los items
    return Array.from(
      new Set(detalleObjetos.map((o) => o.categoria).filter(Boolean))
    );
  }, [mochila.categorias, detalleObjetos]);

  const pesoTotalGramos = useMemo(() => {
    return detalleObjetos.reduce(
      (acc, o) => acc + Number(o.peso || 0) * Number(o.cant || 1),
      0
    );
  }, [detalleObjetos]);

  const pesoTotalKg = (pesoTotalGramos / 1000).toFixed(2);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col animate-in slide-in-from-right duration-300">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-8 py-6 flex items-center justify-between sticky top-0 z-10 shadow-sm">
        <div className="flex items-center gap-4">
          <button
            onClick={onVolver}
            className="p-2 hover:bg-slate-100 rounded-full text-slate-400 transition-colors cursor-pointer"
            aria-label="Volver"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>

          <div>
            <h2 className="text-2xl font-black text-slate-800">
              {mochila.titulo}
            </h2>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              Por {mochila.autor}
            </p>
          </div>
        </div>

        <div className="text-right">
          <div className="text-3xl font-black text-blue-600">
            {pesoTotalKg} <span className="text-sm text-slate-400">KG</span>
          </div>
          <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">
            Peso de referencia
          </p>
        </div>
      </header>

      <main className="p-8 max-w-4xl mx-auto w-full space-y-10">
        {/* ✅ Distribución por categoría */}
        <section>
          <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4 ml-1">
            Distribución de peso
          </h3>
          <ResumenPesos listaDeObjetos={detalleObjetos} categorias={categorias} />
        </section>

        {/* Listado */}
        <section className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="bg-slate-50 px-6 py-3 border-b border-slate-200 flex justify-between items-center">
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
              Listado de equipamiento
            </h3>
            <span className="text-[10px] font-bold text-blue-500 bg-blue-50 px-2 py-0.5 rounded-md">
              {detalleObjetos.length} OBJETOS
            </span>
          </div>

          <div className="divide-y divide-slate-100">
            {detalleObjetos.map((item) => (
              <FilaItem key={item.id ?? `${item.nombre}-${item.peso}`} item={item} esLectura />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}