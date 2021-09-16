import React from "react";
import "../styles/DepartmentMap.scss";

export default function DepartmentMap({ location }) {
  return (
    <div className="google-map">
      <iframe
        title="map"
        src={`https://www.google.com/maps/embed/v1/place?q=${location}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`}
      />
    </div>
  );
}
