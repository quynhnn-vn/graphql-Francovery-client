import React from "react";
import cities from "../data/cities.json";

export default function Infomation({ location }) {
  const city = cities.find((city) => city.city === location);
  if (!city) return null;
  return (
    <div>
      <h1>{city.city}</h1>
      <h2>{city.admin_name}</h2>
      <h3>Population: {city.population}</h3>
    </div>
  );
}
