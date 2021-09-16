import React from "react";
import { gql, useQuery } from "@apollo/client";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export const GET_WEATHER = gql`
  query getWeather($location: String!) {
    weather(location: $location) {
      list {
        dt_txt
        wind {
          speed
        }
        clouds {
          all
        }
        weather {
          main
          description
          icon
        }
        main {
          temp
          feels_like
          temp_min
          humidity
          temp_max
        }
      }
    }
  }
`;
export default function Weather({ location }) {
    const { loading, error, data } = useQuery(GET_WEATHER, {
      variables: { location },
    });
    if (loading) return "Loading...";
    if (error) return `Error! ${error.message}`;

    const chartData = data.weather.list.map(item => {
        return {
            temp: item.main.temp,
            temp_min: item.main.temp_min,
            temp_max: item.main.temp_max,
        }
    })

    return (
      <ResponsiveContainer width="100%" height={400}>
          <AreaChart data={chartData} >
            <Area type="monotone" dataKey="temp" stackId="1" stroke="#8884d8" fill="#8884d8" />
            <Area type="monotone" dataKey="temp_min" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
            <Area type="monotone" dataKey="temp_max" stackId="1" stroke="#ffc658" fill="#ffc658" />
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis />
            <YAxis />
            <Tooltip />
          </AreaChart>
      </ResponsiveContainer>
    )
  }