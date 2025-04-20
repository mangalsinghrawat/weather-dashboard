import { useEffect } from "react";
import WeatherDashboard from "./components/dashboard/WeatherDashboard";
import { useThemeStore } from "./store/themeStore";

function App() {
  const { theme } = useThemeStore();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme); // Apply theme to document root
  }, [theme]); 

  return <WeatherDashboard />;
}

export default App;
