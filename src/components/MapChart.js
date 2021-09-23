import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

import departementsGeo from "../data/geo/departementsGeo.json";
import regionsGeo from "../data/geo/regionsGeo.json";
import communesGeo from "../data/geo/communesGeo.json";
import bigcitiesGeo from "../data/geo/bigcitiesGeo.json";

const MapChart = React.memo(({ setTooltipContent }) => {
  const { option } = useParams();
  const [loadingMap, setLoadingMap] = useState(true);
  const [screenWidth, setScreenWidth] = useState(0);

  let geoUrl;
  if (option === "communes") {
    geoUrl = communesGeo;
  } else if (option === "departements") {
    geoUrl = departementsGeo;
  } else {
    geoUrl = regionsGeo;
  }

  useEffect(() => {
    setLoadingMap(false);
    setScreenWidth(window.innerWidth);
  }, []);

  const chartStyle = {
    default: {
      fill: "#f5f5f5",
      stroke: "#0082a3",
      outline: "none",
      opacity: "0.5",
    },
    hover: {
      fill: "#074a5e",
      outline: "none",
    },
  };

  return (
    <div className="map-chart">
      <ComposableMap
        data-tip=""
        projection="geoAzimuthalEqualArea"
        projectionConfig={
          screenWidth > 600
            ? {
                rotate: [-2, -46.5, 0],
                scale: 2000,
              }
            : {
                rotate: [-2.5, -46.5, 0],
                scale: 4000,
              }
        }
        height={screenWidth > 600 ? 350 : 800}
      >
        <ZoomableGroup>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const { NAME_1, NAME_2, NAME_3, LAT, LNG } = geo.properties;
                if (NAME_3) {
                  return (
                    <Link to={`/${NAME_3.split(" ").join("-")}`}>
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        onMouseEnter={() => {
                          setTooltipContent(
                            `${NAME_3.split("-").join(" ")} - ${NAME_2.split(
                              "-"
                            ).join(" ")}`
                          );
                        }}
                        onMouseLeave={() => {
                          setTooltipContent("");
                        }}
                        style={chartStyle}
                      />
                    </Link>
                  );
                } else if (!NAME_3 && NAME_2) {
                  return (
                    <Link to={`/${NAME_2.split(" ").join("-")}`}>
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        onMouseEnter={() => {
                          setTooltipContent(
                            `${NAME_2.split("-").join(" ")} - ${NAME_1.split(
                              "-"
                            ).join(" ")}`
                          );
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
                    <Link to={`/${NAME_1.split(" ").join("-")}/${LAT}/${LNG}`}>
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        onMouseEnter={() => {
                          setTooltipContent(`${NAME_1.split("-").join(" ")}`);
                        }}
                        onMouseLeave={() => {
                          setTooltipContent("");
                        }}
                        style={chartStyle}
                      />
                    </Link>
                  );
                }
              })
            }
          </Geographies>
          {bigcitiesGeo.map((city) =>
            loadingMap ? null : (
              <Marker key={city.CITY} coordinates={[city.LNG, city.LAT]}>
                <Link to={`/${city.CITY.split(" ").join("-")}`}>
                  <g
                    fill="none"
                    stroke="#0082a3"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    transform="translate(-12, -24)"
                  >
                    <circle
                      onMouseEnter={() => {
                        setTooltipContent(
                          `${city.CITY.split("-").join(
                            " "
                          )} - ${city.RÉGION.split("-").join(" ")}`
                        );
                      }}
                      onMouseLeave={() => {
                        setTooltipContent("");
                      }}
                      r="3"
                      fill="#0082a3"
                      stroke="#0082a3"
                      cx="12"
                      cy="10"
                    />
                    <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                  </g>
                </Link>
                {option !== "communes" ? (
                  <text
                    textAnchor="middle"
                    y={10}
                    style={{
                      fill: "#4e4c4c",
                      fontSize: "10px",
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
    </div>
  );
});
export default MapChart;
