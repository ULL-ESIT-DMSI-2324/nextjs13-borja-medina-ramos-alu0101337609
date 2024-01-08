import React from 'react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className='text-center'>
        <h2 className='text-3xl'>Se ha producido un problema.</h2>
        <p>No se ha encontrado el ticket que estabas buscando.</p>
        <p>Para volver al menú principal, clickea sobre <Link href='/'>Menú principal</Link></p>
    </main>
  )
}