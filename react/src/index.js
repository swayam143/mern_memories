import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import reducers from "./Redux/reducers";
const store = createStore(reducers, applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        {" "}
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
