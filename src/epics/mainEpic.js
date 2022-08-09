import { Observable, from, concat, of, merge, forkJoin } from 'rxjs';
import { ofType } from 'redux-observable';
import { mergeMap, concatMap, concatAll, switchMap, combineAll, map, delay, debounceTime, takeUntil, catchError, first, mapTo } from 'rxjs/operators';
import * as actions from '../actions';
import * as types from '../actions/types';

let mainEpic = (action$, store, deps) => {
  return action$.pipe(
    ofType(types.MAIN_EPIC),
    delay(1000),
    mergeMap( action => of(
      (actions.action1(action.payload.oldValue))
      ,
      (actions.innerEpic(action.payload.newValue))
      ,
      (actions.action3(action.payload.newValue))
    )),
  )//.subscribe(r => console.log('saved', r))
}
export default mainEpic;

const mainEpic2 = (action$, store, deps) => {
  return action$.pipe(
    ofType(types.MAIN_EPIC),
    concatMap( action => of(
      actions.action1(action.payload.oldValue)
    ).pipe(
      switchMap( response1 => of(
        of(actions.innerEpic(action.payload.newValue))
      ).pipe(
        switchMap( response2 => of(
          actions.action3(action.payload.newValue)
        ))
      ))
    ))
    //actions.action3(action.payload.newValue)
  )
}
//export default mainEpic2;
