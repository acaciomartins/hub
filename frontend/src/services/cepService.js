import api from "../services/api";
//actions do reducer
import { getCepAction } from "../reducers/cepReducer";

export async function getCepAction(dispatch, params) {
  await api
    //.get("centralatendimento/chamado/buscar/", { params: pamsra })
    .get("1001000/json/?callback=callback_name")
    .then((response) => {
      console.debug("response.data..: ", response.data);
      dispatch(getCepAction(response.data));
    })
    .catch((errors) => {
      return Promise.reject(errors);
    });
}