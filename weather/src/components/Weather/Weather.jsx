import React, { useState, useEffect } from "react";
import { useWeather } from "./hooks/useWeather"
import { useSuggestions } from "./hooks/useSuggestions";
import WeatherSearch from "./WeatherSearch"
import WeatherResult from "./WeatherResult"
import "./weather.scss"

function Weather() {
  const [city, setCity] = useState("Казань");
  const {weather, loading, error, fetchWeather} = useWeather();
  const {suggestions, setSuggestions, fetchSuggestions} = useSuggestions();

  const handleSelect = (s) => {
    setCity(s.name);
    fetchWeather(s);
    setSuggestions([]);
  };

  return (
    <div className="weather">
      <div className="container">
        <h1>Погода</h1>
        <WeatherSearch
          city={city}
          setCity={setCity}
          onSearch={() => { setSuggestions([]); fetchWeather(city); }}
          suggestions={suggestions}
          onSelect={handleSelect}
          fetchSuggestions={fetchSuggestions} 
          />

        {loading && <p className="loading">Загрузка...</p>}
        {error && !loading && <p>Ошибочка</p>}
        {weather && !loading && <WeatherResult weather={weather} />}
      </div>
    </div>
  )
};
export default Weather;