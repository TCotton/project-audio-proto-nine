import React, {Component} from 'react';
import {reduxForm} from 'redux-form';

class Signin extends Component {

	constructor() {
		super(...arguments);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
	}

	handleFormSubmit({email, password}) {

		console.log(email, password);

	}

	render() {

		const {handleSubmit, fields: {email, password}} = this.props;

		return (
			<form onSubmit={handleSubmit(this.handleFormSubmit)}>
				<fieldset className="form-group">

					<label htmlFor="emailSignin">Email:</label><br />
					<input type="email" id="emailSignin" className="form-control" {...email}/>

					<label htmlFor="passwordSignin">Password:</label><br />
					<input type="password" id="passwordSignin" className="form-control" {...password}/>

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