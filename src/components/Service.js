import React, { Component } from 'react';
// import { Fade } from 'react-reveal';
import withScrollReveal from 'react-scrollreveal'


import './Service.css'

import bullet from '../images/bullet.svg'

class Service extends Component {
	render() {
		const { animationContainerReference } = this.props;

		let serviceImageStyle = {}
		let serviceStyle = {}
		let img = ""
		serviceImageStyle.height = "100px"

		if (this.props.details.image) {
			img = require(`../images/${this.props.details.image}`)
			serviceImageStyle.backgroundImage = `url(${img})`
			serviceImageStyle.height = "500px"
		}
		serviceImageStyle.backgroundRepeat = "no-repeat"
		serviceImageStyle.backgroundPosition = "center"
		serviceImageStyle.backgroundSize = "cover"

    return (
      <div style={serviceStyle} className="service" name={this.props.details.name} ref={animationContainerReference}>
				<div className="service-flex">
					<section style={serviceImageStyle} className="service-image">
						<div className="title-image">
							<h3 className="service-title">{this.props.details.title}</h3>
							<p className="service-summary">{this.props.details.summary}</p>
						</div>
					</section>
					<section className="service-list">
						<ul>
							{this.props.details.list.map((item) => 
								<li key={Math.random(100000000000)}>
									<img alt="bullet pont" src={bullet} />
									<span>{item}</span>
								</li>
							)}
						</ul>
					</section>
				</div>
      </div>
    );
  }
}

export default withScrollReveal([
  {
    selector: 'li',
    options: {
      reset: false,
			delay: 0,
			origin: 'right',
			distance: '20rem',
			duration: 500
    },
    interval: 100
  }
])(Service)