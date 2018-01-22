import React, { Component } from 'react'
import withScrollReveal from 'react-scrollreveal'

import './ServiceSummary.css'

class ServiceSummary extends Component {

	render() {
		const { animationContainerReference } = this.props;

		return (
			<div id="service-summary" ref={animationContainerReference}>
				<p>Does your vacancy need attention? We make it show ready and keep it that way. Are your parking lots covered with litter? We provide lot porter services 5 days per week. Is your building a bit run down?  TAP will paint and spruce it up.  Having difficulty with those tenant handyman requests? TAP LLC provides those services too! From changing light bulbs to resetting toilets…we work for you!</p>
				<p>TAP offers contract and/or hourly options, from all-inclusive to limited, based upon your needs. We can customize a package that is perfect for you.</p>
				<p>OUR GOAL is to make your property look great and make your job easier!!!</p>
			</div>
		)
	}
}

export default withScrollReveal([
	{
		selector: 'p',
		options: {
			reset: true,
			delay: 0,
			origin: 'left',
			distance: '2rem',
			duration: 400,
			easing: 'ease-out',
			opacity: 0
		},
		interval: 400
	}
])(ServiceSummary)