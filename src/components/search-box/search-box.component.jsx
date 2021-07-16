import React from "react";
import "./search-box.style.css";

export const SearchBox = ({ searchField, placeholder, handleChange }) => {
  return (
    <div className="search">
      <input
        type="search"
        placeholder={placeholder}
        value={searchField}
        // NOTE: `onChange` is a React synthetic event! it's not a DOM event like when `onchange` is an attribute of an HTML element.
        onChange={handleChange}
      />
    </div>
  );
};
