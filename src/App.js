import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomePage from "./components/HomePage";
import Department from "./components/Department";
import SideBar from "./components/SideBar";

const App = () => {
  return (
    <Router>
      <div className="App">
        <SideBar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/:location">
              <Department />
          </Route>
        </Switch>
      </div>
    </Router>
  )
};

export default App;
