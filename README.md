### Static Rendering en Next.js 13

#### Importaciones
```javascript
import Link from "next/link"
import { notFound } from "next/navigation";
```

#### Constante `dynamicParams`
```javascript
export const dynamicParams = true;
```
- Esta constante la utilizaremos como indicador de que los parámetros son dinámicos. Nota: Hay un error tipográfico en el nombre de la constante (`dynamicParams` en lugar de `dinamicParams`).

#### Función `generateStaticParams`
```javascript
export async function generateStaticParams() {
  const res = await fetch('http://localhost:4000/tickets');
  const tickets = await res.json();
  return tickets.map((ticket) => ({
    id: ticket.id
  }));
}
```
- Generamos parámetros estáticos para páginas generadas de manera estática.
- Realizamos una solicitud a 'http://localhost:4000/tickets', obteniendo un array de tickets y los mapeamos a un array de objetos con la propiedad `id`.

#### Función `getTickets`
```javascript
async function getTickets() {
  const res = await fetch('http://localhost:4000/tickets', {
    next: {
      revalidate: 60
    }
  });
  if (!res.ok) {
    notFound();
  }

  return res.json();
}
```
- Realizamos una solicitud a 'http://localhost:4000/tickets' con una configuración adicional para la revalidación de la caché (60 segundos).
- Si la respuesta no tiene exito (código HTTP diferente de 200), llamamos a la funcion `notFound()` importada desde next/navigation.

