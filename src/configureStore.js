import { createStore, applyMiddleware, compose } from "redux";
import { rootEpic, rootReducer } from "./reducers";
import "rxjs";
import { createEpicMiddleware } from "redux-observable";
import reduxThunk from 'redux-thunk';
import thunk from 'redux-thunk';
import { ajax } from 'rxjs/ajax';

export default function configureStore(deps = {}) {
  let epicMiddleware = createEpicMiddleware({
    dependencies: {
      getJSON: ajax.getJSON
    }
  });

  let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  let store = createStore(
    rootReducer,
    deps.initialState,
    composeEnhancers(
      applyMiddleware(epicMiddleware, reduxThunk)
    )
  );

  epicMiddleware.run(rootEpic);
  console.log('store', store)
  return store;
}

