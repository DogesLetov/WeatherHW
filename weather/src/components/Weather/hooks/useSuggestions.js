import { useState } from "react";

export function useSuggestions() {

    const [suggestions, setSuggestions] = useState([]);

    const fetchSuggestions = async (query) => {
        if (!query.trim()) return setSuggestions([]);
        try {
            const res = await fetch(
                `https://geocoding-api.open-meteo.com/v1/search?name=${query}&count=10&language=ru`
            );
            const data = await res.json();
            if (data.results) {
                const unique = Array.from(
                    new Map(
                        data.results.map((item) => [`${item.name}_${item.country}`, item])
                    ).values()
                );
                const filtered = unique.sort((a, b) => {
                    const aExact = a.name.toLowerCase() === query.toLowerCase();
                    const bExact = b.name.toLowerCase() === query.toLowerCase();
                    return bExact - aExact;
                });

                setSuggestions(filtered.slice(0, 5));
            } else {
                setSuggestions([]);
            }
        } catch (err) {
            console.error("Ошибка при получении подсказок:", err);
        }
    };

    return {suggestions, setSuggestions, fetchSuggestions};
}
