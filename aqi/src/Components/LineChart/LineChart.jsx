import React from "react";
import moment from "moment";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./LineChart.scss";
import { getColorCode } from "../Utils";

export default function LineChartSelectedCity({ city, cityData = [] }) {
  const dataForLineChart = cityData
    .slice(cityData.length - 20, cityData.length - 1)
    .map((item, index) => {
      const { aqi, timeStamp } = item;
      return {
        aqi: parseFloat(aqi.toFixed(2)),
        timeStamp: moment.utc(timeStamp).local().format("hh:mm:ss a"),
      };
    });
  return (
    <div className="lineChart__div">
      <h2>{`Current AQI for ${city}`}</h2>
      <div className="lineChart__container">
        <ResponsiveContainer width="100%" aspect={3}>
          <LineChart
            width={1000}
            height={400}
            data={dataForLineChart}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 40,
            }}
          >
            <CartesianGrid horizontal={true} vertical={false} />
            <XAxis
              dataKey="timeStamp"
              label={{
                value: "Time",
                position: "insideBottom",
                offset: -30,
                fill: "gray",
              }}
              style={{
                fontSize: 12,
                fill: "white",
              }}
            />
            <YAxis
              type="number"
              domain={[(dataMin) => dataMin - 10, (dataMax) => dataMax + 10]}
              label={{
                value: "Aqi-level",
                position: "insideLeft",
                angle: -90,
                offset: -10,
                fill: "gray",
              }}
              style={{
                fontSize: 12,
                fill: "white",
              }}
            />
            <Tooltip />
            <Line
              dot={false}
              type={"monotone"}
              dataKey="aqi"
              stroke={getColorCode(
                dataForLineChart[dataForLineChart.length - 1]?.aqi
              )}
              strokeWidth={3}
            />{" "}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
