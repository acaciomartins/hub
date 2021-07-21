import { GET_CEP } from '../actions/actionTypes';

const getCep = (ceps) => ({
    type: GET_CEP,
    payload: { ceps },
  });

  export default getCep;