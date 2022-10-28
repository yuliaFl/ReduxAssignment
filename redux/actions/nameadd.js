import {ADD_NAME, DELETE_NAME} from "../actionTypes";

export const addname = value => ({
    type: ADD_NAME,
    payload:value
  });

export const deletename = value => ({
    type: DELETE_NAME,
    payload: value
});