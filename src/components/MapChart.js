import React, { useState, useEffect } from "react";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { Link, useParams } from "react-router-dom";
import franceGeo from "../data/geo/franceGeo.json";
import departementsGeo from "../data/geo/departementsGeo.json";
import regionsGeo from "../data/geo/regionsGeo.json";
import bigcitiesGeo from "../data/geo/bigcitiesGeo.json";

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

const MapChart = React.memo(({ setTooltipContent }) => {
  const [loadingMap, setLoadingMap] = useState(true);
  const { option } = useParams();
  let geoUrl;
  let bigcitiesData = bigcitiesGeo.slice(0, 10);
  if (option === "Communes") {
    geoUrl = franceGeo;
    bigcitiesData = bigcitiesGeo.slice(0, 100);
  } else if (option === "Départements") {
    geoUrl = departementsGeo;
  } else {
    geoUrl = regionsGeo;
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
                    <Link to={`/map/${NAME_2.split(" ").join("-")}`}>
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        onMouseEnter={() => {
                          setTooltipContent(`${NAME_2} - ${NAME_1}`);
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
                    <Link to={`/map/${NAME_1.split(" ").join("-")}`}>
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
          {bigcitiesData.map((city) =>
            loadingMap ? null : (
              <Marker key={city.CITY} coordinates={[city.LNG, city.LAT]}>
                <Link to={`/map/${city.CITY}/`}>
                  <circle
                    onMouseEnter={() => {
                      setTooltipContent(`${city.CITY} - ${city.RÉGION}`);
                    }}
                    onMouseLeave={() => {
                      setTooltipContent("");
                    }}
                    r={option === "Communes" && city.POPULATION > 10000000 ? 10 : 3}
                    fill={option === "Communes" ? "transparent" : "#074A5E"}
                    stroke={option === "Communes" ? "#074A5E" : "none"}
                  />
                </Link>
                {option !== "Communes" ? (
                                  <text
                                  textAnchor="middle"
                                  y={15}
                                  style={{
                                    fontFamily: ["Lato", "sans-serif"],
                                    fill: "#074A5E",
                                    fontSize: `${option === "Communes" ? "8px" : "10px"}`,
                                  }}
                                >
                                  {city.CITY}
                                </text>
                ) : null}
              </Marker>
            )
          )}
        </ZoomableGroup>
      </ComposableMap>
    </>
  );
});
export default MapChart;
