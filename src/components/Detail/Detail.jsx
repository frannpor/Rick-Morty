import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Detail.css";

const URL_BASE = "https://be-a-rym.up.railway.app/api/character";
const API_KEY = "e0d387bbc5f6.3200c85b0191bb76efbb";

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  useEffect(() => {
    axios(`${URL_BASE}/${id}?key=${API_KEY}`).then(({ data }) => {
      if (data.name) {
        setCharacter(data);
      } else {
        alert("No hay personajes con ese ID");
      }
    });
    return setCharacter({});
  }, [id]);
  return (
    <div className="detail-card">
      <p className="character-id">ID: {character?.id}</p>
      <img
        className="detail-img"
        src={character?.image}
        alt={character?.name}
      />
      <div className="detail-content">
        <h2>Nombre: {character?.name}</h2>
        <p>Estado: {character?.status}</p>
        <p>Especie: {character?.species}</p>
        <p>Género: {character?.gender}</p>
        <p>Origen: {character?.origin?.name}</p>
      </div>
    </div>
  );
};

export default Detail;
