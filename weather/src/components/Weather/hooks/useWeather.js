import { useState } from "react";

export function useWeather() {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const fetchWeather = async (cityOrObj) => {
        if (!cityOrObj || (typeof cityOrObj === "string" && !cityOrObj.trim()))
            return;
        setLoading(true);
        setError("");

        try {
            let latitude, longitude, name, country, country_code;

            if (typeof cityOrObj === "object") {
                ({ latitude, longitude, name, country, country_code } = cityOrObj);
            } else {
                const geoRes = await fetch(
                    `https://geocoding-api.open-meteo.com/v1/search?name=${cityOrObj}&count=1&language=ru`
                );
                const geoData = await geoRes.json();

                if (!geoData?.results || geoData?.results?.length === 0) {
                    setWeather(null);
                    setError("Город не найден");
                    return;
                }
                const g = geoData.results[0];
                ({ latitude, longitude, name, country, country_code } = g);
            }
            const weatherRes = await fetch(
                `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
            );
            const weatherData = await weatherRes.json();
            console.log(weatherData);

            setWeather({
                city: name,
                country,
                temp: Math.round(weatherData.current_weather.temperature),
                wind: Math.round(weatherData.current_weather.windspeed),
                temp: Math.round(weatherData.current_weather.temperature),
                is_day: weatherData.current_weather.is_day,
                code: weatherData.current_weather.weathercode,
                countryCode: country_code,
                time: weatherData.current_weather.time,
                timezone: weatherData.timezone
            });
        }
        catch (err) {
            setError(err.message || "ошибка загрузки");
            setWeather(null);
        }
        finally {
            setLoading(false);
        }
    };

    return {weather, loading, error, fetchWeather};
}
