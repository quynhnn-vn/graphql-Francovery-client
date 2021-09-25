import React from "react";
import "../styles/GoogleMap.scss";

/*
  Googlemap component renders an embeded google map with query is the location string
*/
export default function GoogleMap({ location }) {
  return (
    <div className="google-map">
      <iframe
        title="map"
        src={`https://www.google.com/maps/embed/v1/place?q=${location}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`}
      />
    </div>
  );
}
