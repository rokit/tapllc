import React, { Component } from 'react'
// import { NavLink } from 'react-router-dom'
import * as Scroll from 'react-scroll'
import './Header.css'

import threeBars from '../images/threeBars.svg'

var Link = Scroll.Link

class Header extends Component {
	state = {
		bMobile: true,
		bNavVisible: false
	}

	componentDidMount() {
		this.updateDimensions();
		window.addEventListener("resize", this.updateDimensions.bind(this));
	}

	updateDimensions = () => {
		if (window.innerWidth >= 768) {
			this.setState({
				bMobile: false,
				bNavVisible: true
			})
		} else {
			this.setState({
				bMobile: true,
				bNavVisible: false
			})
		}
	}

	handleHamburgerClick = () => {
		this.setState({
			bNavVisible: !this.state.bNavVisible
		})
	}

	handleSetActive = () => {
		if (this.state.bMobile) {
			this.setState({
				bNavVisible: false
			})
		}
	}

	render() {

		let scrollOffset = -98
		let linkStyle = {}
		linkStyle.visibility = "visible"		
		
		// // if we're on mobile and we have the menu open
		if (this.state.bNavVisible && this.state.bMobile) {
			linkStyle.height = "4.5rem"			
		}
		// if we're on desktop (nav is always visible on desktop)
		else if (this.state.bNavVisible) {
			linkStyle.height = "100%"
		} else {
			linkStyle.height = "0rem"
			linkStyle.visibility = "hidden"		
		}

		return (
			<header className="main-header">
				<div className="app-header">

					<div className="logo">
						<span>(405) 655 - 4858</span>
						<Link activeClass="active" to="why-choose" spy={true} smooth={true} offset={scrollOffset} duration={500} onSetActive={this.handleSetActive}>
							<h1>TAP</h1>
						</Link>
					</div>

					{this.state.bMobile && <img onClick={this.handleHamburgerClick} className="hamburger" src={threeBars} alt="navigation menu button" />}

					<div style={linkStyle} className="customLink link1">
						<Link activeClass="active" to="make-ready" spy={true} smooth={true} offset={scrollOffset} duration={500} onSetActive={this.handleSetActive}>
							<p className="name">Make Ready</p>
						</Link>
					</div>
					<div style={linkStyle} className="customLink link2">
						<Link activeClass="active" to="lot-porter" spy={true} smooth={true} offset={scrollOffset} duration={500} onSetActive={this.handleSetActive}>
							<p className="name">Lot Porter</p>
						</Link>
					</div>
					<div style={linkStyle} className="customLink link3">
						<Link activeClass="active" to="janitorial" spy={true} smooth={true} offset={scrollOffset} duration={500} onSetActive={this.handleSetActive}>
							<p className="name">Janitorial</p>
						</Link>
					</div>
					<div style={linkStyle} className="customLink link4">
						<Link activeClass="active" to="tenant" spy={true} smooth={true} offset={scrollOffset} duration={500} onSetActive={this.handleSetActive}>
							<p className="name">Tenant</p>
						</Link>
					</div>
					<div style={linkStyle} className="customLink link5">
						<Link activeClass="active" to="admin" spy={true} smooth={true} offset={scrollOffset} duration={500} onSetActive={this.handleSetActive}>
							<p className="name">Admin</p>
						</Link>
					</div>

				</div>
					<div className="trapezoid"><div className="llc">LLC</div></div>
			</header>
		)
	}
	componentWillUnmount() {
		window.removeEventListener("resize", this.updateDimensions.bind(this));
	}
}

export default Header