import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";
import "./Nav.css";

export default function Nav({ onSearch, onLogout }) {
  return (
    <nav className="Nav">
      <div>
        <NavLink className="NavLink" to="/home">
          <button className="nav-button">Home</button>
        </NavLink>
        <NavLink className="NavLink" to="/about">
          <button className="nav-button">About</button>
        </NavLink>
        <NavLink className="NavLink" to="/logout">
          <button className="nav-button" onClick={onLogout}>
            Log out
          </button>
        </NavLink>
        <NavLink className="NavLink" to="/favorites">
          <button className="nav-button">Favorites</button>
        </NavLink>
      </div>
      <SearchBar onSearch={onSearch} />
    </nav>
  );
}
