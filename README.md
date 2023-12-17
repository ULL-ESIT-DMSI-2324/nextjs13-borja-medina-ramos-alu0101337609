# Links y Layouts

## Estilos y Fuentes
- Importamos estilos globales desde `globals.css` y la fuente "Inter" desde Google Fonts para mejorar la apariencia.

## Metadata
- Información sobre la aplicación:
  - **Título:** Create Next App
  - **Descripción:** Generado por create next app

## Layout Principal (`RootLayout`)
- `RootLayout` es el esqueleto principal de la aplicación.
- Estructura la página con etiquetas `html` y `body`.
- Incluye una barra de navegación (`Navbar`) y el contenido principal de la aplicación (`{children}`).

## Barra de Navegación (`Navbar.js`)
- Contiene un título "Dojo Helpdesk" y enlaces a las páginas "Dashboard" y "Tickets".
- Utiliza el componente `Link` de Next.js para una navegación más suave.