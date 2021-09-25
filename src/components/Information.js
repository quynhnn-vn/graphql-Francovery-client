import React, { useEffect, useState } from "react";
import "../styles/Information.scss";

import regionsInfo from "../data/info/regionsInfo.json";
import departementsInfo from "../data/info/departementsInfo.json";
import communesInfo from "../data/info/communesInfo.json";
import { annotations } from "../data/annotations";
import { compareText } from "../utils/helpers"

/*
  Information component takes a location string, search for location data in /data/info directory
  in order: région, département then commune and render this data with icons and units
*/
export default function Information({ location }) {
  const [locationData, setLocationData] = useState({});

  useEffect(() => {
    const region = regionsInfo.find((item) =>
      compareText(item.RÉGION, location)
    );
    if (region) {
      setLocationData(region);
    } else {
      const department = departementsInfo.find((item) =>
        compareText(item.DÉPARTEMENT, location)
      );
      if (department) {
        setLocationData(department);
      } else {
        const commune = communesInfo.find((item) =>
          compareText(item.COMMUNE, location)
        );
        if (commune) {
          setLocationData(commune);
        } else {
          setLocationData("");
        }
      }
    }
  }, [location]);

  return (
    <div className="infomation-container">
      <h2>À PROPOS</h2>
      <div className="info-container">
        {locationData
          ? Object.keys(locationData).map((keyItem) =>
              Object.keys(annotations).map((annoItem, index) =>
                annoItem === keyItem ? (
                  <div className="info-card" key={index}>
                    <span>{annotations[annoItem][0]}</span>
                    <span>{keyItem.split("_").join(" ")}</span>
                    {keyItem === "SITE_WEB" ? (
                      <span>
                        <a
                          href={locationData[keyItem]}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {locationData[keyItem]}
                        </a>
                      </span>
                    ) : (
                      <span>
                        {annotations[annoItem][1]
                          ? locationData[keyItem] +
                            " " +
                            annotations[annoItem][1]
                          : locationData[keyItem]}
                      </span>
                    )}
                  </div>
                ) : null
              )
            )
          : null}
      </div>
    </div>
  );
}
