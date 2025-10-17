export function getFlag(countryCode) {
  if (!countryCode) return "🏳️";
  return countryCode
    .toUpperCase()
    .replace(/./g, (char) => String.fromCodePoint(127397 + char.charCodeAt()));
}

export const code = {
    0: "☀️ Ясно",
    1: "🌤️ В основном ясно", 
    2: "⛅ Переменная облачность",
    3: "☁️ Пасмурно",
    45: "🌫️ Туман",
    48: "🌫️ Оседающий туман",
    51: "🌦️ Мелкий дождь",
    61: "🌧️ Дождь",
    71: "❄️ Снег",
    80: "🌧️ Ливень",
    95: "⛈️ Гроза",
};

export function formatTime(timezone = "Europe/Moscow") {
    const datePart = new Intl.DateTimeFormat("ru-RU", {
        day: "2-digit",
        month: "long",
        timeZone: timezone,
    }).format(new Date());
    
    const timePart = Intl.DateTimeFormat("ru-RU", {
        hour:"2-digit",
        minute: "2-digit",
        timeZone: timezone,
    }).format(new Date());

    return `${datePart}, ${timePart}`;
}