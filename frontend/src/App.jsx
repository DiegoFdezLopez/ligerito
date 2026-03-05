import React, { useState } from 'react';
import './index.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ResumenPesos from './components/ResumenPesos';
import ListaCategorias from './components/ListaCategorias';

function App() {
  // 1. ESTADO: Lo que llevas en la mochila actualmente
  const [objetosMochila, setObjetosMochila] = useState([
    { id: 1, nombre: "Camiseta Merino", desc: "Capa base color gris", peso: 150, cant: 1, categoria: "Ropa" },
    { id: 2, nombre: "Chaqueta Plumas", desc: "Marca Patagonia 800 cuins", peso: 280, cant: 1, categoria: "Ropa" },
  ]);

  // 2. ESTADO: Tu "armario" o inventario global
  const [inventarioGeneral, setInventarioGeneral] = useState([
    { id: 1, nombre: "Camiseta Merino", desc: "Capa base color gris", peso: 150, categoria: "Ropa" },
    { id: 2, nombre: "Chaqueta Plumas", desc: "Marca Patagonia 800 cuins", peso: 280, categoria: "Ropa" },
    { id: 3, nombre: "Cámara Fotos", desc: "Sony a6400 con lente 16-50", peso: 650, categoria: "Electrónica" }
  ]);

  // --- LÓGICA DE NEGOCIO ---

  // Añadir objeto (desde los "prompts" de las categorías o desde el inventario)
  const manejarNuevoItem = (datos) => {
    const nuevoId = Date.now();
    
    // Formateamos el objeto para la mochila
    const nuevoObjetoMochila = {
      ...datos,
      id: nuevoId,
      cant: datos.cant || 1,
      desc: datos.desc || ""
    };

    // Actualizamos la mochila
    setObjetosMochila([...objetosMochila, nuevoObjetoMochila]);

    // Comprobamos si el nombre ya existe en el armario global para no duplicar
    const existeEnInventario = inventarioGeneral.some(
      item => item.nombre.toLowerCase() === datos.nombre.toLowerCase()
    );

    if (!existeEnInventario) {
      // Guardamos en el inventario (sin la propiedad 'cant')
      const { cant, ...itemParaInventario } = nuevoObjetoMochila;
      setInventarioGeneral([...inventarioGeneral, itemParaInventario]);
    }
  };

  // Cambiar cantidad (+ o -) y borrar si llega a 0
  const cambiarCantidad = (id, incremento) => {
    const nuevaLista = objetosMochila.map(obj => {
      if (obj.id === id) {
        return { ...obj, cant: obj.cant + incremento };
      }
      return obj;
    }).filter(obj => obj.cant > 0);

    setObjetosMochila(nuevaLista);
  };

  // Eliminar objeto directamente con la X
  const eliminarObjeto = (id) => {
    const listaFiltrada = objetosMochila.filter(obj => obj.id !== id);
    setObjetosMochila(listaFiltrada);
  };

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden text-slate-900">
      {/* Pasamos el inventario y la función de añadir al Sidebar */}
      <Sidebar 
        inventario={inventarioGeneral} 
        onAñadir={manejarNuevoItem} 
      />

      <div className="flex-1 flex flex-col overflow-y-auto">
        <Header />

        <main className="p-8 max-w-4xl mx-auto w-full">
          {/* El resumen calcula el peso total basándose en los objetos de la mochila */}
          <ResumenPesos listaDeObjetos={objetosMochila} />

          {/* La lista de categorías permite gestionar los objetos de la mochila */}
          <ListaCategorias
            listaDeObjetos={objetosMochila}
            onCambiarCantidad={cambiarCantidad}
            onEliminar={eliminarObjeto}
            onNuevoItem={manejarNuevoItem} 
          />

          <footer className="mt-10 py-6 border-t border-gray-200 text-center text-[10px] text-gray-400 font-bold uppercase tracking-widest">
            © 2026 Ligerito - Control de peso para viajes
          </footer>
        </main>
      </div>
    </div>
  );
}

export default App;