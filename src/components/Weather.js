import Loader from "./Loader";

const Weather = ({
  city,
  temperature,
  description,
  icon,
  wind,
  humidity,
  unit,
  isLoading,
}) => {
  if (isLoading) return <Loader />;
  else
    return (
      <div className="bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 p-8 rounded-lg shadow-lg text-white">
        <div className="mt-2">
          <img
            src={icon}
            alt="Weather Icon"
            width="200" // Increase the width to make the SVG icon larger
            height="200" // Increase the height to make the SVG icon larger
            className="mx-auto"
          />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-semibold">{city}</h2>
            <p className="text-lg">{description}</p>
          </div>
          <div className="text-2xl">
            {temperature} {!unit ? "°C" : "°F"}
          </div>
        </div>
        <div className="mt-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center">
              <i className="fas fa-wind text-xl mr-2"></i>
              <p className="text-lg">
                Wind: {wind}
                {!unit ? " m/s" : " mil/s"}
              </p>
            </div>
            <div className="flex items-center">
              <i className="fas fa-tint text-xl mr-2"></i>
              <p className="text-lg">Humidity: {humidity}%</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Weather;
