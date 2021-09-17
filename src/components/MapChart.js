import React, { useState, useEffect } from "react";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { Link, useParams } from "react-router-dom";
import departementsGeo from "../data/geo/departementsGeo.json";
import regionsGeo from "../data/geo/regionsGeo.json";
import communesGeo from "../data/geo/communesGeo.json";
import bigcitiesGeo from "../data/geo/bigcitiesGeo.json";

const MapChart = React.memo(({ setTooltipContent }) => {
  const [loadingMap, setLoadingMap] = useState(true);
  const { option } = useParams();
  const [screenWidth, setScreenWidth] = useState(0);

  let geoUrl;
  let bigcitiesData = bigcitiesGeo.slice(0, 10);

  if (option === "communes") {
    geoUrl = communesGeo;
    bigcitiesData = bigcitiesGeo.slice(0, 10);
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
      fill: "transparent",
      stroke: "#0082A3",
      outline: "none",
    },
    hover: {
      fill: "#074A5E",
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
                const { NAME_1, NAME_2, NAME_3, LAT, LNG} = geo.properties;
                if (NAME_3) {
                  return (
                    <Link to={`/${NAME_3.split(" ").join("-")}`}>
                      <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onMouseEnter={() => { setTooltipContent(
                              `${NAME_3.split("-").join(" ")} - ${NAME_2.split("-").join(" ")}`
                            )}}
                      onMouseLeave={() => {
                        setTooltipContent("");
                      }}
                      style={chartStyle}
                    />
                    </Link> )
                } else if (!NAME_3 && NAME_2) {
                  return (
                  <Link to={`/${NAME_2.split(" ").join("-")}`}>
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onMouseEnter={() => { setTooltipContent(
                              `${NAME_2.split("-").join(" ")} - ${NAME_1.split("-").join(" ")}`
                            )}}
                      onMouseLeave={() => {
                        setTooltipContent("");
                      }}
                      style={chartStyle}
                    />
                  </Link>)
                } else {
                  return (
                  <Link to={`/${NAME_1.split(" ").join("-")}/${LAT}/${LNG}`}>
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => { setTooltipContent(
                            `${NAME_1.split("-").join(" ")}`
                          )}}
                    onMouseLeave={() => {
                      setTooltipContent("");
                    }}
                    style={chartStyle}
                  />
                </Link> )
                }
              })
            }
          </Geographies>
          {bigcitiesData.map((city) =>
            loadingMap ? null : (
              <Marker key={city.CITY} coordinates={[city.LNG, city.LAT]}>
                <Link to={`/${city.CITY.split(" ").join("-")}`}>
                  <g
                    fill="none"
                    stroke="#074A5E"
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
                      r="2"
                      fill="#074A5E"
                      stroke="#074A5E"
                      cx="12"
                      cy="10"
                    />
                    <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                  </g>
                </Link>
                {option !== "communes" ? (
                  <text
                    textAnchor="middle"
                    y={15}
                    style={{
                      fill: "#074A5E",
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
