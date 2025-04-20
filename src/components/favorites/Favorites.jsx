import React, { useEffect, useState } from "react";
import "./Favorites.css";
import { WeatherIconMap } from "../../utils/WeatherDataMaps";
import { fetchFavoriteCities } from "../../utils/helper";
import useWeatherStore from "../../store/weatherStore";

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);
    const { favoriteCities } = useWeatherStore();
    
    console.log({favoriteCities})
    
    useEffect(() => {
        const data = fetchFavoriteCities();
        setFavorites(data)
        
    },[favoriteCities])
  //   const favoriteData = [
  //     {
  //       id: 1,
  //       day: 'Sunday',
  //       date: '03-02-2025',
  //       temperatureHigh: 32,
  //       temperatureLow: 24,
  //       condition: 'Sunny',
  //       icon: '01d',
  //       city: 'Canberra',
  //       country: 'Australia',
  //     },
  //     {
  //       id: 2,
  //       day: 'Monday',
  //       date: '03-02-2025',
  //       temperatureHigh: 20,
  //       temperatureLow: 12,
  //       condition: 'Clear',
  //       icon: '02d',
  //       city: 'London',
  //       country: 'UK',
  //     },
  //     {
  //       id: 3,
  //       day: 'Tuesday',
  //       date: '03-02-2025',
  //       temperatureHigh: 17,
  //       temperatureLow: 10,
  //       condition: 'Rainy',
  //       icon: '03d',
  //       city: 'Bangalore',
  //       country: 'India',
  //     },
  //     {
  //       id: 4,
  //       day: 'Tuesday',
  //       date: '03-02-2025',
  //       temperatureHigh: 17,
  //       temperatureLow: 10,
  //       condition: 'Rainy',
  //       icon: '03d',
  //       city: 'Bangalore',
  //       country: 'India',
  //     },
  //     {
  //       id: 5,
  //       day: 'Tuesday',
  //       date: '03-02-2025',
  //       temperatureHigh: 17,
  //       temperatureLow: 10,
  //       condition: 'Rainy',
  //       icon: '03d',
  //       city: 'Bangalore',
  //       country: 'India',
  //     }
  //   ];

  return (
    <div className="favorite-container">
      <h3 className="favorite-title">Favorites</h3>
      {!favorites ? (
        <>No Data Available</>
      ) : (
        favorites?.map((item) => (
          <div className="favorite-card" key={item.id}>
            <div className="weather-left">
              <span className="country">{item.country}</span>
              <h4 className="city">{item.city}</h4>
              <span className="condition">{item.condition}</span>
            </div>
            <div className="weather-center">
              <img
                src={`https://openweathermap.org/img/wn/${item.icon}@2x.png`}
                alt="weather-icon"
              />
            </div>
            <div className="weather-right">
              <span className="temp-high">{item.temperature}°</span>
              {/* <span className="temp-low">/{item.temperatureLow}°</span> */}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Favorites;
