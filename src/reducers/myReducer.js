import * as types from "../actions/types";

const defaultState = { data: [] };

export default function(state = defaultState, action) {
  console.log(`    *** reducer myReducer called with action type '${action.type}'`, action.payload)
  try{
    switch (action.type) {
      case types.ACTION_1:
        return state;

      case types.ACTION_2:
        return state;

      case types.ACTION_3:
        return state;

      default: 
        return state;
    }
  } catch (err) {
    console.log('ERROR', err);
    return state;
  }
}
