import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import configureStore from './configureStore';

console.log('React version = ', React.version);

ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,

  document.getElementById("root")
);

