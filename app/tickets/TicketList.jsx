import Link from "next/link"
import {notfound} from "next/navigation"

const dynamicParams = false;

async function getStaticParams() {
  const res = await fetch("http://localhost:4000/tickets")
  const tickets = await res.json()
  return tickets.map((ticket) => ({
    id: ticket.id}));
}

async function getTickets() {
  const res = await fetch('http://localhost:4000/tickets', {
    next: {
      revalidate: 60
    }
  })
  if (!res.ok) {
    notfound
  }

  return res.json()
}

export default async function TicketList() {
  const tickets = await getTickets()

  return (
    <>
      {tickets.map((ticket) => (
        <div key={ticket.id} className="card my-5">
          <Link href={`/tickets/${ticket.id}`}>
            <h3>{ticket.title}</h3>
            <p>{ticket.body.slice(0, 200)}...</p>
            <div className={`pill ${ticket.priority}`}>
              {ticket.priority} priority
            </div>
          </Link>
        </div>
      ))}
      {tickets.length === 0 && (
        <p className="text-center">There are no open tickets, yay!</p>
      )}
    </>
  )
}