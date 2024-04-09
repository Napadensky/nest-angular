````markdown
# Documentación de Proyectos Angular y NestJS

En este documento se proporciona información sobre cómo configurar, instalar y ejecutar los proyectos de Angular y NestJS, así como los requisitos previos necesarios para su funcionamiento.

## Requisitos Previos

- Node.js y npm instalados en tu sistema.
- MongoDB instalado y en funcionamiento en tu sistema.

````
## Clonar el Repositorio

📕. Clona el repositorio que contiene ambos proyectos:
   ```bash
   git clone https://github.com/Napadensky/nest-angular.git
   ````
   Esto creará una carpeta llamada `nest-angular` que contiene las carpetas `frontend` y `backend`.

## Instalación de Dependencias

1. Navega a la carpeta del proyecto frontend (Angular):


   ```bash
   cd nest-angular/frontend
   ````


2. Instala las dependencias del proyecto frontend:

   ```bash
   npm install
   ```

3. Navega a la carpeta del proyecto backend (NestJS):

   ```bash
   cd ../backend
   ```

4. Instala las dependencias del proyecto backend:

   ```bash
   npm install
   ```

## Ejecución

1. Inicia el servidor de MongoDB si no está en funcionamiento:

   ```bash
   mongod
   ```

2. Inicia el servidor de desarrollo del proyecto frontend (Angular):

   ```bash
   cd ../frontend
   npm start
   ```

3. Inicia el servidor de desarrollo del proyecto backend (NestJS):

   ```bash
   cd ../backend
   npm run start:dev
   ```

Una vez que ambos servidores estén en funcionamiento, podrás acceder a la aplicación frontend en tu navegador y utilizarla junto con el backend.

## Notas

- Asegúrate de que el puerto utilizado por el servidor de backend (NestJS) no esté ocupado por otros servicios en tu sistema.
- Puedes ajustar la configuración de la aplicación, como el puerto del servidor o la conexión a la base de datos, en los archivos de configuración correspondientes de cada proyecto.

Con estos pasos, podrás tener tu entorno de desarrollo listo y funcionando con los proyectos Angular y NestJS.

----
### ENDPOITS del proyecto
----


## Crear Usuario

### Método
- POST

### URL
- `http://localhost:3000/api/users`

### Ejemplo de Datos a Enviar (JSON)
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "age": 30,
  "gender": "male",
  "pregnancy": false,
  "birthdate": "1992-04-15",
  "phoneNumber": "+543813321546"
}
```

---

## Obtener Usuario por ID

### Método
- GET

### URL
- `http://localhost:3000/api/users/:id`

### Ejemplo de ID de Usuario
- `605c65a03cc14c17d4a31aeb`

Con este ejemplo, puedes ver cómo enviar datos para crear un usuario mediante el método POST y cómo obtener un usuario por su ID utilizando el método GET. Asegúrate de proporcionar los datos necesarios en el cuerpo de la solicitud para crear un usuario y de incluir el ID del usuario en la URL para obtenerlo por su ID.