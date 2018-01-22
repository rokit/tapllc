import React, { Component } from 'react'
import withScrollReveal from 'react-scrollreveal'

import './MainPresentation.css'

class MainPresentation extends Component {

	render() {
		const { animationContainerReference } = this.props;

		return (
			<div>
				<div id="main-presentation" ref={animationContainerReference}>
					<div id="why-choose">
						<h3>Why Choose TAP?</h3>
						<p>TAP LLC stands out because we provide a wide variety of services. Why deal with numerous contractors when TAP can cover all of your building janitorial, maintenance and remodeling needs with one phone call.</p>
					</div>
				</div>
				<div className="spacer" />
			</div>
		)
	}
}

export default withScrollReveal([
  {
    selector: 'h3',
    options: {
      reset: true,
			delay: 0,
			origin: 'top',
			distance: '2rem',
			duration: 1000,
			easing: 'ease-out'
    },
	},
  {
    selector: 'p',
    options: {
      reset: true,
			delay: 0,
			origin: 'bottom',
			distance: '2rem',
			duration: 1000,
			easing: 'ease-out'			
    },
  }	
])(MainPresentation)