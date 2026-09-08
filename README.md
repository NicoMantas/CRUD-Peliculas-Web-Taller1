# Taller 1 - CRUD de películas con NestJS + Vue + JWT

Este proyecto incluye un backend con NestJS, Prisma + SQLite, autenticación JWT y un frontend con Vue para consumir la API.

## Tecnologías usadas

- NestJS
- Prisma 7
- SQLite
- Vue 3
- Vue Router
- JWT

## Estructura del proyecto

- `peliculas-backend/` — API REST con NestJS
- `peliculas-frontend/` — aplicación en Vue

## Requisitos

- Node.js 18 o superior
- npm

## Configuración inicial

1. Ir al backend y crear el archivo `.env` a partir del ejemplo:

```bash
cd peliculas-backend
cp .env.example .env
```

2. Verificar que el contenido sea:

```env
DATABASE_URL=""
FRONTEND_URL=""
JWT_SECRET=""
```

3. Instalar dependencias del backend:

```bash
npm install
```

4. Generar Prisma Client y aplicar migraciones:

```bash
npx prisma generate
npx prisma migrate dev --name init
```

5. Iniciar el backend:

```bash
npm run start:dev
```

6. En otra terminal, instalar dependencias del frontend:

```bash
cd ../peliculas-frontend
npm install
```

7. Levantar el frontend:

```bash
npm run dev
```

## Endpoints principales del backend

### Auth

- `POST /auth/register` — registro de usuario
- `POST /auth/login` — inicio de sesión
- `GET /auth/profile` — perfil del usuario autenticado

### Películas

- `GET /pelicula` — listar películas con búsqueda y paginación
- `GET /pelicula/:id` — obtener una película por ID
- `POST /pelicula` — crear película
- `PATCH /pelicula/:id` — actualizar película
- `DELETE /pelicula/:id` — eliminar película

## Flujo de autenticación

- El usuario se registra o inicia sesión.
- La API devuelve un JWT.
- El frontend guarda el token en `localStorage` como `jwt_token`.
- Para rutas protegidas, la app envía el header:

```http
Authorization: Bearer <token>
```

## Funcionalidades del frontend

- Registro e inicio de sesión
- Persistencia del token
- Protección de rutas con Vue Router
- Cierre de sesión
- Listado de películas
- Búsqueda por nombre
- Paginación
- Crear, editar y eliminar películas

## Datos de prueba

Se puede crear un usuario con:

```json
{
  "nombre": "Ana",
  "email": "ana@test.com",
  "password": "123456"
}
```

Luego hacer login con:

```json
{
  "email": "ana@test.com",
  "password": "123456"
}
```

## Observación

Este proyecto usa SQLite para la base de datos local y se ejecuta en puerto `3000` para el backend y `5173` para el frontend.

## Integrantes

- Nicolas Mantilla Gelves
- David Galvis Garcia