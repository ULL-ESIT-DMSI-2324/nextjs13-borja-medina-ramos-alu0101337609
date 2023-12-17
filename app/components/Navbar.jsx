import Link from 'next/link'

export default function Navbar() {
  return (
    <nav>
      <h1>Dojo Helpdesk</h1>
      <div>
        <Link href="/">Dashboard</Link>
        <Link href="/tickets">Tickets</Link>
      </div>


      <Link href="/dmsi">DMSI</Link>
    </nav>
  )
}