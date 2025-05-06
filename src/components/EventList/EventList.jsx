import './eventList.css';
import EventItem from '../EventItem/EventItem';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useEventStore } from '../../stores/eventStore';
import { useNavigate } from 'react-router-dom';

function EventList() {
	const { events, isLoading, isError, fetchEvents } = useEventStore();
	const navigate = useNavigate();

	useEffect(() => {
		fetchEvents();
	  }, [fetchEvents]);

	if(isLoading) return <div className="event-page__list">Loading...</div>
	if(isError) return <div className="event-page__list">Error loading events</div>

	return (
		<>

		<section className="event-page__list">
			<h1 className="page-title">Events</h1>

			<div className="search-container">
				<FontAwesomeIcon icon={faSearch} className="faSearch" />
				<input type="text" placeholder="" className="search-input" />
			</div>

			<article className="event-items">
				{
					events?.map((event) => {
						return <EventItem
							event={ event }
							key={ event.id }
							/>
					})
				}
			</article>
<button className="btn" onClick={() => navigate('/checkout')}>Gå till varukorgen</button>
		</section>
		</>
	)
}

export default EventList