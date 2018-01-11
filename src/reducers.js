import { combineReducers } from "redux";

import * as Actions from "./actions";

const initialState = {
  entities: [],
  isFetching: false,
  error: null
};

export function starWarsReducer(state = initialState, action) {
  switch (action.type) {
    case Actions.GET_STARWARS_REQUEST:
      return Object.assign({},state,{
        //...state,
        isFetching: true,
        error: null
      });
    case Actions.GET_STARWARS_SUCCESS:
      return Object.assign({},state,{
        //...state,
        isFetching: false,
        entities: action.data.results
      });  
    case Actions.GET_STARWARS_FAILURE:
      return Object.assign({}, state,{
        //...state,
        isFetching: false,
        error: action.error
      });
    default:
      return state;
  }
}

export const starWars = combineReducers({
  starWarsReducer
});
