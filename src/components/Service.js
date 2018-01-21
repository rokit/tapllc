import React, { Component } from 'react';
import { Fade } from 'react-reveal';

import './Service.css'

import bullet from '../images/bullet.svg'

class Service extends Component {

	
	render() {

		let serviceImageStyle = {}
		let serviceStyle = {}
		let img = ""
		serviceImageStyle.height = "100px"
		// serviceStyle.minHeight = "100vh"

		if (this.props.details.image) {
			img = require(`../images/${this.props.details.image}`)
			serviceImageStyle.backgroundImage = `url(${img})`
			serviceImageStyle.height = "500px"
			// serviceStyle.minHeight = "100vh"
		}
		serviceImageStyle.backgroundRepeat = "no-repeat"
		serviceImageStyle.backgroundPosition = "center"
		serviceImageStyle.backgroundSize = "cover"



    return (
      <div style={serviceStyle} className="service" name={this.props.details.name}>
				<div className="service-flex">
					<section style={serviceImageStyle} className="service-image">
						<div className="title-image">
							<h3 className="service-title">{this.props.details.title}</h3>
							<p className="service-summary">{this.props.details.summary}</p>
						</div>
					</section>
					<section className="service-list">
						<Fade right cascade tag="ul">
							{this.props.details.list.map((item) => 
								<li key={Math.random(100000000000)}>
									<img alt="bullet pont" src={bullet} />
									<span>{item}</span>
								</li>
							)}
						</Fade>
					</section>
				</div>
      </div>
    );
  }
}

export default Service;