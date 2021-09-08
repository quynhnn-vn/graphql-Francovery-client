import React from "react";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  //Marker,
} from "react-simple-maps";
import { Link } from "react-router-dom";
import geoUrl from "../data/france.json";
//import bigcities from "../data/bigcitites.json";

const MapChart = React.memo(({ setTooltipContent }) => {
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
                      onClick={() => {}}
                      style={{
                        default: {
                          fill: "transparent",
                          stroke: "#074A5E",
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
          {/* {bigcities.map(({ Name, Latitude, Longitude }) => (
            <Marker key={Name} coordinates={[Longitude, Latitude]}>
              <circle r={5} fill="#F00" />
              <text
                textAnchor="middle"
                y={15}
                style={{
                  fontFamily: "system-ui",
                  fill: "#5D5A6D",
                  fontSize: "10px",
                }}
              >
                {Name}
              </text>
            </Marker> }
          ))*/}
        </ZoomableGroup>
      </ComposableMap>
    </>
  );
});
export default MapChart;
