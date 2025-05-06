import './eventItem.css'
import { Link } from 'react-router-dom'

function EventItem( {event} ) {
  return (
	<>

	<Link to={`/event/${event.id}`} className="event-name-link">
	<section className="event-item">

		<article className="event-date">

			<span className="event-day">
				{event.when.date.split(' ')[0]}
			</span>

			<span className="event-month">
				{event.when.date.split(' ')[1].slice(0, 3).toUpperCase()}
			</span>

		</article>

		<article className="event-info">

			<h3 className="event-name">{event.name}</h3>
			<p className="event-where">{event.where}</p>

			<article className="event-timeprice">
				<p className="event-time"> {event.when.from} - {event.when.to}</p>
				<p className="event-price">{event.price} kr</p>
			</article>

		</article>
	</section>
	</Link>
	</>
  )
}

export default EventItem
