import React from "react";
import "../styles/Department.scss";
import { useParams } from "react-router";
import Photos from "./Photos";
import Articles from "./Articles";
import Information from "./Information";
import DepartmentMap from "./DepartmentMap";

export default function Department() {
  const { location } = useParams();
  return (
    <div className="department-container">
      <Photos location={location} />
      <div className="map-info-container">
        <DepartmentMap location={location} />
        <Information location={location} />
      </div>
      <Articles location={location} />
    </div>
  );
}
