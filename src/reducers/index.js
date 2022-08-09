import {combineReducers} from "redux";
import {combineEpics} from "redux-observable";
import innerEpic from '../epics/innerEpic';
import mainEpic from '../epics/mainEpic'
import myReducer from './myReducer';

export const rootEpic = combineEpics(
  innerEpic,
  mainEpic
);

export const rootReducer = combineReducers({
  myReducer,
});
