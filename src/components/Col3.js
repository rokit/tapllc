import React, { Component } from 'react';
import './Col3.css'

class Col3 extends Component {
  render() {
    return (
      <div className="flex-col3" id="Col3">
				<div className="flex-col3-container">
					<div className="col1">
						<p>{this.props.col1}</p>
						<h4>{this.props.col1Title}</h4>
					</div>
					<div className="col2">
						<p>{this.props.col2}</p>
						<h4>{this.props.col2Title}</h4>
					</div>
					<div className="col3">
						<p>{this.props.col3}</p>
						<h4>{this.props.col3Title}</h4>
					</div>
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