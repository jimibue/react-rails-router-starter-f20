import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { initMiddleware } from "devise-axios";

// Remove this and sematic-ui-react  sematic-ui-css in package.json if you don't want to use

import { BrowserRouter } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import AuthProvider from "./providers/AuthProvider";

// this is going to set up handle token inbetween our axios call
// res and req token handling talk more about tommorrow
initMiddleware();

ReactDOM.render(
  <AuthProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
