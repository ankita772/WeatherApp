import { useState } from "react";
import Search from "./components/Search";
import UnitChange from "./components/UnitChange";
import Weather from "./components/Weather";
import API from "./services/api";
import { ENDPOINTS, WEATHER_TYPES_ICON } from "./config/constants";
import { toast } from "react-toastify";

function App() {
  const [weather, setWeather] = useState(null);
  const [isUnitSwitched, switchUnit] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const onSearch = async (name, switchingUnit = false) => {
    try {
      setLoading(true);
      const response = await API.get(ENDPOINTS.WEATHER, {
        q: name,
        units: switchingUnit ? "imperial" : "metric",
      });
      if (response.code === false) {
        toast.error(response.message);
      } else {
        setWeather(response.data);
      }
    } catch (error) {
      toast.error(error.message);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center flex-col bg-gray-900 text-white">
      <h1 className="text-3xl font-semibold mb-4">Weather App</h1>
      <Search handleSearch={onSearch} />
      {weather && (
        <>
          <Weather
            city={weather?.name}
            temperature={weather?.main?.temp}
            description={weather?.weather[0]?.main}
            wind={weather?.wind?.speed}
            humidity={weather?.main?.humidity}
            icon={WEATHER_TYPES_ICON[weather?.weather[0]?.main]}
            unit={isUnitSwitched}
            isLoading={isLoading}
          />
          <UnitChange
            isUnitSwitched={isUnitSwitched}
            handleUnitChange={() => {
              const unitSwitched = !isUnitSwitched;
              onSearch(weather?.name, unitSwitched);
              switchUnit(unitSwitched);
            }}
          />
        </>
      )}
    </div>
  );
}

export default App;
