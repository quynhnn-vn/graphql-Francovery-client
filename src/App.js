import "./App.css";
import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MapChart from "./components/MapChart";
import Department from "./components/Department"

const App = () => {
  const [content, setContent] = useState("");
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <MapChart setTooltipContent={setContent} />
            <ReactTooltip>{content}</ReactTooltip>
          </Route>
          <Route path="/department/:id">
              <Department />
          </Route>
        </Switch>
      </div>
    </Router>
  )
};

export default App;
