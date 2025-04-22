export const fetchFavoriteCities = () => {
  const data = localStorage.getItem("favorite_cities");
  return data ? JSON.parse(data) : [];
};

export const addFavoriteCity = (newItem) => {
  const existingData = fetchFavoriteCities();
  const updatedData = [...existingData, newItem];
  localStorage.setItem("favorite_cities", JSON.stringify(updatedData));
};

export const removeFavoriteCity = (conditionFn) => {
  const existingData = fetchFavoriteCities();
  const filteredData = existingData.filter((item) => !conditionFn(item));
  localStorage.setItem("favorite_cities", JSON.stringify(filteredData));
};

const today = new Date();
export function getFormattedDate() {
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0"); 
  const year = today.getFullYear();

  return `${day}-${month}-${year}`;
}
export const getDay = today.toLocaleDateString("en-US", { weekday: "long" });

export function getFiveDayForecast(apiResponse) {
  const dailyForecastMap = new Map();

  apiResponse?.list.forEach((item) => {
    const date = item.dt_txt.split(" ")[0];
    const time = item.dt_txt.split(" ")[1];

    if (time === "12:00:00" && !dailyForecastMap.has(date)) {
      dailyForecastMap.set(date, {
        id: item.dt, 
        date: new Date(item.dt_txt).toLocaleDateString("en-US", {
          weekday: "short",
          month: "short",
          day: "numeric",
        }),
        temperature: Math.round(item.main.temp),
        condition: item.weather[0].main,
        icon: item.weather[0].icon,
      });
    }
  });

  return Array.from(dailyForecastMap.values()).slice(0, 5); // Only first 5 days
}
