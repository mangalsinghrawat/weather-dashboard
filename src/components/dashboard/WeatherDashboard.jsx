import React, { useEffect } from "react";
import "./WeatherDashboard.css";
import Weather from "../weather/Weather";
import WeatherForcast from "../weather-forcast/WeatherForcast";
import Favorites from "../favorites/Favorites";
import Header from "../header/header";
import useWeatherStore from "../../store/weatherStore";
import { fetchCityDetails } from "../../utils/api";
import { toast } from "react-toastify";

const WeatherDashboard = () => {
  const {
    city,
    unit,
    isLoading,
    fetchWeather,
    fetchForecast,
  } = useWeatherStore();

  useEffect(() => {
    if (!city) return;

    (async () => {
      try {
        const data = await fetchCityDetails(city); 
        const { lat, lon } = data;
  
        if (lat && lon) {
          fetchWeather(lat, lon, unit);
          fetchForecast(lat, lon, unit);
        }
      } catch (error) {
        toast.error("City Not Found.", error)
      }
    })();
  }, [city, unit]);

  if (isLoading) return <p>Loading...</p>;


  return (
    <div className="dashboard-wrapper">
      <Header />
      <div className="main-dashboard">
        <div className="left-column">
          <div className="current-weather"><Weather /></div>
          <div className="weather-forcast"><WeatherForcast /></div>
        </div>
        <div className="favorites"><Favorites /></div>
      </div>
    </div>
  );
};

export default WeatherDashboard;
