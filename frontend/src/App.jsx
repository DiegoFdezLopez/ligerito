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

function App() {
  const [pantallaActual, setPantallaActual] = useState("login");
  const [mochilaSeleccionada, setMochilaSeleccionada] = useState(null);
  const [usuarioActual, setUsuarioActual] = useState(null);

  const [armarioBackend, setArmarioBackend] = useState([]);
  const [loadingArmario, setLoadingArmario] = useState(false);
  const [errorArmario, setErrorArmario] = useState("");

  const cargarArmario = async () => {
    setErrorArmario("");
    setLoadingArmario(true);

    try {
      const response = await fetch("http://localhost:8080/api/armario");

      if (!response.ok) {
        setErrorArmario("Error al cargar los datos del armario");
        return;
      }

      const data = await response.json();
      console.log(data);
      setArmarioBackend(data);
    } catch (err) {
      console.error(err);
      setErrorArmario("No se pudo conectar con el servidor");
    } finally {
      setLoadingArmario(false);
    }
  };

  const eliminarItemArmarioBackend = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/api/armario/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("No se pudo eliminar el item del armario");
      }

      setArmarioBackend((prev) => prev.filter((item) => item.id !== id));

      eliminarItemInventario(id);
    } catch (err) {
      console.error(err);
      alert("No se pudo eliminar el item del armario en el servidor");
    }
  };

  const manejarNuevoItemReal = async (datos) => {
    // Caso 1: ya viene del armario backend (por ejemplo desde el Sidebar)
    if (datos.itemArmarioId || datos.id) {
      manejarNuevoItem(datos);
      return;
    }

    // Caso 2: item nuevo creado desde una mochila
    try {
      const response = await fetch("http://localhost:8080/api/armario", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: datos.nombre,
          peso: Number(datos.peso),
          descripcion: datos.descripcion ?? "",
          enlace: datos.enlace ?? "",
          usuarioId: usuarioActual.id,
        }),
      });

      if (!response.ok) {
        throw new Error("No se pudo crear el item en el armario");
      }

      const itemCreado = await response.json();

      // Actualizar el armario real que usa el Sidebar
      setArmarioBackend((prev) => [...prev, itemCreado]);

      // Añadir el item a la mochila local con referencia al item base real
      manejarNuevoItem({
        ...itemCreado,
        itemArmarioId: itemCreado.id,
        categoria: datos.categoria,
      });
    } catch (error) {
      console.error("Error creando item en backend:", error);
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
  } = useMochilas();

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
