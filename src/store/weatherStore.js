import { create } from "zustand";
import { fetchWeatherByCity, fetchWeatherByCityId, fetchWeatherForcast } from "../utils/api";
import { getFiveDayForecast } from "../utils/helper";

const useWeatherStore = create((set) => ({
    city: 'mumbai',
    unit:'metric',
    weather: null,
    forecast: null,
    isLoading: false,
    error: null,
    favoriteCities: [],


    setCity: (city) => set({ city }),
    setUnit: (unit) => set({ unit }),
    setFavoriteCities:  (cities) => set({ favoriteCities: cities }),
    fetchWeather: async (lat, lon, unit) => {
        set({ isLoading: true, error: null });
        try {
            const response = await fetchWeatherByCity(lat, lon, unit);
            set({ weather: response });
        }
        catch(err){
            set({ error: err.message });
        }
        finally {
            set({ isLoading: false });
        }
    },
    
    fetchForecast: async (lat, lon, unit) => {
        set({ isLoading: true, error: null });
        try {
            const data = await fetchWeatherForcast(lat, lon, unit);
            const filteredData = getFiveDayForecast(data);
          set({ forecast: filteredData });
        } catch (err) {
          set({ error: err.message });
        } finally {
          set({ isLoading: false });
        }    
    },
    fetchByCityId: async (cityId, unit) => {
        set({ isLoading: true, error: null });
        try {
            const response = await fetchWeatherByCityId(cityId, unit);
            set({ weather: response });
        }
        catch(err){
            set({ error: err.message });
        }
        finally {
            set({ isLoading: false });
        }
    },
}));

export default useWeatherStore;