const BASE = "http://localhost:8080/auth";

export const login = async (email, password) => {
  const res = await fetch(`${BASE}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    if (res.status === 401) throw new Error("Email o contraseña incorrectos.");
    if (res.status === 400) throw new Error("Datos de acceso no válidos.");
    throw new Error("Ha ocurrido un error al iniciar sesión.");
  }

  return res.json();
};
