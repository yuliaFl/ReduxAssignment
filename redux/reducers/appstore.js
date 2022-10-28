import { LOAD_DATA, ADD_NAME ,DELETE_NAME} from '../actionTypes/index';

const initialState = {
  fact: "",
  names: [],
  key: 0
};

export default function(state = initialState, action) {
  switch(action.type) {
    case LOAD_DATA: {
      return {
        ...state,
        fact: action.payload.fact.factvalue
      }
    }
    case ADD_NAME: {
      return {
        ...state,
        names: [...state.names, { id: state.key, name: action.payload }],
        key: state.key + 1
      }
    }
    case DELETE_NAME: {
        return {
          ...state,
          names: state.names.filter((obj)=>{return obj.id != action.payload}),
          key: state.key + 1
        }
    }
    default:
      return state;
  }
}