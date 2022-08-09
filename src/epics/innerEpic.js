import { Observable, from, concat, of, merge, forkJoin } from 'rxjs';
import { ofType } from 'redux-observable';
import { mergeMap, concatMap, concatAll, switchMap, combineAll, map, delay, debounceTime, takeUntil, catchError, first, mapTo } from 'rxjs/operators';
import * as actions from '../actions';
import * as types from '../actions/types';

const innerEpic = (action$, store, deps) => {
  return action$.pipe(
    ofType(types.INNER_EPIC),
    delay(0),
    mergeMap( action => of(
      (actions.epicAction2(action.payload))
    ))
  )
}

export default innerEpic;
