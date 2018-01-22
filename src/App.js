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
					<Quote quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." />

					<Quote quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." />

					<Quote quote="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt." />

					<Quote quote="Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur." />

				</Carousel>
				<div className="tap-team">
					<p>TAP team members are professionals with over 50 years combined experience. You can rest assured TAP will represent you in the best possible way!!</p>
				</div>
			</div>
		);
	}
}

export default App;