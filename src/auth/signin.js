import React, {Component} from 'react';
import {reduxForm} from 'redux-form';

class Signin extends Component {

	render() {

		return (
			<form>
				<fieldset className="form-group">

					<label htmlFor="emailSignin">Email:</label><br />
					<input type="email" id="emailSignin" className="form-control"/>

					<label htmlFor="passwordSignin">Password:</label><br />
					<input type="password" id="passwordSignin" className="form-control"/>

					<input type="submit" className="btn button-primary" value="Submit"/>

				</fieldset>

			</form>
		);

	}

}

export default reduxForm({
	form: 'signin',
	fields: ['email', 'password']
})(Signin);