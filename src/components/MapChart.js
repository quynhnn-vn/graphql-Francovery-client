import React, { useState, useEffect } from "react";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { Link } from "react-router-dom";
import departements from "../data/departements.json";
import communes from "../data/communes.json";
import france from "../data/france.json";
import regions from "../data/regions.json";
import { useParams } from "react-router";

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
  let communesData = communes.slice(0, 10);
  if (option === "communes") {
    geoUrl = france;
    communesData = communes.slice(0, 25);
  } else if (option === "departements") {
    geoUrl = departements;
  } else {
    geoUrl = regions;
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
          {communesData.map((commune) =>
            loadingMap ? null : (
              <Marker key={commune.city} coordinates={[commune.lng, commune.lat]}>
                <Link to={`/${commune.city}`}>
                  <circle
                    onMouseEnter={() => {
                      setTooltipContent(`${commune.city} - ${commune.admin_name}`);
                    }}
                    onMouseLeave={() => {
                      setTooltipContent("");
                    }}
                    r={option === "communes" && commune.population > 10000000 ? 10 : 3}
                    fill="#074A5E"
                  />
                </Link>
                <text
                  textAnchor="middle"
                  y={15}
                  style={{
                    fontFamily: ["Lato", "sans-serif"],
                    fill: "#074A5E",
                    fontSize: `${option === "communes" ? "8px" : "10px"}`,
                  }}
                >
                  {commune.city}
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
