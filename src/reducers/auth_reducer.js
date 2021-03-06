import {
	AUTH_USER,
	UNAUTH_USER,
	AUTH_ERROR,
	FETCH_MESSAGE
} from '../actions/types';

export default function(state = {}, action = null) {

	switch (action.type) {

		case AUTH_USER:

			return {...state, error: '', authenticated: true};

			break;

		case UNAUTH_USER:

			return {...state, authenticated: false};

			break;

		case AUTH_ERROR:

			return {...state, error: action.payload};

			break;

		case FETCH_MESSAGE:

			return {...state, message: action.payload};

			break;

		default:
			return state;
			break;
	}

}