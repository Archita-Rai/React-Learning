import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "New Delhi",
    feelsLike: 44.86,
    humidity: 69,
    temp: 37.86,
    tempMax: 37.86,
    tempMin: 37.86,
    weather: "overcast clouds",
  });

  let updateInfo = (newInfo) =>{
     setWeatherInfo(newInfo);
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Weather app</h2>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo}/>
    </div>
  );
}
