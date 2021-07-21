import { GET_CEP } from './actionTypes';

export const getCepAction = (ceps) => {
  return {
    type: GET_CEP,
    payload: { ceps },
  }
};
