import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routes from "./routes";
import api from "./api/api";
import "antd/dist/antd.css";

React.Component.prototype.$api = api;

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>{renderRoutes(routes)}</Switch>
      </Router>
    </div>
  );
}

export default App;
