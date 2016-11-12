import React, {Component} from 'react';
import {reduxForm, propTypes} from 'redux-form';
import {bindActionCreators} from 'redux';
import {signinUser} from '../../actions';

class Signin extends Component {

	constructor() {
		super(...arguments);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
	}

	handleFormSubmit({email, password}) {
		this.props.signinUser({email, password});
	}

	render() {

		console.dir(this.props);

		const {handleSubmit, fields: {email, password}} = this.props;

		return (
			<form onSubmit={handleSubmit(this.handleFormSubmit)}>

				<fieldset className="form-group">

					<label htmlFor="emailSignin">Email:</label><br />
					<input {...email} type="text" id="emailSignin" className="form-control"/>

				</fieldset>

				<fieldset className="form-group">

					<label htmlFor="passwordSignin">Password:</label><br />
					<input {...password} type="text" id="passwordSignin" className="form-control"/>

				</fieldset>

				<fieldset className="form-group">

					<input type="submit" className="btn button-primary" value="Submit"/>

				</fieldset>

			</form>
		);

	}

}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({signinUser}, dispatch);
}

function mapStateToProps() {
	return null;
}

export default reduxForm({
	form: 'signin',
	fields: ['email', 'password']
}, mapStateToProps, mapDispatchToProps)(Signin);