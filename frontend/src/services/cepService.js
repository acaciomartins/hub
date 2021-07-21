import api from "../services/api";
import store from '../store/store';

//actions do reducer
import { getCepAction } from "../actions/cepAction";

export async function getCep(params) {
  await api
    //.get("centralatendimento/chamado/buscar/", { params: pamsra })
    .get("v1/localidades/distritos/520005005")
    .then((response) => {
      console.debug("response.data..: ", response.data);
      store.dispatch(getCepAction(response.data));
    })
    .catch((errors) => {
      return Promise.reject(errors);
    });
}