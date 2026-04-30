import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import ResumenPesos from "./components/ResumenPesos";
import ListaCategorias from "./components/ListaCategorias";
import Explorar from "./pages/Explorar";
import DetalleComunidad from "./pages/DetalleComunidad";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import { useMochilas } from "./hooks/useMochilas";
import { useArmario } from "./hooks/useArmario";

function App() {
  const [pantallaActual, setPantallaActual] = useState("login");
  const [mochilaSeleccionada, setMochilaSeleccionada] = useState(null);
  const [usuarioActual, setUsuarioActual] = useState(null);

  const { armario: armarioBackend, cargar: cargarArmario, crear: crearArmario, eliminar: eliminarArmario } = useArmario();

  const manejarNuevoItemReal = async (datos) => {
    // Caso 1: ya viene del armario backend (por ejemplo desde el Sidebar)
    if (datos.itemArmarioId || datos.id) {
      manejarNuevoItem(datos);
      return;
    }

    // Caso 2: item nuevo creado desde una mochila
    try {
      const itemCreado = await crearArmario({
        nombre: datos.nombre,
        peso: Number(datos.peso),
        descripcion: datos.descripcion ?? "",
        enlace: datos.enlace ?? "",
        usuarioId: usuarioActual.id,
      });

      manejarNuevoItem({
        ...itemCreado,
        itemArmarioId: itemCreado.id,
        categoria: datos.categoria,
      });
    } catch (error) {
      console.error("Error creando item en backend:", error);
    }
  };

  const eliminarItemArmarioBackend = async (id) => {
    try {
      await eliminarArmario(id);
      eliminarItemInventario(id);
    } catch (err) {
      console.error(err);
      alert("No se pudo eliminar el item del armario en el servidor");
    }
  };

  const {
    actualizarDescripcionItem,
    listas,
    mochilaActiva,
    idListaActiva,
    setIdListaActiva,
    inventarioGeneral,
    crearNuevaLista,
    borrarLista,
    actualizarNombreLista,
    togglePublica,
    manejarNuevoItem,
    cambiarCantidad,
    eliminarObjeto,
    añadirCategoria,
    eliminarCategoria,
    actualizarEnlaceItem,
    actualizarPesoItem,
    eliminarItemInventario,
  } = useMochilas(cargarArmario);

  // Gestión de sesión
  if (!usuarioActual) {
    if (pantallaActual === "registro") {
      return (
        <Registro
          onRegistro={() => setPantallaActual("login")}
          onIrALogin={() => setPantallaActual("login")}
        />
      );
    }

    return (
      <Login
        onLogin={(usuario) => {
          setUsuarioActual(usuario);
          cargarArmario();
          setPantallaActual("principal");
        }}
        onIrARegistro={() => setPantallaActual("registro")}
      />
    );
  }

  return (
    <div className="flex h-screen bg-white overflow-hidden text-slate-900 font-sans">
      <Sidebar
        listas={listas}
        idListaActiva={idListaActiva}
        onSeleccionarLista={(id) => {
          setIdListaActiva(id);
          setPantallaActual("principal");
        }}
        onCrearLista={crearNuevaLista}
        onBorrarLista={borrarLista}
        inventario={armarioBackend}
        onAñadirAlInventario={manejarNuevoItemReal}
        onEliminarDelInventario={eliminarItemArmarioBackend}
      />

      <div className="flex-1 flex flex-col overflow-y-auto bg-slate-50">
        {/* COMUNIDAD */}
        {pantallaActual === "explorar" && (
          <Explorar
            onVolver={() => setPantallaActual("principal")}
            onVerDetalle={(m) => {
              setMochilaSeleccionada(m);
              setPantallaActual("detalle-comunidad");
            }}
          />
        )}

        {/* DETALLE DE MOCHILA AJENA */}
        {pantallaActual === "detalle-comunidad" && (
          <DetalleComunidad
            mochila={mochilaSeleccionada}
            onVolver={() => setPantallaActual("explorar")}
          />
        )}

        {/* VISTA PRINCIPAL (Nuestra Mochila) */}
        {pantallaActual === "principal" && (
          <>
            <Header
              nombreMochila={mochilaActiva.nombre}
              esPublica={mochilaActiva.publica}
              onTogglePublica={togglePublica}
              onActualizarNombre={actualizarNombreLista}
              onLogout={() => {
                setUsuarioActual(null);
                setPantallaActual("login");
              }}
              onIrAExplorar={() => setPantallaActual("explorar")}
            />

            <main className="p-6 max-w-4xl mx-auto w-full">
              <ResumenPesos
                listaDeObjetos={mochilaActiva.objetos}
                categorias={mochilaActiva.categorias || []}
              />
              <ListaCategorias
                listaDeObjetos={mochilaActiva.objetos}
                categorias={mochilaActiva.categorias || []}
                onAñadirCategoria={añadirCategoria}
                onEliminarCategoria={eliminarCategoria}
                onCambiarCantidad={cambiarCantidad}
                onEliminar={eliminarObjeto}
                onNuevoItem={manejarNuevoItemReal}
                onActualizarEnlace={actualizarEnlaceItem} 
                onActualizarPeso={actualizarPesoItem}
                onActualizarDescripcion={actualizarDescripcionItem}
              />
            </main>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
