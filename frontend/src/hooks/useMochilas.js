import { useState, useEffect } from "react";

const uid = () =>
  globalThis.crypto?.randomUUID?.() ??
  `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;

// Datos iniciales
const inicialMochilas = JSON.parse(localStorage.getItem("ligerito_listas")) ?? [
  {
    id: "1",
    nombre: "Mochila Base",
    objetos: [],
    categorias: ["Ropa", "Cocina"],
    publica: false,
  },
];

const inicialArmario =
  JSON.parse(localStorage.getItem("ligerito_armario")) ?? [];

export const useMochilas = () => {
  const [listas, setListas] = useState(inicialMochilas);
  const [inventarioGeneral, setInventarioGeneral] = useState(inicialArmario);

  const [idListaActiva, setIdListaActiva] = useState(
    listas.length > 0 ? listas[0].id : null,
  );

  // Persistencia automática
  useEffect(() => {
    localStorage.setItem("ligerito_listas", JSON.stringify(listas));
  }, [listas]);

  useEffect(() => {
    localStorage.setItem("ligerito_armario", JSON.stringify(inventarioGeneral));
  }, [inventarioGeneral]);

  const mochilaActiva = listas.find((l) => l.id === idListaActiva) || {
    id: null,
    nombre: "Sin selección",
    objetos: [],
    categorias: [],
    publica: false,
  };

  // --- LÓGICA ---

  const patchItemArmario = async (itemArmarioId, cambios) => {
    const response = await fetch(
      `http://localhost:8080/api/armario/${itemArmarioId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cambios),
      },
    );

    if (!response.ok) {
      throw new Error("No se pudo actualizar el item de armario");
    }

    return await response.json();
  };

  const crearNuevaLista = (nombre) => {
    const nueva = {
      id: uid(),
      nombre,
      objetos: [],
      categorias: [],
      publica: false,
    };

    setListas((prev) => [...prev, nueva]);
    setIdListaActiva(nueva.id);
  };

  const borrarLista = (id) => {
    setListas((prev) => {
      const filtradas = prev.filter((l) => l.id !== id);
      if (id === idListaActiva) {
        setIdListaActiva(filtradas.length > 0 ? filtradas[0].id : null);
      }
      return filtradas;
    });
  };

  const actualizarNombreLista = (nuevoNombre) => {
    setListas((prev) =>
      prev.map((l) =>
        l.id === idListaActiva ? { ...l, nombre: nuevoNombre } : l,
      ),
    );
  };

  const togglePublica = () => {
    setListas((prev) =>
      prev.map((l) =>
        l.id === idListaActiva ? { ...l, publica: !l.publica } : l,
      ),
    );
  };

  const manejarNuevoItem = (datos) => {
    if (!idListaActiva) return;

    // 1) Añadir/incrementar en mochila activa
    setListas((prevListas) =>
      prevListas.map((l) => {
        if (l.id !== idListaActiva) return l;

        const existe = l.objetos.some(
          (obj) =>
            obj.nombre.toLowerCase() === datos.nombre.toLowerCase() &&
            obj.categoria === datos.categoria,
        );

        if (existe) {
          return {
            ...l,
            objetos: l.objetos.map((obj) =>
              obj.nombre.toLowerCase() === datos.nombre.toLowerCase() &&
              obj.categoria === datos.categoria
                ? { ...obj, cant: obj.cant + 1 }
                : obj,
            ),
          };
        }

        const nuevo = {
          ...datos,
          itemArmarioId: datos.itemArmarioId ?? datos.id ?? null,
          id: uid(),
          cant: 1,
        };
        return { ...l, objetos: [...l.objetos, nuevo] };
      }),
    );

    // 2) Añadir al armario si no existe (por nombre)
    setInventarioGeneral((prevInv) => {
      const yaExiste = prevInv.some(
        (i) => i.nombre.toLowerCase() === datos.nombre.toLowerCase(),
      );
      if (yaExiste) return prevInv;

      return [...prevInv, { ...datos, id: uid() }];
    });
  };

  const cambiarCantidad = (id, incremento) => {
    setListas((prev) =>
      prev.map((l) => {
        if (l.id !== idListaActiva) return l;
        const nuevos = l.objetos
          .map((o) => (o.id === id ? { ...o, cant: o.cant + incremento } : o))
          .filter((o) => o.cant > 0);
        return { ...l, objetos: nuevos };
      }),
    );
  };

  const eliminarObjeto = (id) => {
    setListas((prev) =>
      prev.map((l) =>
        l.id === idListaActiva
          ? { ...l, objetos: l.objetos.filter((o) => o.id !== id) }
          : l,
      ),
    );
  };

  const eliminarItemInventario = (idArmario) => {
    // Buscar el item en el inventario para obtener su nombre
    const item = inventarioGeneral.find((i) => i.id === idArmario);
    const nombreKey = (item?.nombre ?? "").toLowerCase().trim();

    // 1) Eliminar del inventario general
    setInventarioGeneral((prev) => prev.filter((i) => i.id !== idArmario));

    // 2) Eliminar de TODAS las listas donde exista (por nombre)
    if (!nombreKey) return;

    setListas((prev) =>
      prev.map((l) => ({
        ...l,
        objetos: l.objetos.filter(
          (o) => (o.nombre ?? "").toLowerCase().trim() !== nombreKey,
        ),
      })),
    );
  };

  const añadirCategoria = (nombreCat) => {
    if (!idListaActiva) return;

    setListas((prev) =>
      prev.map((l) => {
        if (l.id !== idListaActiva) return l;
        const cats = l.categorias || [];
        if (cats.includes(nombreCat)) return l;
        return { ...l, categorias: [...cats, nombreCat] };
      }),
    );
  };

  const eliminarCategoria = (nombre) => {
    if (!idListaActiva) return;

    setListas((prev) =>
      prev.map((l) =>
        l.id === idListaActiva
          ? {
              ...l,
              categorias: (l.categorias || []).filter((c) => c !== nombre),
            }
          : l,
      ),
    );
  };

  const actualizarEnlaceItem = async (idItem, nuevoEnlace) => {
    const enlace = (nuevoEnlace ?? "").toString();

    // 1) Actualiza en la mochila activa para que la UI responda al instante
    setListas((prev) =>
      prev.map((l) => {
        if (l.id !== idListaActiva) return l;
        return {
          ...l,
          objetos: l.objetos.map((obj) =>
            obj.id === idItem ? { ...obj, enlace } : obj,
          ),
        };
      }),
    );

    // 2) Buscar el objeto actual dentro de la mochila
    const objActual = mochilaActiva.objetos.find((o) => o.id === idItem);
    if (!objActual) return;

    // 3) Si tiene itemArmarioId, parcheamos backend
    if (objActual.itemArmarioId) {
      try {
        await patchItemArmario(objActual.itemArmarioId, { enlace });
      } catch (error) {
        console.error("Error actualizando enlace en backend:", error);
      }
      return;
    }

    // 4) Fallback temporal: si aún no tiene itemArmarioId, actualizamos armario local por nombre
    const nombreKey = objActual.nombre?.toLowerCase().trim();
    if (!nombreKey) return;

    setInventarioGeneral((prevInv) =>
      prevInv.map((i) =>
        i.nombre.toLowerCase().trim() === nombreKey ? { ...i, enlace } : i,
      ),
    );
  };

  // EDITAR PESO EN MOCHILA -> REFLEJAR EN ARMARIO
  const actualizarPesoItem = async (idItem, nuevoPeso) => {
    const pesoNum = Number(nuevoPeso);
    if (!Number.isFinite(pesoNum) || pesoNum < 0) return;

    // 1) Actualiza en la mochila activa para que la UI responda al instante
    setListas((prev) =>
      prev.map((l) => {
        if (l.id !== idListaActiva) return l;
        return {
          ...l,
          objetos: l.objetos.map((obj) =>
            obj.id === idItem ? { ...obj, peso: pesoNum } : obj,
          ),
        };
      }),
    );

    // 2) Buscar el objeto actual dentro de la mochila
    const objActual = mochilaActiva.objetos.find((o) => o.id === idItem);
    if (!objActual) return;

    // 3) Si ya tiene referencia real al ItemArmario del backend, parcheamos backend
    if (objActual.itemArmarioId) {
      try {
        await patchItemArmario(objActual.itemArmarioId, { peso: pesoNum });
      } catch (error) {
        console.error("Error actualizando peso en backend:", error);
      }
      return;
    }

    // 4) Fallback temporal: si aún no tiene itemArmarioId, actualizamos armario local por nombre
    const nombreKey = objActual.nombre?.toLowerCase().trim();
    if (!nombreKey) return;

    setInventarioGeneral((prevInv) =>
      prevInv.map((i) =>
        i.nombre.toLowerCase().trim() === nombreKey
          ? { ...i, peso: pesoNum }
          : i,
      ),
    );
  };

  const actualizarDescripcionItem = async (idItem, nuevaDescripcion) => {
    const descripcion = (nuevaDescripcion ?? "").toString();

    // 1) Actualiza en la mochila activa para que la UI responda al instante
    setListas((prev) =>
      prev.map((l) => {
        if (l.id !== idListaActiva) return l;
        return {
          ...l,
          objetos: l.objetos.map((obj) =>
            obj.id === idItem ? { ...obj, descripcion } : obj,
          ),
        };
      }),
    );

    // 2) Buscar el objeto actual dentro de la mochila
    const objActual = mochilaActiva.objetos.find((o) => o.id === idItem);
    if (!objActual) return;

    // 3) Si tiene itemArmarioId, parcheamos backend
    if (objActual.itemArmarioId) {
      try {
        await patchItemArmario(objActual.itemArmarioId, { descripcion });
      } catch (error) {
        console.error("Error actualizando descripción en backend:", error);
      }
      return;
    }

    // 4) Fallback temporal: si aún no tiene itemArmarioId, actualizamos armario local por nombre
    const nombreKey = objActual.nombre?.toLowerCase().trim();
    if (!nombreKey) return;

    setInventarioGeneral((prevInv) =>
      prevInv.map((i) =>
        i.nombre.toLowerCase().trim() === nombreKey ? { ...i, descripcion } : i,
      ),
    );
  };

  return {
    actualizarDescripcionItem,
    actualizarEnlaceItem,
    actualizarNombreLista,
    actualizarPesoItem,
    añadirCategoria,
    borrarLista,
    cambiarCantidad,
    crearNuevaLista,
    eliminarCategoria,
    eliminarItemInventario,
    eliminarObjeto,
    idListaActiva,
    inventarioGeneral,
    listas,
    manejarNuevoItem,
    mochilaActiva,
    setIdListaActiva,
    togglePublica,
  };
};
