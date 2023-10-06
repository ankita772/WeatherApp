import React, { useState } from "react";

const Search = ({ handleSearch }) => {
  const [searchText, setSearchText] = useState("");
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Enter a city"
        className="border rounded-md p-2 bg-gray-800 text-white"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2 hover:bg-blue-600"
        onClick={() => handleSearch(searchText)}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
