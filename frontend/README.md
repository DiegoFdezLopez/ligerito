# Ligerito — Frontend

Frontend de la aplicación Ligerito, desarrollado con React, Vite y Tailwind CSS.

## Requisitos

- Node.js 18+

## Instalación y arranque

```bash
npm install
npm run dev
```

Frontend disponible en: http://localhost:5173

## Build para producción

```bash
npm run build
```

Los archivos compilados se generan en la carpeta `dist/`.

## Estructura

```
src/
├── pages/       # Pantallas principales (Landing, Login, Registro, Explorar...)
├── components/  # Componentes reutilizables (Sidebar, Header, FilaItem...)
├── hooks/       # Hooks personalizados (useMochilas, useArmario...)
├── services/    # Llamadas HTTP al backend (apiAuth, apiMochilas...)
└── utils/       # Utilidades auxiliares (exportación PDF)
```
