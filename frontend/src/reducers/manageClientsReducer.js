import {clients} from '../data/mock/clients';
import { ADD_CLIENT } from '../actions/actionTypes';

const INITIAL_STATE = {
	clients: [...clients],
};

const manageClientsReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ADD_CLIENT:
			return {
				...state,
				//clients: state.clients.concat(action.playload.newClient)
			};
		default:
			return state;
	}
};

export default manageClientsReducer;