import React from "react";
import ReactDOM from "react-dom";
import App from "./src/components/App";

import { createStore, applyMiddleware } from "redux";
import { starWars } from "./src/reducers";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

let store = createStore(starWars, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
