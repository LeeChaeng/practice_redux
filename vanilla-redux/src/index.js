import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./component/App";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <App></App>
  </Provider>,
  document.getElementById("root")
);
