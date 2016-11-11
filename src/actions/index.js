import axios from 'axios';

const ROOT_URL = `http://localhost:3090`;

export function signinUser({email, password}) {

	return function(dispatch) {

		axios.post(`$(ROOT_URL)/signin`, {email, password});




		// submit email/password to the server


		// if request is good...
		// - Update state to indicate user is authenticated
		// - Save the JWT token
		// - redirect to the route './feature'

		// if request is bad


	};


}