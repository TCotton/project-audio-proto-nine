import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

class Header extends Component {

	renderLinks() {

		if (this.props.authenticate) {
			// show a link to sign out
			return (
				<li className="nav-item">
					<Link className="nav-link" to="/signout">Sign out</Link>
				</li>
			);
		} else {
			// show a link to sign in or sign out
			return [
				<li className="nav-item" key="nav-item-one">
					<Link className="nav-link" to="/signin">Sign In</Link>
				</li>,
				<li className="nav-item" key="nav-item-two">
					<Link className="nav-link" to="/signup">Sign Up</Link>
				</li>
			]

		}
	}

	render() {

		return (

			<nav className="navbar navbar-light">

				<Link to="/" className="navbar-brand">Redux Off</Link>

				<ul className="nav navbar-nav">
					{this.renderLinks()}
				</ul>

			</nav>

		);

	}

}

function mapStateToProps(state) {

	return {
		authenticate: state.auth.authenticated
	}

}

function mapDispatchToProps() {
	return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);