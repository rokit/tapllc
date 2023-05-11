import React, { Component } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './App.css'

import { Carousel } from 'react-responsive-carousel';

import Header from './components/Header'
import MainPresentation from './components/MainPresentation'
import ServiceSummary from './components/ServiceSummary'
import Quote from './components/Quote'
import Col3 from './components/Col3'
import Service from './components/Service'

// json services
import services from './services/services.json'

class App extends Component {

	render() {
		return (
			<div className="App">
				<Header />
				<MainPresentation />
				<Col3
					col1Title="(405) 394 - 4446"
					col2Title="(405) 655 - 4858"
					col3Title="(405) 703 - 2043"
					phone={true}			
					col1="Pam"
					col2="Terry"
					col3="Office"
				/>
				<ServiceSummary />
				<Col3
					col1Title="INSURED"
					col2Title="EXCELLENT REFERENCES"
					col3Title="FREE ESTIMATES"				
					col1=""
					col2=""
					col3=""
				/>
				{services.services.map((serv) =>
					<Service details={serv} key={Math.random(10000000000)} />
				)}

				<div className="client-quotes">
					<h3>What Our Clients Say</h3>
					<div className="arrow" />
				</div>

				<Carousel
					showStatus={true}
					infiniteLoop={true}
					autoPlay={true}
					showThumbs={false}
					showArrows={false}
					emulateTouch={true}
					swipeScrollTolerance={1}
				>
					<Quote
						person="Greg Schaeffer"
						quote="We've used TAP on three jobs and it's always a great experience. Thanks, TAP!" />

					<Quote
						person="Jake Rappaport"
						quote="Competitive rates, great quality, fast turnaround." />

					<Quote
						person="Allen Brenam"
						quote="It's not every day you get a team with a work ethic like this. Can't recommend them enough." />

					<Quote
						person="Ashley Hughes"
						quote="TAP is my go-to when something breaks or one of my apartment units needs maintenance. They're reliable and always get the job done. I can't say the same for other contractors I've used." />

				</Carousel>
				<div id="tap-team">
					<p>TAP team members are professionals with over 50 years combined experience. You can rest assured TAP will represent you in the best possible way!!</p>
				</div>
			</div>
		);
	}
}

export default App;