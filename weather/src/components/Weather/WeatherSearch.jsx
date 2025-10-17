import React from "react";
import { getFlag } from "./utils"

export default function WeatherSearch({
    city,
    setCity,
    onSearch,
    suggestions,
    onSelect,
    fetchSuggestions
}) {
    return (
        <div className="search">
            <div className="inputContent">
                <input type="text"
                    className={`${suggestions.length > 0 ? "input" : ""}`}
                    placeholder="Введите город"
                    value={city}
                    onChange={(e) => {
                        setCity(e.target.value);
                        fetchSuggestions(e.target.value);
                    }
                    } />
                <button onClick={(e) => {
                    onSearch();
                }}>Найти</button>

            </div>
            {suggestions.length > 0 && (
                <ul className="suggestions">
                    {suggestions.map((s) => (
                        <li key={s.id}
                            onClick={() => {
                                onSelect(s);
                            }}>
                            {s.name}, {s.country}, {getFlag(s.country_code)}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}