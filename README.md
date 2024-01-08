### Menú de Carga y la componente Suspense

#### Archivo: `Tickets.jsx`

```jsx
import TicketList from "./TicketList";
import { Suspense } from "react";
import Loading from "../loading";

export default function Tickets() {
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p><small>Actualmente abiertos.</small></p>
        </div>
      </nav>
      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </main>
  )
}
```

- `import TicketList from "./TicketList";`: Importa el componente `TicketList` desde el archivo `TicketList.jsx`.

- `import { Suspense } from "react";`: Importa el componente `Suspense` de React. Se utiliza para gestionar la carga de componentes de manera diferida, mostrando un componente de carga mientras el componente principal se carga.

- `import Loading from "../loading";`: Importa el componente `Loading` desde el archivo `loading.jsx`.

- `export default function Tickets() { ... }`: Define el componente funcional `Tickets` que se exporta por defecto.

- `<main>`: Crea un elemento `main` en el DOM, que generalmente se utiliza para el contenido principal de la página.

- `<nav>`: Define un elemento `nav` para la navegación dentro de la página.

- `<h2>Tickets</h2>`: Muestra un encabezado de nivel 2 con el texto "Tickets".

- `<p><small>Actualmente abiertos.</small></p>`: Muestra un párrafo con un texto adicional indicando que son tickets actualmente abiertos.

- `<Suspense fallback={<Loading />}>`: Utiliza el componente `Suspense` para gestionar la carga del componente `TicketList`. Si la carga lleva tiempo, se muestra el componente `<Loading />` como retroceso (`fallback`).

- `<TicketList />`: Incluye el componente `TicketList` dentro del bloque de `Suspense`.

#### Archivo: `Loading.jsx`

```jsx
import React from 'react'

export default function Loading() {
  return (
    <main className='text-center'> 
        <h2 className='text-primary '>Cargando...</h2>
        <p>Por favor, espere.</p>
    </main>
  )
}
```

- `export default function Loading() { ... }`: Define el componente funcional `Loading` que se exporta por defecto.

- `<main className='text-center'>`: Crea un elemento `main` en el DOM con la clase CSS `text-center`, centrando el contenido de texto.

- `<h2 className='text-primary '>Cargando...</h2>`: Muestra un encabezado de nivel 2 con el texto "Cargando..." y le aplica la clase `text-primary`.

- `<p>Por favor, espere.</p>`: Muestra un párrafo indicando al usuario que espere mientras se carga el contenido.