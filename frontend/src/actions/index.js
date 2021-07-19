import { ADD_CLIENT } from '../actions/actionTypes';

const addClient = (newClient) => ({
    type: ADD_CLIENT,
    payload: { newClient },
  });

  export default addClient;