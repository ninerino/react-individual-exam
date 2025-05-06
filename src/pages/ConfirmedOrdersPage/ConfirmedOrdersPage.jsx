import './confirmedOrdersPage.css';
import { useTicketStore } from '../../stores/ticketStore';
import Barcode from 'react-barcode';

function ConfirmedOrdersPage() {
  const confirmedTickets = useTicketStore(state => state.confirmedTickets);

  if (confirmedTickets.length === 0) {
    return (
      <>
        <div className="wrapper">
          <section className="no-orders">
          <p className="confirmed-text">Du har inga bekräftade biljetter ännu.</p>
          </section>
      </div>
      </>
    )
  }

  return (
    <div className="wrapper">

      <section className="confirmed-orders">
        <h1 className="page-title">Bekräftade biljetter</h1>

        <article className="ticket-list">
          {confirmedTickets.map((ticket, index) => (
            <div key={index} className="ticket-item">

              <div className="ticket-content">

                <div className="ticket-section">
                  <span className="ticket-label">Vad</span>
                  <h2 className="ticket-title">{ticket.name}</h2>
                </div>

                <div className="ticket-section">
                  <span className="ticket-label">Var</span>
                  <p className="ticket-location">{ticket.where}</p>
                </div>

                <div className="ticket-section ticket-time">
                  <span className="ticket-label">När</span>
                  <p>{ticket.when?.date} {ticket.when?.from} - {ticket.when?.to}</p>
                </div>

                <div className="ticket-section">
                  <span className="ticket-label">Info</span>
                  <p>Sektion {ticket.section}, plats {ticket.seat}</p>
                </div>

              </div>

              <div className="ticket-barcode">
                <Barcode value={(ticket.barcode || '').toUpperCase()} format="CODE128" width={1.5} height={60} fontSize={14} />
              </div>
            </div>
          ))}
        </article>
      </section>
</div>
  );
}

export default ConfirmedOrdersPage;
