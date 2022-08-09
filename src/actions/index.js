import * as types from '../actions/types';

export const mainEpicCall = payload => {
  console.log(' --- dispatch main-epic');
  return (
    function(dispatch, getState) {
      dispatch({
        type: types.MAIN_EPIC,
        payload
      });
    }
  );
}

export const action1 = payload => {
  console.log(' --- dispatch action1');
  return (
    function(dispatch, getState) {
      dispatch({
        type: types.ACTION_1
      });
    }
  );
}

export const innerEpic = payload => {
  console.log(' --- dispatch inner-epic');
  return (
    function(dispatch, getState) {
      dispatch({
        type: types.INNER_EPIC,
        payload
      });
    }
  );
}

export const action3 = payload => {
  console.log(' --- dispatch action3');
  return (
    function(dispatch, getState) {
      dispatch({
        type: types.ACTION_3,
        payload
      });
    }
  );
}

export const epicAction2 = payload => {
  console.log(' --- dispatch action2');
  return (
    function(dispatch, getState) {
      dispatch({
        type: types.ACTION_2,
        payload
      });
    }
  );
}
