import React, { Component } from 'react'
// import { NavLink } from 'react-router-dom'
import * as Scroll from 'react-scroll'
import './Header.css'

import threeBars from '../images/threeBars.svg'

var Link = Scroll.Link

class Header extends Component {
	state = {
		bNavVisible: false
	}

	handleHamburgerClick = () => {
		this.setState({
			bNavVisible: !this.state.bNavVisible
		})
	}

	handleSetActive = () => {
		this.setState({
			bNavVisible: false
		})
	}

	render() {

		let scrollOffset = -96
		let linkStyle = {}

		if (this.state.bNavVisible) {
			linkStyle.height = "4.5rem"
			linkStyle.color = "rgba(238,238,238,1)"
		}

		return (
			<header>
				<nav>
					<ul>

						<li className="logo">
							<span className="phone-number">(405) 655 - 4858</span>
							<Link activeClass="none" to="why-choose" spy={true} smooth={true} offset={scrollOffset} duration={500} onSetActive={this.handleSetActive}>
								<h1 className="name">TAP</h1>
							</Link>
							<div className="trapezoid"><div className="llc">LLC</div></div>
						</li>
						<li style={linkStyle} className="customLink link1">
							<Link activeClass="active" to="make-ready" spy={true} smooth={true} offset={scrollOffset} duration={500} onSetActive={this.handleSetActive}>
								<p className="name">Make Ready</p>
							</Link>
						</li>
						<li style={linkStyle} className="customLink link2">
							<Link activeClass="active" to="lot-porter" spy={true} smooth={true} offset={scrollOffset} duration={500} onSetActive={this.handleSetActive}>
								<p className="name">Lot Porter</p>
							</Link>
						</li>
						<li style={linkStyle} className="customLink link3">
							<Link activeClass="active" to="janitorial" spy={true} smooth={true} offset={scrollOffset} duration={500} onSetActive={this.handleSetActive}>
								<p className="name">Janitorial</p>
							</Link>
						</li>
						<li style={linkStyle} className="customLink link4">
							<Link activeClass="active" to="tenant" spy={true} smooth={true} offset={scrollOffset} duration={500} onSetActive={this.handleSetActive}>
								<p className="name">Tenant</p>
							</Link>
						</li>
						<li style={linkStyle} className="customLink link5">
							<Link activeClass="active" to="admin" spy={true} smooth={true} offset={scrollOffset} duration={500} onSetActive={this.handleSetActive}>
								<p className="name">Admin</p>
							</Link>
						</li>

					</ul>
					<img onClick={this.handleHamburgerClick} className="hamburger" src={threeBars} alt="navigation menu button" />

				</nav>
				
			</header>
		)
	}
	componentWillUnmount() {
		window.removeEventListener("resize", this.updateDimensions.bind(this));
	}
}

export default Header