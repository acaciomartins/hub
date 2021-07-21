import { GET_CEP } from '../actions/actionTypes';
 
const INITIAL_STATE = {
	cep: [...cep],
};

const manageClientsReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case GET_CEP:
			return {
				...state,
				cep: state.clients.concat(action.playload.ceps)
			};
		default:
			return state;
	}
};

export default manageClientsReducer;