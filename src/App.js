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
import Gallery from "./components/Gallery";

const App = () => {
  return (
    <Router>
      <div className="App">
        <SideBar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/home">
            <HomePage />
          </Route>
          <Route exact path="/gallery">
            <Gallery />
          </Route>
          <Route path="/home/:option">
            <HomePage />
          </Route>
          <Route path="/map/:location">
            <Department />
          </Route>
        </Switch>
      </div>
    </Router>
  )
};

export default App;
