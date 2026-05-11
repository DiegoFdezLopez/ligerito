# Ligerito

Aplicación web para gestionar el equipaje de actividades de montaña y larga distancia. Permite crear un inventario personal de artículos, organizarlos en mochilas por actividad, controlar el peso total y compartir configuraciones con la comunidad.

## Stack tecnológico

**Backend**
- Java 21 · Spring Boot 4 · Spring Data JPA / Hibernate · Spring Security
- MySQL 9.0

**Frontend**
- React 19 · Vite · Tailwind CSS

## Arranque rápido

### Requisitos
- Docker Desktop
- Java JDK 21+
- Maven 3.9+ (o usar el wrapper `mvnw` incluido)
- Node.js 18+ (solo para el frontend)

### 1. Arrancar la base de datos

```bash
docker compose up db
```

MySQL arranca en `localhost:3306`. La base de datos `backpack_db` se crea automáticamente.

### 2. Arrancar el backend

```bash
./mvnw spring-boot:run
```

| Servicio | URL |
|---|---|
| API REST | http://localhost:8080 |
| Swagger UI | http://localhost:8080/swagger-ui.html |

### 3. Arrancar el frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend disponible en: http://localhost:5173

## Colección Postman

El archivo `ligerito-api.postman_collection.json` en la raíz del proyecto contiene todos los endpoints de la API listos para importar en Postman (File → Import).

## Estructura del proyecto

```
ligerito/
├── src/main/java/com/proyecto/ligerito/
│   ├── controller/     # Endpoints REST
│   ├── service/        # Lógica de negocio
│   ├── repository/     # Acceso a datos (Spring Data JPA)
│   ├── model/          # Entidades JPA
│   ├── dto/            # Objetos de transferencia de datos
│   ├── exception/      # Excepciones personalizadas
│   └── config/         # Seguridad (Spring Security)
├── src/test/           # Tests unitarios (JUnit 5 + Mockito)
├── frontend/           # Aplicación React
├── ligerito-api.postman_collection.json
├── compose.yaml        # Docker Compose (backend + MySQL)
└── Dockerfile
```

## Funcionalidades principales

- Registro e inicio de sesión de usuarios
- Armario virtual: inventario personal de artículos reutilizables
- Creación y gestión de mochilas por actividad
- Categorización de artículos dentro de cada mochila
- Cálculo automático del peso total y desglose por categorías
- Mochilas públicas: exploración del equipaje de otros usuarios

## Tests

54 tests unitarios sobre la capa de servicios.

```bash
./mvnw test
```

## Autor

Diego Fernández López
