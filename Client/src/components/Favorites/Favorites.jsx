import { connect, useDispatch } from "react-redux";
import Card from "../Cards/Card";
import { filterCards, orderCards } from "../../redux/actions";
import { useState } from "react";
import "./Favorites.css";

const Favorites = ({ myFavorites }) => {
  const [aux, setAux] = useState(false);
  const dispatch = useDispatch();
  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(!aux);
  };
  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
    setAux(!aux);
  };
  return (
    <div className="select-container">
      <select onChange={handleOrder}>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>
      <select onChange={handleFilter}>
        <option value="allCharacters">All</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
      </select>
      {myFavorites?.map((fav) => {
        return (
          <Card
            key={fav.id}
            id={fav.id}
            name={fav.name}
            origin={fav.origin}
            image={fav.image}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
