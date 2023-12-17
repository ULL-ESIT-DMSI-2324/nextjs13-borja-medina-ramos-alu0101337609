## Código de /ticket/[id].jsx

- Dicho archivo contiene dos funciones que permitirá dinámicamente seleccionar el ticket correspondiente:

    - La función getTicket toma un "id" único para especificar un problema. Luego, solicita a una dirección web (http://localhost:4000/tickets/${id}) para recopilar todos los detalles vinculados con ese problema. Posteriormente, devuelve estos datos en un formato fácil de entender, similar a un archivo de datos. Respecto al componente TicketDetails, su tarea es recibir información variable de la URL, como el "id" del problema, y emplear la función getTicket para adquirir todos los detalles particulares de ese problema. Una vez que posee estos datos, los muestra directamente en la página web, exponiendo elementos como el título, el autor, el contenido y la prioridad del problema.

## Rutas dinámicas

- El fichero [id].jsx localizado en el directorio /ticket, es comúnmente empleado en Next.js para gestionar rutas dinámicas. El formato [id] denota que esta página puede recibir un parámetro nombrado id a través de la URL, siendo el nombre del archivo [id].jsx. Cuando un usuario visita una URL como /ticket/123, Next.js interpretará que 123 es el valor del parámetro id y ejecutará el archivo [id].jsx. En este fichero, puedes usar el valor de id para llevar a cabo acciones concretas, como cargar los detalles del ticket correspondiente a ese id desde una fuente de datos (por ejemplo, una base de datos o una API) y presentar dicha información en la página.

## Instalacion y uso de Json-Server

### Paso 1: Instalación de json-server
Nos debemos asegurar de tener Node.js y npm instalados. Luego, ejecutamos el siguiente comando para instalar `json-server` globalmente:
```bash
npm install -g json-server
```

### Paso 2: Crear el archivo `bd.json`
Creamos un archivo llamado `bd.json` en la carpeta `_data` con los datos proporcionados, es decir los tickets.

### Paso 3: Iniciar json-server
En la terminal, navegamos a la carpeta principal del proyecto y ejecuta el siguiente comando:
```bash
json-server --watch _data/bd.json --port 4000
```
Esto iniciará `json-server` y observará el archivo `bd.json` en la carpeta `_data`. El servidor estará disponible en `http://localhost:4000`.

### Paso 4: Acceder a los datos
Ahora, podemos acceder (como con las funciones de la ruta dinamica) a los datos utilizando solicitudes HTTP, por ejemplo, una solicitud GET a `http://localhost:4000/tickets` para obtener la lista de tickets (que es lo que deseamos en primera instancia)