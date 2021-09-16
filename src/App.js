import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomePage from "./components/HomePage";
import Department from "./components/Department";
import Gallery from "./components/Gallery";
import NewSidebar from "./components/NewSidebar";

const App = () => {
  return (
    <Router>
      <div className="App">
        <NewSidebar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/gallery">
            <Gallery />
          </Route>
          <Route path="/home/:option">
            <HomePage />
          </Route>
          <Route path="/:location/:lat?/:lon?">
            <Department />
          </Route>
        </Switch>
      </div>
    </Router>
  )
};

export default App;
