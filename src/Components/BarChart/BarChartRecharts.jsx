import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { getColorCode } from "../Utils";
import "./BarChartRecharts.scss"


class CustomizedXAxisTick extends PureComponent {
  render() {
    const { x, y,  payload } = this.props;

    return (
      <g transform={`translate(${x + 15},${y})`}>
        <text
          x={0}
          y={0}
          dy={16}
          textAnchor="end"
          fill="#fff"
          transform="rotate(-35)"
          fontSize={12}
        >
          {payload.value}
        </text>
      </g>
    );
  }
}



export default function BarChartRecharts({ dataObject }) {

  const dataForBarChart = Object.entries(dataObject).map((entry) => {
    const [city, aqiData] = entry;
    const latestEntryAqi = aqiData[aqiData.length - 1].aqi;
    return { city, latestEntryAqi: Math.round(latestEntryAqi) };
  });
  return (
    <div className="barChart__container">
      <h3>AQI level for different cities</h3>
      <ResponsiveContainer width="100%" aspect={3}>
        <BarChart
          width={1000}
          height={500}
          data={dataForBarChart}
          margin={{
            top: 30,
            right: 30,
            left: 20,
            bottom: 55,
          }}
        >
          <CartesianGrid horizontal={true} vertical={false} />
          <XAxis
            dataKey="city"
            tick={<CustomizedXAxisTick />}
            minTickGap={0.5}
            axisLine={false}
            interval={0}
            tickMargin={2}
            label={{ value: 'Cities', position: 'insideBottom', offset: -53 , fill : "gray"}}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            label={{ value: 'AQI-level', angle: -90, position: 'insideBottomLeft' , fill : "gray"}}
            style={{
              fontSize: 12,
              fill: "white"
            }}
          />
          <Tooltip cursor={false} itemStyle={{ color: "black" }} />
          <Bar
            dataKey="latestEntryAqi"
            barSize={25}
            barGap={5}
            name="AQI-Level"
          >
            {dataForBarChart.map((entry, index) => {
              return <Cell key={`cell-${index}`} fill={getColorCode(entry.latestEntryAqi)} />;
            })}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
