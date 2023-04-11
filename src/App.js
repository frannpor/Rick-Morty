import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import About from './components/About/About.jsx'
import Form from './components/Form/Form.jsx';
import Detail from './components/Detail/Detail.jsx';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

const URL_BASE = 'https://be-a-rym.up.railway.app/api/character'
const API_KEY = 'e0d387bbc5f6.3200c85b0191bb76efbb'

function App() {
   const location = useLocation()
   const [characters, setCharacters] = useState([]);
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const EMAIL = 'frannporciel@gmail.com';
   const PASSWORD = '42323332';
   
   const login = (data) => {
      if (data.password === PASSWORD && data.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }
   
      useEffect(() => {
         !access && navigate('/');
      }, [access, navigate]);

   const onSearch = (id) => {
      axios(`${URL_BASE}/${id}?key=${API_KEY}`).then(response => response.data).then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {
      const newCharacters = characters.filter((character) => character.id !== id
      );
      setCharacters(newCharacters);
   }


   return (
      <div className='App'>
         {location.pathname !== '/' && <Nav onSearch={onSearch} />}
         <Routes>
            <Route path="/" element={<Form login={login} />} />
            <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
            <Route path="/about" element={<About />} />
            <Route path="/detail/:id" element={<Detail />} />
         </Routes>
      </div>
   );
}

export default App;