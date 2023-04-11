import { Link } from "react-router-dom";
import "./Cards.css";

export default function Card({ id, name, origin, image, onClose }) {
  return (
    <div className="card">
      <div className="card-container">
        <img className="card-image" alt={name} src={image} />
        <button className="close-button" onClick={() => onClose(id)}>
          X
        </button>
        <Link className="detail-link" to={`/detail/${id}`}>
          <div className="card-details">
            <h2>{name}</h2>
            <p>Origen: {origin}</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
