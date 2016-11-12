import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import * as actions from '../../actions';

class Signup extends Component {

	passwordErrorDisplay() {

		if (this.props.fields.password.dirty && this.props.fields.passwordConfirm.dirty) {
			return [
				`${this.props.fields.password.error}`
			]
		}

	}

	render() {

		const {handleSubmit, fields: {email, password, passwordConfirm}} = this.props;

		return (
			<form onSubmit={handleSubmit}>

				<fieldset className="form-group">
					<label htmlFor="emailSignup">Email:</label>
					<input type="text" className="form-control" id="emailSignup" {...email}/>
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

	if (!Object.is(fornProps.password, fornProps.passwordConfirm)) {
		errors.password = 'Passwords must match';
	}

	if (typeof fornProps.password !== 'undefined' && fornProps.password.length < 9) {
		errors.password = 'The password must be more than 8 characters';
	}

	return errors;
}

export default reduxForm({
	form: 'signup',
	fields: ['email', 'password', 'passwordConfirm'],
	validate
})(Signup);



