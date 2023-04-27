import React, { useState } from "react";
import "./Nav.css"

const SearchBar = ({ onSearch }) => {
  const [id, setId] = useState("");
  function handleChange(event) {
    setId(event.target.value);
  }
  return (
    <div className="search-container">
      <input className= "search-input" type="search" value={id} onChange={handleChange} />
      <button className="search-button" onClick={() => {onSearch(id); setId("")}}>Agregar</button>
    </div>
  );
};

export default SearchBar;