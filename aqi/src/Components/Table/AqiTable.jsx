import React from "react";
import moment from "moment";
import "./AqiTable.scss";
import { getColorCode } from "../Utils";

export default function AqiTable({ dataObject, getLineChart }) {
  let rows_list = Object.entries(dataObject).map((entry) => {
    const [city, aqiData] = entry;
    const latestEntry = aqiData[aqiData.length - 1];

    return (
      <tr key={city}>
        <td className="city__row" value={city} onClick={(e) => getLineChart(e)}>
          {city}
        </td>
        <td
          className="city__row"
          style={{ color: getColorCode(latestEntry?.aqi) }}
        >
          {latestEntry?.aqi?.toFixed(2)}
        </td>
        <td>{moment(latestEntry?.timeStamp, "x").fromNow()}</td>
      </tr>
    );
  });

  return (
    <div className="table__div">
      <table>
        <thead>
          <tr>
            <th>City</th>
            <th>AQI</th>
            <th>Last Updated</th>
          </tr>
        </thead>
        <hr />
        <tbody>{dataObject && rows_list}</tbody>
      </table>
    </div>
  );
}
