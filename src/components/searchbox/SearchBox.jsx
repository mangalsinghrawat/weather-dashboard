import React, { useRef } from "react";
import "./SearchBox.css";
import useWeatherStore from "../../store/weatherStore";

const SearchBox = () => {
  const { setCity } = useWeatherStore();
  const cityRef = useRef();

  const handleSearchClick = () => {
    const value = cityRef.current.value.trim();
    if (value) {
      setCity(value);
    }
  };

  return (
    <div className="searchbox-container">
      <div className="searchbox-wrapper">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          ref={cityRef}
          className="input-searchbox"
          placeholder="Search City Name..."
        />
      </div>
      <button className="btn-search" onClick={handleSearchClick}>
        Search
      </button>
    </div>
  );
};

export default SearchBox;
