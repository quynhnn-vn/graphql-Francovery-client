import React from "react";
import "../styles/Department.scss";
import { useParams } from "react-router";
import Photos from "./Photos";
import Articles from "./Articles";

export default function Department() {
  const { location } = useParams();
  return (
    <div className="department">
      <Photos location={location} />
      <Articles location={location} />
    </div>
  );
}
