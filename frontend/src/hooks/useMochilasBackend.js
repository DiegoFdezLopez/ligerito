import { useState } from "react";
import {
  getMochilas,
  createMochila,
  patchMochila,
  deleteMochila,
} from "../services/apiMochilas";

export const useMochilasBackend = () => {
  const [mochilas, setMochilas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const cargar = async (usuarioId) => {
    setLoading(true);
    setError("");
    try {
      const data = await getMochilas(usuarioId);
      setMochilas(data);
      return data;
    } catch (err) {
      console.error(err);
      setError("No se pudieron cargar las mochilas");
      return [];
    } finally {
      setLoading(false);
    }
  };

  const crear = async (payload) => {
    const creada = await createMochila(payload);
    setMochilas((prev) => [...prev, creada]);
    return creada;
  };

  const actualizar = async (id, cambios) => {
    const actualizada = await patchMochila(id, cambios);
    setMochilas((prev) =>
      prev.map((m) => (m.id === id ? actualizada : m))
    );
    return actualizada;
  };

  const eliminar = async (id) => {
    await deleteMochila(id);
    setMochilas((prev) => prev.filter((m) => m.id !== id));
  };

  return { mochilas, loading, error, cargar, crear, actualizar, eliminar };
};