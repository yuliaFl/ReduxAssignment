import { LOAD_DATA, ADD_NAME } from '../actionTypes/index';

const API = "https://catfact.ninja/fact";

export const load = (dispatch) => {
  fetch(API)
  .then((response) => response.json())
  .then((json) => {
    const factitem = {
      factvalue: json.fact,
    }
    dispatch({
      type: LOAD_DATA,
      payload: {
        fact: factitem
      }
    }); 
  });
}
