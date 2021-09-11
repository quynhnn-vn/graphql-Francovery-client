import React, { useState, useEffect } from "react";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { Link } from "react-router-dom";
import department from "../data/department.json";
import commun from "../data/commun.json";
import france from "../data/france.json";
import cities from "../data/cities.json";

const chartStyle = {
  default: {
    fill: "transparent",
    stroke: "#0082A3",
    outline: "none",
  },
  hover: {
    fill: "#074A5E",
    outline: "none",
  },
  pressed: {
    fill: "#E42",
    outline: "none",
  },
};

const MapChart = React.memo(({ setTooltipContent, option }) => {
  const [loadingMap, setLoadingMap] = useState(true);
  let geoUrl;
  let citiesList = cities.slice(0, 10);
  if (option === "department") {
    geoUrl = department;
  } else if (option === "commun") {
    geoUrl = commun;
  } else {
    geoUrl = france;
    citiesList = cities.slice(0, 25);
  }
  useEffect(() => {
    setLoadingMap(false);
  }, []);

  return (
    <>
      <ComposableMap
        data-tip=""
        projection="geoAzimuthalEqualArea"
        projectionConfig={{
          rotate: [0, -46.5, 0],
          scale: 2000,
        }}
        height="350"
      >
        <ZoomableGroup>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const { NAME_1, NAME_2 } = geo.properties;
                if (NAME_2) {
                  return (
                    <Link to={`/${NAME_2.split(" ").join("-")}`}>
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        onMouseEnter={() => {
                          setTooltipContent(`${NAME_1} — ${NAME_2}`);
                        }}
                        onMouseLeave={() => {
                          setTooltipContent("");
                        }}
                        style={chartStyle}
                      />
                    </Link>
                  );
                } else if (!NAME_2 && NAME_1) {
                  return (
                    <Link to={`/${NAME_1.split(" ").join("-")}`}>
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        onMouseEnter={() => {
                          setTooltipContent(`${NAME_1}`);
                        }}
                        onMouseLeave={() => {
                          setTooltipContent("");
                        }}
                        style={chartStyle}
                      />
                    </Link>
                  );
                } else {
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      style={{
                        default: {
                          fill: "transparent",
                          stroke: "#0082A3",
                          outline: "none",
                        },
                        hover: {
                          fill: "transparent",
                          stroke: "#0082A3",
                          outline: "none",
                        },
                        pressed: {
                          fill: "transparent",
                          outline: "none",
                        },
                      }}
                    />
                  );
                }
              })
            }
          </Geographies>
          {citiesList.map((city) =>
            loadingMap ? null : (
              <Marker key={city.city} coordinates={[city.lng, city.lat]}>
                <Link to={`/${city.city}`}>
                  <circle
                    onMouseEnter={() => {
                      setTooltipContent(`${city.city}`);
                    }}
                    onMouseLeave={() => {
                      setTooltipContent("");
                    }}
                    r={option === "city" && city.population > 10000000 ? 10 : 3}
                    fill="#074A5E"
                  />
                </Link>
                <text
                  textAnchor="middle"
                  y={15}
                  style={{
                    fontFamily: ["Lato", "sans-serif"],
                    fill: "#074A5E",
                    fontSize: `${option === "city" ? "8px" : "10px"}`,
                  }}
                >
                  {city.city}
                </text>
              </Marker>
            )
          )}
        </ZoomableGroup>
      </ComposableMap>
    </>
  );
});
export default MapChart;
