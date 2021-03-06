import React, {Component} from 'react';
import {reduxForm, propTypes} from 'redux-form';
// import {bindActionCreators} from 'redux';
import * as actions from '../../actions';

class Signin extends Component {

	constructor() {
		super(...arguments);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.renderAlert = this.renderAlert.bind(this);
	}

	handleFormSubmit({email, password}) {
		this.props.signinUser({email, password});
	}

	renderAlert() {

		if (this.props.errorMessage) {
			return (
				<div className="alert alert-danger">
					<strong>Opps!</strong> {this.props.errorMessage} <br />
				</div>
			);
		}

	}

	render() {

		const {handleSubmit, fields: {email, password}} = this.props;

		return (
			<form onSubmit={handleSubmit(this.handleFormSubmit)}>

				<fieldset className="form-group">

					<label htmlFor="emailSignin">Email:</label><br />
					<input {...email} type="email" id="emailSignin" className="form-control"/>

				</fieldset>

				<fieldset className="form-group">

					<label htmlFor="passwordSignin">Password:</label><br />
					<input {...password} type="password" id="passwordSignin" className="form-control"/>

				</fieldset>

				<fieldset className="form-group">

					{this.renderAlert()}

					<input type="submit" className="btn button-primary" value="Submit"/>

				</fieldset>

			</form>
		);

	}

}

/*
function mapDispatchToProps(dispatch) {
	return bindActionCreators({signinUser}, dispatch);
}
*/

function mapStateToProps(state) {
	return {errorMessage: state.auth.error};
}

export default reduxForm({
	form: 'signin',
	fields: ['email', 'password']
}, mapStateToProps, actions)(Signin);