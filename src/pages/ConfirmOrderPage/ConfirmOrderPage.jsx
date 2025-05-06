import './confirmOrderPage.css';
import { useCartStore } from '../../stores/cartStore';
import { useTicketStore } from '../../stores/ticketStore';
import { useNavigate } from 'react-router-dom';

function ConfirmOrderPage() {
  const cartItems = useCartStore(state => state.cartItems);
  const removeFromCart = useCartStore(state => state.removeFromCart);
  const clearCart = useCartStore(state => state.clearCart);
  const confirmTickets = useTicketStore(state => state.confirmTickets);
  const navigate = useNavigate();

  const groupedItems = cartItems.reduce((acc, item) => {
    const existing = acc.find(e => e.id === item.id);
    if (existing) {
      existing.tickets.push(item);
    } else {
      acc.push({ ...item, tickets: [item] });
    }
    return acc;
  }, []);

  const handleConfirm = () => {
    confirmTickets(cartItems);
    clearCart();
    navigate('/orders');
  };

  return (
    <section className="wrapper">
      <section className="single-item">
        <section className="single-header">
          <button className="back-button" onClick={() => navigate('/events')}>←</button>
          <h1 className="page-title">Order</h1>
        </section>

        {groupedItems.map(item => (
          <section key={item.id} className="confirm-single-event">
            <h2 className="single-eventName">{item.name}</h2>
            <p className="confirm-single-datetime">{item.when.date} kl {item.when.from} - {item.when.to}</p>

            <section className="confirm-single-tickets">
              <div className="ticket-controls">
                <button
                  className="decreaseItem"
                  onClick={() => {
                    if (item.tickets.length > 1) {
                      const toRemove = item.tickets[item.tickets.length - 1].ticketId;
                      removeFromCart(toRemove);
                    }
                  }}
                >
                  -
                </button>

                <p className="ticket-amount">{item.tickets.length}</p>

                <button
                  className="increaseItem"
                  onClick={() => {
                    const newTicket = {
                      ...item,
                      ticketId: crypto.randomUUID(),
                      seat: Math.floor(Math.random() * 30) + 1,
                      barcode: crypto.randomUUID().slice(0, 5),
                    };
                    useCartStore.getState().addToCart(newTicket, 1);
                  }}
                >
                  +
                </button>
              </div>
            </section>
          </section>
        ))}

        <section className="total-price">
          <h1 className="confirm-text">Totalt värde på order:</h1>
          <p className="confirm-price">{cartItems.reduce((sum, item) => sum + item.price, 0)} kr</p>
        </section>

        <button className="btn" onClick={handleConfirm} >Skicka order</button>
      </section>
    </section>
  );
}

export default ConfirmOrderPage;
