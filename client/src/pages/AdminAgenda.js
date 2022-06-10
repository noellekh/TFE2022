import React from 'react';
import AdminCalendar from '../components/AdminCalendar';
import NavbarAdmin from '../components/NavbarAdmin';

function AdminAgenda() {
  return (
    <div>AdminAgenda
        <NavbarAdmin />
        <h2> Agenda Clients </h2>
            <section className="ag-client-contenu">
                <div className="ag-calendrier-client">
                    <AdminCalendar />

                </div>
            </section>

    </div>
  )
}

export default AdminAgenda