import React from "react";
import "../styles/Department.scss";
import { useParams } from "react-router";
import Photos from "./Photos";
import Articles from "./Articles";
import Information from "./Information";
import DepartmentMap from "./DepartmentMap";
import Weather from "./Weather";

export default function Department() {
  const { location, lat, lon } = useParams();

  return (
    <div className="department-container">
      <Photos location={location} />
      <Information location={location} />
      <div className="map-info-container">
        <DepartmentMap location={location} />
        <Weather location={location} lat={lat} lon={lon} />
      </div>
      <Articles location={location} />
    </div>
  );
}
