import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import LocationDetails from "./components/LocationDetails";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/home/:option">
            <HomePage />
          </Route>
          <Route path="/:location/:lat?/:lon?">
            <LocationDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
