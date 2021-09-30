import React, { useState } from "react";
import "../styles/HomePage.scss";
import ReactTooltip from "react-tooltip";
import MapChart from "./MapChart";

/*
  HomePage component render a France map
  with tooltip displayed when hovering over each part of the map
*/
export default function HomePage() {
  const [content, setContent] = useState("");

  return (
    <div className="homepage-container">
      <MapChart setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
}
