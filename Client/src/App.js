import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import About from './components/About/About.jsx'
import Form from './components/Form/Form.jsx';
import Detail from './components/Detail/Detail.jsx';
import Favorites from './components/Favorites/Favorites.jsx'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

const URL = 'http://localhost:3001/rickandmorty/login/';
const URL_BASE = "http://localhost:3001/rickandmorty/character";

function App() {
   const location = useLocation()
   const navigate = useNavigate();
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);

   useEffect(() => {
      !access && navigate('/');
   }, [access, navigate]);

   const login = async (userData) => {
      try {
         const { email, password } = userData;
         const { data } = await axios(`${URL}?email=${email}&password=${password}`)
         const { access } = data;
         setAccess(access);
         access && navigate('/home');
      } catch (error) {
         console.log(error.message);
      }
   }

   const onSearch = async (id) => {
      try {
         const { data } = await axios(`${URL_BASE}/${id}`)
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         }
      } catch (error) {
         alert('¡No hay personajes con este ID!');
      }
   }

   const onClose = (id) => {
      const charactersFiltered = characters.filter(character => character.id !== id)
      setCharacters(charactersFiltered)
   }
   return (
      <div className='App'>
         {location.pathname !== '/' && <Nav onSearch={onSearch} setAccess={setAccess} />}
         <Routes>
            <Route path='/' element={<Form login={login} />} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='/favorites' element={<Favorites />} />
         </Routes>
      </div>
   );
}

export default App;