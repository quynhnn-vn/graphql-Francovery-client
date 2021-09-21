import React, { useState, useEffect } from "react";
import "../styles/WeatherChart.scss";
import {
  Bar,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ComposedChart,
  ResponsiveContainer,
} from "recharts";

export default function WeatherChart({ data }) {
  const [isTempMode, setIsTempMode] = useState(true);
  const [tempData, setTempData] = useState([[], [], []]);
  const [otherData, setOtherData] = useState([[], [], []]);

  useEffect(() => {
    if (data.weather) {
      let tempChartData = [];
      let otherChartData = [];
      for (let i = 0; i < 3; i++) {
        const dataset = data.weather.list.filter(
          (item) => item.dt_txt.slice(0, 10) === getDate(i + 1)
        );
        tempChartData.push(
          dataset.map((item) => {
            return {
              time: item.dt_txt,
              temp: item.main.temp,
              feels_like: item.main.feels_like,
            };
          })
        );
        otherChartData.push(
          dataset.map((item) => {
            return {
              time: item.dt_txt,
              clouds: item.clouds.all,
              humidity: item.main.humidity,
            };
          })
        );
      }
      setTempData(tempChartData);
      setOtherData(otherChartData);
    } else {
      setTempData([]);
      setOtherData([]);
    }
  }, [data.weather]);

  const getDate = (index) => {
    let today = new Date();
    today.setDate(today.getDate() + index);
    return today.toJSON().slice(0, 10);
  };

  const getDayOfWeek = (date) => {
    const newDay = new Date(date);
    const day = newDay.getDay();
    switch (day) {
      case 1:
        return "lun.";
      case 2:
        return "mar.";
      case 3:
        return "mer.";
      case 4:
        return "jeu.";
      case 5:
        return "ven.";
      case 6:
        return "sam.";
      default:
        return "dim.";
    }
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return isTempMode ? (
        <div className="custom-tooltip">
          <span>{label}</span>
          <span>{`Température: ${payload[0].value}°C`}</span>
          <span>{`Température ressentie: ${payload[1].value}°C`}</span>
        </div>
      ) : (
        <div className="custom-tooltip">
          <span>{label}</span>
          <span>{`Nuages: ${payload[0].value}%`}</span>
          <span>{`Humidité: ${payload[1].value}%`}</span>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="weather-chart-container">
      {isTempMode && tempData && otherData ? (
        <div className="weather-chart">
          <h3>Prévisions météo à 3 jours - Température</h3>
          {tempData.map((item, index) => (
            <ResponsiveContainer width="100%" height={120} key={index}>
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
                <XAxis
                  dataKey="time"
                  interval={2}
                  tickFormatter={(label) =>
                    `${getDayOfWeek(label.slice(0, 10))} ${label.slice(-8)}`
                  }
                />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="temp" fill="#eed473" />
                <Line type="monotone" dataKey="feels_like" stroke="#edbb13" />
              </ComposedChart>
            </ResponsiveContainer>
          ))}
        </div>
      ) : (
        <div className="weather-chart">
          <h3>Prévisions météo à 3 jours - Nuages et Humidité</h3>
          {otherData.map((item, index) => (
            <ResponsiveContainer width="100%" height={120} key={index}>
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
                <XAxis
                  dataKey="time"
                  interval={2}
                  tickFormatter={(label) =>
                    `${getDayOfWeek(label.slice(0, 10))} ${label.slice(-8)}`
                  }
                />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="clouds" fill="#0082A3" />
                <Line type="monotone" dataKey="humidity" stroke="#87ceeb" />
              </ComposedChart>
            </ResponsiveContainer>
          ))}
        </div>
      )}
      <button onClick={() => setIsTempMode(true)} disabled={isTempMode ? true : false}>Température</button>
      <button onClick={() => setIsTempMode(false)} disabled={isTempMode ? false : true}>Nuages et Humidité</button>
    </div>
  );
}
