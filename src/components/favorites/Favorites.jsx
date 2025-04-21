import React, { useEffect, useState } from "react";
import "./Favorites.css";
import { WeatherIconMap } from "../../utils/WeatherDataMaps";
import { fetchFavoriteCities, removeFavoriteCity } from "../../utils/helper";
import useWeatherStore from "../../store/weatherStore";
import { RiDeleteBinLine } from "react-icons/ri";
import { toast } from "react-toastify";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const { favoriteCities,setFavoriteCities } = useWeatherStore();
  const [deleteId, setDeleteId] = useState(null);

  console.log({ favoriteCities });

  useEffect(() => {
    const data = fetchFavoriteCities();
    setFavorites(data);
  }, [favoriteCities]);

  const handleRemove = (id) => {
    setDeleteId(id);
    setTimeout(() => {
      removeFavoriteCity((city) => city.id === id);
      setFavorites(fetchFavoriteCities());
      setFavoriteCities(fetchFavoriteCities());
      setDeleteId(null);
      toast.success("City removed successfully!");
    }, 300);
  };

  return (
    <div className="favorite-container">
      <h3 className="favorite-title">Favorites</h3>
      {favorites.length === 0 ? (
        <div className="no-data-message">No Data Available</div>
      ) : (
        favorites?.map((item) => (
          <div
            className={`favorite-card ${
              deleteId === item.id ? "fade-out" : ""
            }`}
            key={item.id}>
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
              <span className="temp">{item.temperature}°</span>
            </div>
            <span className="card-remove" onClick={() => handleRemove(item.id)}>
              <RiDeleteBinLine />
            </span>
          </div>
        ))
      )}
    </div>
  );
};

export default Favorites;
