import React, { Component } from 'react';
import { Zoom, Fade } from 'react-reveal';
import './Col3.css'

class Col3 extends Component {
	render() {
		let elem1
		let elem2
		let elem3

		if (this.props.phone) {
			elem1 = <a href={`tel:${this.props.col1Title}`}><h4>{this.props.col1Title}</h4></a>
			elem2 = <a href={`tel:${this.props.col2Title}`}><h4>{this.props.col2Title}</h4></a>
			elem3 = <a href={`tel:${this.props.col3Title}`}><h4>{this.props.col3Title}</h4></a>
		} else {
			elem1 = <h4>{this.props.col1Title}</h4>
			elem2 = <h4>{this.props.col2Title}</h4>
			elem3 = <h4>{this.props.col3Title}</h4>
		}
		return (
			<div className="flex-col3" id="Col3">
				<div className="flex-col3-container">
					<Zoom>
						<Fade>
							<div className="col1">
								<p>{this.props.col1}</p>
								{elem1}
							</div>
						</Fade>
					</Zoom>
					<Zoom delay={200}>
						<Fade delay={200}>
							<div className="col2">
								<p>{this.props.col2}</p>
								{elem2}
							</div>
						</Fade>
					</Zoom>
					<Zoom delay={400}>
						<Fade delay={400}>
							<div className="col3">
								<p>{this.props.col3}</p>
								{elem3}
							</div>
						</Fade>
					</Zoom>
				</div>
			</div>
		);
	}
}

Col3.defaultProps = {
	col1Title: "Lorem",
	col2Title: "Ipsum",
	col3Title: "Dolor",
	col1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	col2: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	col3: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}

export default Col3;