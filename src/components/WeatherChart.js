import React, { useState, useEffect } from "react";
import {
  ComposedChart,
  Line,
  Legend,
  //Scatter,
  Bar,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
//import CustomTooltip from "./CustomTooltip";

export default function WeatherChart({ data }) {
  const [tempData, setTempData] = useState([]);
  const [otherData, setOtherData] = useState([]);
  const [isTempMode, setIsTempMode] = useState(true);

  useEffect(() => {
    if (data && data.weather) {
      setTempData(data.weather.list.map(item => {
        return {
          time: item.dt_txt,
          temp: item.main.temp,
          feels_like: item.main.feels_like,
        }
      }))
      setOtherData(data.weather.list.map(item => {
        return {
          time: item.dt_txt,
          wind: item.wind.speed,
          clouds: item.clouds.all,
          humidity: item.main.humidity,
        }
      }))
    } else {
      setTempData([]);
      setOtherData([]);
    }
  }, [data]);
  
  return (
    <>
    <ResponsiveContainer width={600} height={500}>
      <ComposedChart
          width={500}
          height={300}
          data={isTempMode ? tempData : otherData}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          {isTempMode ? (
            <>
            <CartesianGrid stroke="#f5f5f5" strokeDasharray="5 5"/>
            <XAxis dataKey="time" angle={-45} textAnchor="end"/>
            <YAxis />
              {/* <Tooltip content={<CustomTooltip />} /> */}
              <Tooltip />
              <Legend />
              <Bar dataKey="temp" barSize={20} fill="#8884d8" />
              <Line type="monotone" dataKey="feels_like" stroke="#82ca9d" />
            </>
          ) : (
            <>
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="time" scale="band" />
            <YAxis />
              <Tooltip />
              <Legend />
              <Area dataKey="clouds" fill="#413ea0" />
              <Area dataKey="humidity" fill="#82ca9d" />
              <Line type="monotone" dataKey="winds" stroke="#82ca9d" />
            </>
          )}
        </ComposedChart>
    </ResponsiveContainer>
    <button onClick={() => setIsTempMode(!isTempMode)}>{isTempMode ? "Other info" : "Temperature" }</button>
    </>
  );
}
