import React from "react";
import "../styles/LocationDetails.scss";

import { useParams } from "react-router";
import Photos from "./Photos";
import Articles from "./Articles";
import Information from "./Information";
import GoogleMap from "./GoogleMap";
import Weather from "./Weather";
import Footer from "./Footer";

export default function LocationDetails() {
  const { location, lat, lon } = useParams();

  return (
    <div className="department-container">
      <Photos location={location} />
      <Information location={location} />
      <div className="chart-container">
        <h2>CARTE & MÉTÉO</h2>
        <div className="map-weather-container">
          <GoogleMap location={location} />
          <Weather location={location} lat={lat} lon={lon} />
        </div>
      </div>
      <Articles location={location} />
      <Footer />
    </div>
  );
}
