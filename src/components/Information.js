import React from "react";
import "../styles/Information.scss";
import regionsInfo from "../data/info/regionsInfo.json";
import departementsInfo from "../data/info/departementsInfo.json";
import communesInfo from "../data/info/communesInfo.json";
import { annotations } from "../data/annotations";

export default function Information({ location }) {
  const [locationData, setLocationData] = React.useState({});

  const compareText = (str1, str2) => {
    str1 = str1.toLowerCase().split(" ").join("-").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    str2 = str2.toLowerCase().split(" ").join("-").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    if (str1 === str2) return true;
    else return false;
  }

  React.useEffect(() => {
    const region = regionsInfo.find((item) => compareText(item.RÉGION, location));
    if (region) {
      setLocationData(region);
    } else {
      const department = departementsInfo.find((item) => compareText(item.DÉPARTEMENT, location));
      if (department) {
        setLocationData(department);
      } else {
        const commune = communesInfo.find((item) => compareText(item.COMMUNE, location));
        if (commune) {
          setLocationData(commune);
        } else {
          setLocationData("");
        }
      }
    }
  }, [location])
  
  return (
    <div className="info-container">
        {locationData ?
          Object.keys(locationData).map(key => (
            Object.keys(annotations).map((item, index) => (
              item === key ? 
              <div className="info-card" id={index}>
                <span>{annotations[item][0]}</span>
                <span>{key.split("_").join(" ")}</span>
                <span>{annotations[item][1] ? (locationData[key]+" "+annotations[item][1]) : locationData[key]}</span>
              </div> : null))
          )) : null}
    </div>
  );
}
