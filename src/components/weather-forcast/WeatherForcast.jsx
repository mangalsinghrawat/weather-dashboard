import useWeatherStore from "../../store/weatherStore";
import "./WeatherForcast.css";

const WeatherForecast = () => {
  const { forecast } = useWeatherStore();
  console.log({ forecast });

  return (
    <div className="forecast-container">
      <h3 className="forecast-title">5-Day Forecast</h3>
      <div className="forecast-card-list">
        {forecast &&
          forecast.map((day) => (
            <div className="forecast-card" key={day.id}>
              <p className="forecast-day">{day.date}</p>
              <img
                className="forecast-icon"
                src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`}
                alt={`${day.condition} icon`}
              />
              <p className="forecast-temp">{day.temperature}°C</p>
              <p className="forecast-condition">{day.condition}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default WeatherForecast;
