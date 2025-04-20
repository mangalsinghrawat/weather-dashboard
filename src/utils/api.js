/* eslint-disable no-debugger */
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const fetchWeatherByCity = async (lat, lon , unit) => {
  debugger
  // const { lat, lon } = await fetchCityDetails(city);
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?units=${unit}&lat=${lat}&lon=${lon}&appid=${API_KEY}`
  );
  // `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
  return await response.json();
};


export const fetchCityDetails = async (cityname) => {
  try {
    debugger
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${API_KEY}`;
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error(`City not found: ${cityname}`);
      }
  
      const data = await response.json();
  
      return {
        lat: data.coord.lat,
        lon: data.coord.lon,
      };
    } catch (error) {
      console.error('Error fetching city details:', error.message);
      return null;
    }
  };
  

export const fetchWeatherForcast = async (lat, lon , unit) => {
  // const { lat, lon } = await fetchCityDetails(city);
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?units=${unit}&lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
  );
  return await response.json();
};
