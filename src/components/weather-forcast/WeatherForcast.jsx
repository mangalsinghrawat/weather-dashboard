import useWeatherStore from '../../store/weatherStore';
import { WeatherIconMap } from '../../utils/WeatherDataMaps';
import './WeatherForcast.css'

const WeatherForecast = () => {
    const { forecast } = useWeatherStore();
    console.log({forecast})

//   const forecastData = [
//     {
//       id: 1,
//       day: 'Sunday',
//       date: '03-02-2025',
//       temperature: 28.33,
//       condition: 'Clear Sky',
//       icon: '01d'
//     },
//     {
//       id: 2,
//       day: 'Monday',
//       date: '03-02-2025',
//       temperature: 20.33,
//       condition: 'Clear Sky',
//       icon: '02d'
//     },
//     {
//       id: 3,
//       day: 'Tuesday',
//       date: '03-02-2025',
//       temperature: 17.33,
//       condition: 'Rainy Sky',
//       icon: '03d'
//     },
//     {
//       id: 4,
//       day: 'Wednesday',
//       date: '03-02-2025',
//       temperature: 28.33,
//       condition: 'Cloudy Sky',
//       icon: '02d'
//     },
//     {
//       id: 5,
//       day: 'Thursday',
//       date: '03-02-2025',
//       temperature: -2,
//       condition: 'Snowy Sky',
//       icon: '07d'
//     }
//   ];

  return (
    <div className="forecast-container">
      <h3 className="forecast-title">5-Day Forecast</h3>
      <div className="forecast-card-list">
        {forecast && forecast.map((day) => (
          <div className="forecast-card" key={day.id}>
            <p className="forecast-day">{day.date}</p>
            <img
                    className="forecast-icon"
                    src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`}
            //   src={WeatherIconMap[day.icon]}
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
