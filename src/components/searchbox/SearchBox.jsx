import React, { useRef } from "react";
import "./SearchBox.css";
import useWeatherStore from "../../store/weatherStore";
import { toast } from "react-toastify";

const SearchBox = () => {
  const { setCity } = useWeatherStore();
  const cityRef = useRef();

  const handleSearchClick = () => {
    const regex = /^[a-zA-Z\s'-]{2,50}$/;
    const value = cityRef.current.value.trim();
    if (regex.test(value)) {
      setCity(value);
    } else {
      toast.error("Enter a valid City!");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearchClick();
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
          onKeyDown={handleKeyDown}
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
