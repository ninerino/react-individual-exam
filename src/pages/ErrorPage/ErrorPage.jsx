import './errorPage.css'
import { useNavigate } from 'react-router-dom';

function ErrorPage() {
	const navigate = useNavigate();

  return (
	<div className="wrapper">
		<section className="error-page">
			<p>These are not the droids you are looking for.</p>
			<button className="btn" onClick={() => navigate('/')}>
			Tillbaka till startsidan
			</button>
		</section>
	</div>
  )
}

export default ErrorPage
