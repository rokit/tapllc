import React, { Component } from 'react'
import './Quote.css'

class Quote extends Component {

	render() {
		return (
			<div className="cSlide">
				<div className="quote-container">
					<div className="qu quote-left" />
					<div className="quote">
						<p className="the-quote">{this.props.quote}</p>
						<p className="quoted">- {this.props.person}</p>
					</div>
					<div className="qu quote-right" />
				</div>
			</div>
		)
	}
	componentWillUnmount() {
		window.removeEventListener("resize", this.updateDimensions.bind(this));
	}
}

export default Quote