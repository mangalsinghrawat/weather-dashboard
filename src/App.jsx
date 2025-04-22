import { useEffect } from "react";
import WeatherDashboard from "./components/dashboard/WeatherDashboard";
import { useThemeStore } from "./store/themeStore";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";


function App() {
  const { theme } = useThemeStore();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme); 
  }, [theme]); 

  return (
    <>
      <WeatherDashboard />
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={theme === "dark" ? "dark" : "light"}
      />
    </>
  );
}

export default App;
