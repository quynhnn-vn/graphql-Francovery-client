import React, { useState, useEffect } from "react";
import "../styles/WeatherChart.scss";
import {
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ComposedChart,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function WeatherChart({ data }) {
  const [isTempMode, setIsTempMode] = useState(true);
  const [tempData, setTempData] = useState([[], [], [], []]);
  const [otherData, setOtherData] = useState([[], [], [], []]);

  const getDate = (index) => {
    let today = new Date();
    today.setDate(today.getDate() + index);
    return today.toJSON().slice(0, 10);
  }

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        isTempMode ? 
        (
          <div className="custom-tooltip">
          <p className="time">{`Date: ${label}`}</p>
          <p className="temp">{`Temperature: ${payload[0].value}°C`}</p>
          <p className="feels_like">{`Feels like: ${payload[1].value}°C`}</p>
        </div>
        ) : (
          <div className="custom-tooltip">
          <p className="time">{`Date: ${label}`}</p>
          <p className="clouds">{`Clouds: ${payload[0].value}%`}</p>
          <p className="humidity">{`Humidity: ${payload[1].value}%`}</p>
        </div>
        )
      )
    }
    return null;
  };

  useEffect(() => {
    if (data && data.weather) {
      let dataset = [];
      for (let i = 0; i <= 3; i++) {
        let tempChartData = [];
        let otherChartData = [];
        dataset = data.weather.list.filter(item => item.dt_txt.slice(0, 10) === getDate(i + 1));
        tempChartData = dataset.map(item => {
          return {
            time: item.dt_txt,
            temp: item.main.temp,
            feels_like: item.main.feels_like,
          }
        });
        otherChartData = dataset.map(item => {
          return {
            time: item.dt_txt,
            clouds: item.clouds.all,
            humidity: item.main.humidity,
          }
        });
        setTempData(() => tempData.fill(tempChartData, i, i + 1))
        setOtherData(() => otherData.fill(otherChartData, i, i + 1))
      }
    } else {
      setTempData([])
      setOtherData([])
    }
  }, [data, otherData, tempData]);

  return (
    <div className="weather-chart-container">
      <button onClick={() => setIsTempMode(!isTempMode)}>{isTempMode ? "Other info" : "Temperature"}</button>
      {isTempMode ?
        <div style={{ width: '500px' }}>
          <h4>Temperature</h4>
          {tempData.map(item => (
            <ResponsiveContainer width='100%' height={100}>
              <ComposedChart
                width={500}
                height={100}
                data={item}
                syncId="anyId"
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Bar dataKey="temp" fill="#8884d8" />
                <Line type="monotone" dataKey="feels_like" stroke="#82ca9d" />
              </ComposedChart>
            </ResponsiveContainer>
          ))}
        </div>
        :
        <div style={{ width: '500px' }}>
          <h4>Other infomation</h4>
          {otherData.map(item => (
            <ResponsiveContainer width='100%' height={100}>
              <ComposedChart
                width={500}
                height={100}
                data={item}
                syncId="anyId"
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Bar dataKey="clouds" fill="#8884d8" />
                <Line type="monotone" dataKey="humidity" stroke="#82ca9d" />
              </ComposedChart>
            </ResponsiveContainer>
          ))}
        </div>
      }
    </div>
  )

}