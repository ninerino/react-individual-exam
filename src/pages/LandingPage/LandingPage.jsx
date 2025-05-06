import './landingPage.css'
import logo from '../../assets/images/logo.png'

function LandingPage() {
  return (
	<section className="landingPage">
		<img className="landing-logo" src={logo} alt="Logo for Where it's @" />
		<h1 className="page-title">Where it's @</h1>
		<h2 className="landing-details">Ticketing made easy</h2>
	</section>
  )
}

export default LandingPage
