import "./Cards.css";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

function Card({ id, name, species, gender, image, onClose, addFav, removeFav, myFavorites, origin }) {
  const [isFav, setIsFav] = useState(false);
  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({id, name, species, gender, image, onClose, origin});
    }
  };
  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites, id]);

  return (
    <div className="card">
      <div className="card-container">
        <img className="card-image" alt={name} src={image} />
        <button className="fav-button" onClick={handleFavorite}>{isFav ? "❤️" : "🤍"}</button>
        <button className="close-button" onClick={() => onClose(id)}>
          X
        </button>
        <Link className="detail-link" to={`/detail/${id}`}>
          <div className="card-details">
            <h2>{name}</h2>
            <p>Origen:{origin}</p>
          </div>
        </Link>
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
