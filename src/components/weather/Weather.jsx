import React, { useEffect, useState } from "react";
import "./Weather.css";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { unitsMap, WeatherIconMap } from "../../utils/WeatherDataMaps";
import useWeatherStore from "../../store/weatherStore";
import { addFavoriteCity, fetchFavoriteCities, getDay, getFormattedDate, removeFavoriteCity } from "../../utils/helper";

const Weather = () => {
  const { city, unit, setUnit, weather, forecast, setFavoriteCities } = useWeatherStore();
  const [isFavorite, setIsFavorite] = useState(false);

  const weatherInfo = {
    city: weather?.name,
    id: weather?.id,
    country: weather?.sys.country,
    temperature: Math.floor(weather?.main.temp),
    windSpeed: weather?.wind.speed,
    humidity: weather?.main.humidity,
    condition: weather?.weather[0].main,
    icon: weather?.weather[0].icon,
    feelLike: weather?.main.feels_like,
    day: getDay,
    date: getFormattedDate(),
  };
  console.log({ weather });
  console.log({ city });
  console.log({ forecast });
  const cities = fetchFavoriteCities();
  console.log({cities})

  function isCityIdPresent(id) {
    return cities.some(city => city.id === id);
  }
  useEffect(() => {
    if (weather && isCityIdPresent(weather.id)) {
      setIsFavorite(true);
    }
  }, [weather])
  
  const handleFavoriteClick = () => {
    
    if (!isCityIdPresent(weatherInfo.id)) {
      setIsFavorite(!isFavorite)
      addFavoriteCity(weatherInfo)
    }
    else{
      removeFavoriteCity((item) => item.id == weather.id)
      setIsFavorite(false)
    }
    setFavoriteCities(cities);
    
  }

//   const mock = {
//     city: "Mumbai",
//     country: "India",
//     // day: "Sunday",
//     // date: "03-02-2025",
//     humidity: 63,
//     windSpeed: 5.33,
//     temperature: 28.33,
//     condition: "Clear Sky",
//     icon: "02d",
//     feelLike: "Clear",
//   };

  return (
    <>
      {weather && (
        <div className="weather-container glass-card">
          <div className="header-div">
            <div className="location-div">
              <h4>
                <IoLocationOutline />
                {`${weatherInfo.city}, ${weatherInfo.country}`}
              </h4>
              <span onClick={handleFavoriteClick}>
                {isFavorite ? <FaHeart color="red" /> : <FaRegHeart />}
              </span>
            </div>

            <select value={unit} onChange={(e) => setUnit(e.target.value)}>
              <option value="metric">°C</option>
              <option value="imperial">°F</option>
            </select>
          </div>

          <div className="main-div">
            <div className="day-div">
              <p>{weatherInfo.day}</p>
              <p>{weatherInfo.date}</p>
            </div>
            <div className="icon-div">
              <img src={`https://openweathermap.org/img/wn/${weatherInfo.icon}@2x.png`} alt="weather-icon" />
            </div>
            <div className="temp-div">
              <h2>
                {weatherInfo.temperature}°{unitsMap[unit]}
              </h2>
              <p>{weatherInfo.condition}</p>
            </div>
          </div>

          <div className="details-div">
            <p className="weather-details">Humidity: {weatherInfo.humidity}%</p>
            <p className="weather-details">
              Wind: {weatherInfo.windSpeed} km/h
            </p>
            <p className="weather-details">
              Feels Like: {weatherInfo.feelLike}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Weather;
