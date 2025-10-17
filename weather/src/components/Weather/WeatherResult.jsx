import React from "react";
import { getFlag, code } from "./utils";
import { formatTime } from "./utils";

export default function WeatherResult({weather}) {
const formattedTime = formatTime(weather.timezone);

return(
    <div className={`result ${weather.is_day === 1? "day" : "night"}`}>
        <div className="city-info">
            <div className="city">
                {weather.city}, {weather.country} {getFlag(weather.countryCode)}
            </div>
            <div className="time">
                <span>{formattedTime}</span>
            </div>
        </div>
        <div className="temp">
            <h2>{weather.temp}°С</h2>
            <div className="condition">
                <p className="weather-code">{code[weather.code] || "Неизвестно"}</p>
                <p className="wind">💨 {weather.wind} км/ч</p>
            </div>
        </div>
    </div>
);
}