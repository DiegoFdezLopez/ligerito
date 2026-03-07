import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ResumenPesos from './components/ResumenPesos';
import ListaCategorias from './components/ListaCategorias';
import Explorar from './pages/Explorar';
import Login from './pages/login'; 
import Registro from './pages/registro';

function App() {
  const [pantallaActual, setPantallaActual] = useState("principal");
  const [categorias, setCategorias] = useState(["Ropa", "Electrónica"]);

  const [listas, setListas] = useState(() => {
    const guardado = localStorage.getItem("ligerito_listas");
    return guardado ? JSON.parse(guardado) : [{ id: '1', nombre: "Mochila Base", objetos: [], publica: false }];
  });

  const [idListaActiva, setIdListaActiva] = useState(listas[0]?.id || '1');

  const [inventarioGeneral, setInventarioGeneral] = useState(() => {
    const guardado = localStorage.getItem("ligerito_armario");
    return guardado ? JSON.parse(guardado) : [];
  });

  useEffect(() => {
    localStorage.setItem("ligerito_listas", JSON.stringify(listas));
  }, [listas]);

  useEffect(() => {
    localStorage.setItem("ligerito_armario", JSON.stringify(inventarioGeneral));
  }, [inventarioGeneral]);

  const mochilaActiva = listas.find(l => l.id === idListaActiva) || listas[0];

  const añadirCategoria = (nombre) => {
    if (!categorias.includes(nombre)) setCategorias([...categorias, nombre]);
  };

  const crearNuevaLista = (nombre) => {
    const nueva = { id: Date.now().toString(), nombre, objetos: [], publica: false };
    setListas([...listas, nueva]);
    setIdListaActiva(nueva.id);
  };

  const borrarLista = (id) => {
    if (listas.length === 1) return;
    const filtradas = listas.filter(l => l.id !== id);
    setListas(filtradas);
    if (id === idListaActiva) setIdListaActiva(filtradas[0].id);
  };

  const actualizarNombreLista = (nuevoNombre) => {
    setListas(listas.map(l => l.id === idListaActiva ? { ...l, nombre: nuevoNombre } : l));
  };

  const togglePublica = () => {
    setListas(listas.map(l => l.id === idListaActiva ? { ...l, publica: !l.publica } : l));
  };

  const manejarNuevoItem = (datos) => {
    const nuevoItem = { ...datos, id: Date.now(), cant: 1 };
    setListas(listas.map(l => l.id === idListaActiva ? { ...l, objetos: [...l.objetos, nuevoItem] } : l));
    if (!inventarioGeneral.some(i => i.nombre.toLowerCase() === datos.nombre.toLowerCase())) {
      const { cant, ...itemArmario } = nuevoItem;
      setInventarioGeneral([...inventarioGeneral, itemArmario]);
    }
  };

  const cambiarCantidad = (id, incremento) => {
    setListas(listas.map(l => {
      if (l.id === idListaActiva) {
        const nuevos = l.objetos.map(obj => obj.id === id ? { ...obj, cant: obj.cant + incremento } : obj).filter(obj => obj.cant > 0);
        return { ...l, objetos: nuevos };
      }
      return l;
    }));
  };

  const eliminarObjeto = (id) => {
    setListas(listas.map(l => l.id === idListaActiva ? { ...l, objetos: l.objetos.filter(o => o.id !== id) } : l));
  };

  if (pantallaActual === "login") return <Login onLogin={() => setPantallaActual("principal")} onIrARegistro={() => setPantallaActual("registro")} />;
  if (pantallaActual === "registro") return <Registro onRegistro={() => setPantallaActual("principal")} onIrALogin={() => setPantallaActual("login")} />;

  return (
    <div className="flex h-screen bg-white overflow-hidden text-slate-900 font-sans">
      <Sidebar 
        listas={listas} idListaActiva={idListaActiva} onSeleccionarLista={(id) => { setIdListaActiva(id); setPantallaActual("principal"); }}
        onCrearLista={crearNuevaLista} onBorrarLista={borrarLista}
        inventario={inventarioGeneral} onAñadirAlInventario={manejarNuevoItem}
      />
      <div className="flex-1 flex flex-col overflow-y-auto">
        {pantallaActual === "explorar" ? (
          <Explorar onVolver={() => setPantallaActual("principal")} />
        ) : (
          <>
            <Header 
              nombreMochila={mochilaActiva.nombre} esPublica={mochilaActiva.publica} onTogglePublica={togglePublica}
              onActualizarNombre={actualizarNombreLista} onLogout={() => setPantallaActual("login")}
              onIrAExplorar={() => setPantallaActual("explorar")}
            />
            <main className="p-6 max-w-4xl mx-auto w-full">
              <ResumenPesos listaDeObjetos={mochilaActiva.objetos} />
              <ListaCategorias 
                listaDeObjetos={mochilaActiva.objetos} categorias={categorias} onAñadirCategoria={añadirCategoria}
                onCambiarCantidad={cambiarCantidad} onEliminar={eliminarObjeto} onNuevoItem={manejarNuevoItem} 
              />
            </main>
          </>
        )}
      </div>
    </div>
  );
}
export default App;