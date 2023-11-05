// import { useState } from "react";
// import Search from "./components/search/search";
// // import CurrentWeather from "./components/current-weather/current-weather";
// // import Forecast from "./components/forecast/forecast";
// // import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
import "./App.css";

// function App() {
//   // const [currentWeather, setCurrentWeather] = useState(null);
//   // const [forecast, setForecast] = useState(null);

//   const handleOnSearchChange = (searchData) => {
//     // const [lat, lon] = searchData.value.split(" ");
//     console.log(searchData);

//     // const currentWeatherFetch = fetch(
//     //   `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
//     // );
//     // const forecastFetch = fetch(
//     //   `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
//     // );

//   //   Promise.all([current  WeatherFetch, forecastFetch])
//   //     .then(async (response) => {
//   //       const weatherResponse = await response[0].json();
//   //       const forcastResponse = await response[1].json();

//   //       setCurrentWeather({ city: searchData.label, ...weatherResponse });
//   //       setForecast({ city: searchData.label, ...forcastResponse });
//   //     })
//   //     .catch(console.log);
//   };

//   return (
//     <div className="container">
//       <Search onSearchChange={handleOnSearchChange} />
//       {/* {currentWeather && <CurrentWeather data={currentWeather} />}
//       {forecast && <Forecast data={forecast} />} */}
//     </div>
//   );
// }

// export default App;



import React, { useState } from 'react';

const api = {
  key: "6899828b88d91fff28c79fc65f0680c9",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App(){
  

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&appid=${api.key}&units=metric`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  }

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (
      <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
        <main>
          <div className="search-box">
            <input 
              type="text"
              className="search-bar"
              placeholder="Search..."
              onChange={e => setQuery(e.target.value)}
              value={query}
              onKeyPress={search}
            />
          </div>
          {(typeof weather.main != "undefined") ? (
          <div>
            <div className="location-box">
              <div className="location">{weather.name}, {weather.sys.country}</div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">
                {Math.round(weather.main.temp)}°c
              </div>
              <div className="weather">{weather.weather[0].main}</div>
            </div>
          </div>
          ) : ('')}
        </main>
      </div>
  );
};

export default App;
