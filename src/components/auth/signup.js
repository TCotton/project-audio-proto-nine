import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import * as actions from '../../actions';

class Signup extends Component {

	render() {

		const {handleSubmit, fields: {email, password, passwordConfirm}} = this.props;

		return (
			<form>

				<fieldset className="form-group">
					<label htmlFor="emailSignup">Email:</label>
					<input className="form-control" id="emailSignup" {...email}/>
				</fieldset>

				<fieldset className="form-group">
					<label htmlFor="passwordSignup">Password:</label>
					<input className="form-control" id="passwordSignup" {...password}/>
				</fieldset>

				<fieldset className="form-group">
					<label htmlFor="passwordSignupConfirm">Confirm password:</label>
					<input className="form-control" id="passwordSignupConfirm" {...passwordConfirm}/>
				</fieldset>

				<input type="submit" className="btn btn-primary" value="Submit"/>

			</form>
		);
	}

}

export default reduxForm({
	form: 'signup',
	fields: ['email', 'password', 'passwordConfirm']
})(Signup);



