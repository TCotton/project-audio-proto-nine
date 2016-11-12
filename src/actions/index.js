import axios from 'axios';
import {browserHistory} from 'react-router';
import {
	AUTH_USER,
	AUTH_ERROR,
	UNAUTH_USER
} from './types';

const ROOT_URL = `http://localhost:3090`;

class ErrorMesage {

	static displayMessage({email, password}, dispatch) {

		// submit email/password to the server

		axios.post(`${ROOT_URL}/signin`, {email, password}).then(response => {

			// if request is good...
			// - Update state to indicate user is authenticated
			dispatch({type: AUTH_USER});
			// - Save the JWT token
			localStorage.setItem('token', response.data.token);
			// - redirect to the route './feature'
			browserHistory.push('/feature');

		}).catch((response) => {

			// if request is bad
			dispatch(authError(response.message));

		});

	}

}

export function signinUser({email, password}) {

	return function(dispatch) {

		ErrorMesage.displayMessage({email, password}, dispatch);

	};

}

export function signupUser({email, password}) {

	return function(dispatch) {

		ErrorMesage.displayMessage({email, password}, dispatch);

	};

}

export function authError(error) {

	return {
		type: AUTH_ERROR,
		payload: error
	}

}

export function signoutUser() {

	localStorage.removeItem('token');

	return {
		type: UNAUTH_USER
	}

}