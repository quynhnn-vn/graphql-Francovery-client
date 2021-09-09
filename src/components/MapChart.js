import React, { useState, useEffect } from "react";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { Link } from "react-router-dom";
import geoUrl from "../data/france.json";
import bigcities from "../data/bigcitites.json";

const MapChart = React.memo(({ setTooltipContent }) => {
  const [loadingMap, setLoadingMap] = useState(true);

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
          scale: 2300,
        }}
        height="400"
      >
        <ZoomableGroup>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const { NAME_1, NAME_2 } = geo.properties;
                return (
                  <Link to={`/department/${NAME_2}`}>
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onMouseEnter={() => {
                        setTooltipContent(`${NAME_1} — ${NAME_2}`);
                      }}
                      onMouseLeave={() => {
                        setTooltipContent("");
                      }}
                      style={{
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
                      }}
                    />
                  </Link>
                );
              })
            }
          </Geographies>
          {bigcities.map(({ Name, Latitude, Longitude }) =>
            loadingMap ? null : (
              <Link to={`/department/${Name}`}>
                <Marker key={Name} coordinates={[Longitude, Latitude]}>
                  <circle
                    onMouseEnter={() => {
                      setTooltipContent(`${Name}`);
                    }}
                    onMouseLeave={() => {
                      setTooltipContent("");
                    }}
                    r={4}
                    fill="#074A5E"
                  />
                  <text
                    textAnchor="middle"
                    y={10}
                    style={{
                      fontFamily: ['Lato', "sans-serif"],
                      fill: "#074A5E",
                      fontSize: "10px",
                    }}
                  >
                    {Name}
                  </text>
                </Marker>
              </Link>
            )
          )}
        </ZoomableGroup>
      </ComposableMap>
    </>
  );
});
export default MapChart;
