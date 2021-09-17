import React, { useState, useEffect } from "react";
import {
//   ComposedChart,
//   Line,
//   Legend,
//   Scatter,
//   Bar,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  ResponsiveContainer,
} from "recharts";

export default function WeatherChart({ data }) {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    if (data && data.weather) {
      setChartData(
        data.weather.list.map((item) => {
          return {
            temp: item.main.temp,
            temp_min: item.main.temp_min,
            temp_max: item.main.temp_max,
            time: item.dt_txt,
          };
        })
      );
    } else {
      setChartData([]);
    }
  }, [data]);

  return (
    <ResponsiveContainer width={600} height={400}>
      <AreaChart data={chartData}>
        <Area
          type="monotone"
          dataKey="temp"
          stackId="1"
          stroke="#8884d8"
          fill="#8884d8"
        />
        <Area
          type="monotone"
          dataKey="temp_min"
          stackId="1"
          stroke="#82ca9d"
          fill="#82ca9d"
        />
        <Area
          type="monotone"
          dataKey="temp_max"
          stackId="1"
          stroke="#ffc658"
          fill="#ffc658"
        />
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
      </AreaChart>
    </ResponsiveContainer>
  );
}
