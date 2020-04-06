import React from "react";
import "./App.css";
import Home from "./modules/Home";
import "./index.css";
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch
} from "react-router-dom";
import Dashboard from "./modules/Dashboard";

const notFound = () => {
  return <div>Not found page</div>;
};

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact={true} path="/home" component={Home} />
          <Route exact={true} path="/dash" component={Dashboard} />
          <Route exact={true} path="/" render={() => <Redirect to="/home" />} />
          <Route exact={true} path="*" component={notFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
