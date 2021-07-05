import "./App.css";
import MainPage from "./Components/MainPage/MainPage";

function App() {
  return (
    <div className="App">
      <h1 className="App__title">Air quality Index</h1>
      <h3>
        {" "}
        This page shows real time aqi level for 12 major cities of India. The
        data is updated every second.
      </h3>
      <div className="mainpage__container">
        <MainPage />
      </div>
    </div>
  );
}

export default App;
