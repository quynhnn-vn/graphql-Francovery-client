import React from "react";
import "../styles/Information.scss";
import communes from "../data/communes.json";

export default function Information({ location }) {
  const city = communes.find((commune) => commune.city === location);
  if (!city) return null;
  return (
    <div className="info-container">
      <div className="info-card">
        <span>Region</span>
        <span>{city.admin_name.split("-").join(" ")}</span>
      </div>
      <div className="info-card">
        <span>Population</span>
        <span>{city.population.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</span>
      </div>
    </div>
  );
}
