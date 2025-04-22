import { create } from "zustand";
import { fetchWeatherByCity, fetchWeatherForcast } from "../utils/api";
import { getFiveDayForecast } from "../utils/helper";

const useWeatherStore = create((set, get) => ({
  city: "mumbai",
  previousCity: null,
  unit: "metric",
  weather: null,
  forecast: null,
  isLoading: false,
  error: null,
  favoriteCities: [],

  setCity: (newCity) => {
    const currentCity = get().city;
    set({
      previousCity: currentCity,
      city: newCity,
    });
  },
  setUnit: (unit) => set({ unit }),
  setFavoriteCities: (cities) => set({ favoriteCities: cities }),
  fetchWeather: async (lat, lon, unit) => {
    set({ isLoading: true, error: null });
    try {
      const response = await fetchWeatherByCity(lat, lon, unit);
      set({ weather: response });
    } catch (err) {
      set({ error: err.message });
    } finally {
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
}));

export default useWeatherStore;
