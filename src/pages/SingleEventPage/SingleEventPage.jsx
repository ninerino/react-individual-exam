import './singleEventPage.css'
import { useParams, useNavigate } from 'react-router-dom'
import { useEventStore } from '../../stores/eventStore'
import { useCartStore } from '../../stores/cartStore';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

function SingleEventPage() {
  const { eventId } = useParams();
  const { events, fetchEvents, isLoading } = useEventStore();
  const navigate = useNavigate();
  const [amount, setAmount] = useState(1);
  const addToCart = useCartStore(state => state.addToCart);

  useEffect(() => {
    if (events.length === 0) {
      fetchEvents();
    }
  }, [events, fetchEvents]);

  const event = events.find(e => e.id.toString() === eventId);

  if (!event) return <div>Eventet finns inte.</div>;

  const handleAddToCart = () => {
	const section = String.fromCharCode(65 + Math.floor(Math.random() * 26));
	const maxStartSeat = 30 - amount + 1;
	const startSeat = Math.floor(Math.random() * maxStartSeat) + 1;

	for (let i = 0; i < amount; i++) {
	  const uuid = uuidv4();
	  const barcode = uuid.slice(0, 5);

	  addToCart({
		id: event.id,
		name: event.name,
		price: event.price,
		where: event.where,
		when: event.when,
		section: section,
		seat: startSeat + i,
		ticketId: uuid,
		barcode: barcode,
	  }, 1);
	}

	navigate('/events');
  };


  return (
    <section className="wrapper">
      <section className="single-item">
        <section className="single-header">
          <button className="back-button" onClick={() => navigate('/events')}>
            ←
          </button>

          <h1 className="page-title">Event</h1>
        </section>
        <p className="single-text">You are about to score some tickets to...</p>

        <section className="single-event">
          <h2 className="single-eventName">{event.name}</h2>
          <p className="single-datetime">{event.when.date} kl {event.when.from} - {event.when.to}</p>
          <p className="single-where">@ {event.where}</p>
        </section>

        <section className="single-tickets">
          <p className="single-price">{event.price * amount} sek</p>

          <div className="ticket-controls">
            <button
              className="decreaseItem"
              onClick={() => setAmount(prev => Math.max(1, prev - 1))}
            >
              -
            </button>

            <p className="ticket-amount">{amount}</p>

            <button
              className="increaseItem"
              onClick={() => setAmount(prev => prev + 1)}
            >
              +
            </button>
          </div>

        </section>

        <button
          className="btn"
          onClick={handleAddToCart}>
          Lägg i varukorgen
        </button>

      </section>
    </section>
  );
}

export default SingleEventPage;
