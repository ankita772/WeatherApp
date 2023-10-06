import React from "react";

const UnitChange = ({ isUnitSwitched, handleUnitChange }) => {
  console.log(isUnitSwitched);
  return (
    <div className="mt-4">
      <button
        className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-4 py-2 rounded-md hover:scale-105 transition-transform"
        onClick={handleUnitChange}
      >
        {`Change Unit ${isUnitSwitched ? "( imperial )" : "( metric )"}`}
        {/* Change Unit ({isUnitSwitched ? "imperial" : "metric"}) */}
        <i className="fas fa-cogs ml-2"></i>
      </button>
    </div>
  );
};

export default UnitChange;
