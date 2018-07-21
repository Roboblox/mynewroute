import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import One from "./One";
import Two from "./Two";
import Three from "./Three";
import Four from "./Four";
import Fourpointone from "./Fourpointone";
import NoMatch from "./NoMatch";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter as Router, Route } from "react-router-dom";

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/One" component={One} />
      <Route path="/Two" component={Two} />
      <Route path="/Three" component={Three} />
      <Route path="/Four" component={Four} />
      <Route path="/Four/:id" component={Fourpointone} />
    </div>
  </Router>,

  document.getElementById("root")
);
registerServiceWorker();
