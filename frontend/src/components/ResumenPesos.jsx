import React from 'react';

export default function ResumenPesos({ listaDeObjetos = [], categorias = [] }) {
  
  let pesoTotalGramos = 0;
  listaDeObjetos.forEach(obj => {
    pesoTotalGramos += (Number(obj.peso) * Number(obj.cant || 1));
  });

  const pesoTotalKg = (pesoTotalGramos / 1000).toFixed(2);

  // Si no hay categorías (porque borraste la lista o es nueva), se muestra esto
  if (categorias.length === 0) {
    return (
      <div style={{ marginBottom: '40px' }}>
        <h3 className="text-xs font-bold uppercase text-slate-400 mb-4">Distribución de Peso</h3>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center">
          <p className="text-slate-400 text-sm italic">Crea una categoría para ver la distribución</p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ marginBottom: '40px' }}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xs font-bold uppercase text-slate-400">Distribución de Peso</h3>
        <div className="text-2xl font-bold text-slate-800">
          {pesoTotalKg} <span className="text-sm text-slate-400">KG</span>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <div className="space-y-5">
          {categorias.map((cat, index) => {
            const itemsDeCat = listaDeObjetos.filter(obj => obj.categoria === cat);
            let pesoCatGramos = 0;
            itemsDeCat.forEach(item => { pesoCatGramos += (item.peso * item.cant); });

            const porcentaje = pesoTotalGramos > 0 ? (pesoCatGramos / pesoTotalGramos) * 100 : 0;
            const pesoCatKg = (pesoCatGramos / 1000).toFixed(1);

            return (
              <div key={index}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-semibold text-slate-600">{cat}</span>
                  <span className="text-slate-400">{pesoCatKg}kg ({Math.round(porcentaje)}%)</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full">
                  <div className="bg-blue-500 h-2 rounded-full transition-all duration-300" style={{ width: `${porcentaje}%` }}></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}