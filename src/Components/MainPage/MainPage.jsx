import React, { useEffect, useState } from "react";
import AqiTable from "../Table/AqiTable";
import BarChartRecharts from "../BarChart/BarChartRecharts";
import CategoryCardDiv from "../CategoryCard/CategoryCardDiv";
import LineChart from "../LineChart/LineChart";
import Legend from "../Legend/Legend";
import "./MainPage.scss";

const WS_BASE_URL = "wss://city-ws.herokuapp.com/";

export default function MainPage() {
  const [dataObject, setDataObject] = useState({});
  const [selectedCity, setSelectedCity] = useState("Mumbai");

  const getLineChart = (e) => {
    console.log(e);
    setSelectedCity(e.target.innerText);
  };

  const updateDataFunc = (data) => {
    const timeStamp = Date.now();
    const updatedData = dataObject;
    data.forEach(({ city, aqi }) => {
      if (updatedData[city]) {
        updatedData[city].push({ aqi, timeStamp });
      } else {
        updatedData[city] = [{ aqi, timeStamp }];
      }
    });
    setDataObject({ ...updatedData });
  };

  useEffect(() => {
    const socket = new WebSocket(WS_BASE_URL);
    // socket.onopen = () => {
    //   console.log("connected");
    // };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      updateDataFunc(data);
    };
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <Legend/>
      <div className="main__page">
        <div className="table__container">
          <AqiTable dataObject={dataObject} getLineChart={getLineChart} />
        </div>
        <div className="charts__container">
          <BarChartRecharts dataObject={dataObject} />
          <LineChart city={selectedCity} cityData={dataObject[selectedCity]} />
        </div>
      </div>
      <CategoryCardDiv/>
      <div className="footer"> Created by <a href="https://github.com/anusha-sci">Anusha</a> </div>
    </>
  );
}
