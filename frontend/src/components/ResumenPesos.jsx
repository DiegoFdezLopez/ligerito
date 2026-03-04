import React from 'react';

// Lo llamamos ResumenPesos como me has pedido
export default function ResumenPesos() {
  return (
    <div style={{ marginBottom: '40px' }}>
      {/* Título de la sección y el total */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xs font-bold uppercase text-slate-400">
          Distribución de Peso
        </h3>
        <div className="text-2xl font-bold text-slate-800">
          6.22 <span className="text-sm text-slate-400">KG</span>
        </div>
      </div>

      {/* Caja blanca con los detalles */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <div className="space-y-5">
          
          {/* Fila para Ropa */}
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="font-semibold text-slate-600">Ropa</span>
              <span className="text-slate-400">3.2kg (51%)</span>
            </div>
            <div className="w-full bg-slate-100 h-2 rounded-full">
              <div 
                className="bg-blue-500 h-2 rounded-full" 
                style={{ width: '51%' }}
              ></div>
            </div>
          </div>

          {/* Fila para Electrónica */}
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="font-semibold text-slate-600">Electrónica</span>
              <span className="text-slate-400">1.8kg (29%)</span>
            </div>
            <div className="w-full bg-slate-100 h-2 rounded-full">
              <div 
                className="bg-blue-400 h-2 rounded-full" 
                style={{ width: '29%' }}
              ></div>
            </div>
          </div>

          {/* Fila para Higiene */}
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="font-semibold text-slate-600">Higiene</span>
              <span className="text-slate-400">0.5kg (8%)</span>
            </div>
            <div className="w-full bg-slate-100 h-2 rounded-full">
              <div 
                className="bg-blue-300 h-2 rounded-full" 
                style={{ width: '8%' }}
              ></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}