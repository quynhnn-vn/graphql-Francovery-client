import React from "react";
import { gql, useQuery } from "@apollo/client";
import WeatherChart from "./WeatherChart";
import Loading from "./Loading";

export const GET_WEATHER = gql`
  query getWeather($location: String, $lat: String, $lon: String) {
    weather(location: $location, lat: $lat, lon: $lon) {
      list {
        dt_txt
        clouds {
          all
        }
        main {
          temp
          feels_like
          humidity
        }
      }
    }
  }
`;

export default function Weather({ location, lat, lon }) {
  const skip = lat === undefined || lon === undefined;
  const { loading, error, data } = useQuery(
    GET_WEATHER,
    skip
      ? {
          variables: { location },
        }
      : {
          variables: { location: "", lat, lon },
        }
  );

 if (loading) return <Loading name="weather-chart-container" />;
  if (error) return `Error! ${error.message}`;
  return <WeatherChart data={data} />;
}
