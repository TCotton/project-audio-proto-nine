import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import * as actions from '../../actions';

const formFields = ['email', 'password', 'passwordConfirm'];

class Signup extends Component {

	constructor() {
		super(...arguments);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	passwordErrorDisplay() {

		if (this.props.fields.password.touched && this.props.fields.passwordConfirm.touched) {
			return this.props.fields.password.error;
		}

	}

	emailErrorDisplay() {

		if (this.props.fields.email.touched) {
			return this.props.fields.email.error;
		}

	}

	onFormSubmit(formProps) {

		// call action creator to sign up the user
		this.props.signupUser(formProps);

	}

	renderAlert() {
		if(this.props.errorMessage) {
			return (

				<div className="alert alert-danger">
					<strong>OPPS!!</strong> {this.props.errorMessage}
				</div>

			)
		}
	}

	render() {

		const {handleSubmit, fields: {email, password, passwordConfirm}} = this.props;

		return (
			<form onSubmit={handleSubmit(this.onFormSubmit)}>

				<span>{this.props.errorMessage}</span>

				<fieldset className="form-group">
					<label htmlFor="emailSignup">Email:</label>
					<input type="text" className="form-control" id="emailSignup" {...email}/>

					<span>{this.emailErrorDisplay()}</span>

				</fieldset>

				<fieldset className="form-group">
					<label htmlFor="passwordSignup">Password:</label>
					<input type="text" className="form-control" id="passwordSignup" {...password}/>

					<span>{this.passwordErrorDisplay()}</span>

				</fieldset>

				<fieldset className="form-group">
					<label htmlFor="passwordSignupConfirm">Confirm password:</label>
					<input type="text" className="form-control" id="passwordSignupConfirm" {...passwordConfirm}/>
				</fieldset>

				<input type="submit" className="btn btn-primary" value="Submit"/>

			</form>
		);
	}

}

function validate(fornProps) {

	const errors = {};
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	if (typeof fornProps.email !== 'undefined' && !re.test(fornProps.email)) {
		errors.email = 'Please include a valid email address';
	}

	if (!Object.is(fornProps.password, fornProps.passwordConfirm)) {
		errors.password = 'Passwords must match';
	}

	if (typeof fornProps.password !== 'undefined' && fornProps.password.length < 9) {
		errors.password = 'The password must be more than 8 characters';
	}

	formFields.map((value) => {

		if (!fornProps[value]) {
			errors[value] = `Please do not leave the ${value} blank`;
		}

	});

	return errors;
}

function mapStateToProps(state) {
	return {
		errorMessage: state.auth.error
	}
}

export default reduxForm({
	form: 'signup',
	fields: formFields,
	validate
}, mapStateToProps, actions)(Signup);



