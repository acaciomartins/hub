import { GET_CEP } from '../actions/actionTypes';
 
const INITIAL_STATE = {
	cep: [],
};

const cepReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case GET_CEP:
			return {
				...state,
				cep: action.payload.ceps
			};
		default:
			return state;
	}
};

export default cepReducer;