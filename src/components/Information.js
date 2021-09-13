import React from "react";
import "../styles/Information.scss";
import regionData from "../data/regionData.json";
import departmentData from "../data/departmentData.json";
import communeData from "../data/communeData.json";

export default function Information({ location }) {
  const [locationData, setLocationData] = React.useState({});

  const findLocationData = React.useCallback(() => {
    const region = regionData.find((item) => item.NOM === location);
    if (region) {
      return region;
    } else {
      const department = departmentData.find((item) => item.NOM_DEPART === location);
      if (department) {
        return department;
      } else {
        const commune = communeData.find((item) => item.NOM_COMMUNE === location);
        if (commune) {
          return commune;
        } else {
          return null;
        }
      }
    }
  }, [location])

  React.useEffect(() => {
    setLocationData(findLocationData());
  }, [findLocationData])
  
  return (
    <div className="info-container">
        {locationData ?
          Object.keys(locationData).map(key => (
            <div className="info-card">
              <span>{key}</span>
              <span>{locationData[key]}</span>
            </div>
          )) : null
        }
    </div>
    // <div className="info-card">
    //     <span>Region</span>
    //     <span>{city.admin_name.split("-").join(" ")}</span>
    //   </div>
    //   <div className="info-card">
    //     <span>Population</span>
    //     <span>{city.population.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</span>
    //   </div>
  );
}
