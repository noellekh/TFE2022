import React from 'react'
import NavbarClient from '../components/NavbarClient';
import ClientCalendar from '../components/ClientCalendar';

function BookCoaching() {
  return (
    <div className="agenda-client">
    <NavbarClient />
    <h2> Agenda Clients </h2>
    <section className="ag-client-contenu">
        <div className="ag-calendrier-client">
            <ClientCalendar />

        </div>
    </section>
</div>
  )
}

export default BookCoaching