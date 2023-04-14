import "./Cards.css";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

function Card({id, name, origin, image, onClose, addFav, removeFav, myFavorites, gender,}) {
  const [isFav, setIsFav] = useState(false);
  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({ id, name, origin, image, gender });
    }
  };
  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [id, myFavorites]);

  return (
    <div className="card">
      <div className="card-container">
        <img className="card-image" alt={name} src={image} />
        <button onClick={handleFavorite}>{isFav ? "❤️" : "🤍"}</button>
        <button className="close-button" onClick={() => onClose(id)}>
          X
        </button>
        <Link className="detail-link" to={`/detail/${id}`}>
          <div className="card-details">
            <h2>{name}</h2>
            <p>Origen: {origin}</p>
          </div>
        </Link>|z
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
