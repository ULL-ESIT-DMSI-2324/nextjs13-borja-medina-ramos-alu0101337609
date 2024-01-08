### Componente de Página No Encontrada en React

# Página 404 personalizada.
El archivo `not-found.jsx` contiene un componente de React diseñado para manejar el escenario de error 404, indicando que la página solicitada no ha sido encontrada. Aquí explicamos cada parte del código:

#### Importaciones
```jsx
import React from 'react'
import Link from 'next/link'
```
- Importamos la biblioteca React y el componente `Link` de Next.js para facilitar la creación de enlaces entre páginas como se ha seguido haciendo en lecciones pasadas.

#### Componente `NotFound`
```jsx
export default function NotFound() {
  return (
    <main className='text-center'>
      <h2 className='text-3xl'>Se ha producido un problema.</h2>
      <p>No se ha encontrado el sitio que estabas buscando.</p>
      <p>Para volver al menú principal, clickea sobre <Link href='/'>Menú principal</Link></p>
    </main>
  )
}
```
- Formamos un mensaje de error  para los usuarios cuando se encuentra un error 404, es decir que la ruta que han seguido no se encuentra en el sitio web.
- Incluimos un enlace al menú principal utilizando el componente `Link` de Next.js.