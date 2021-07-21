import { combineReducers } from 'redux';
//reducers create
import manageClientsReducer from './manageClientsReducer';
import cepReducer from './cepReducer';

export default combineReducers({
	manageClientsReducer,
	cepReducer
});
