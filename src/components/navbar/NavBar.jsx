import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

import SearchGif from '../search/SearchGif';


import './navbar.css';


const NavBar = () => {

  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState([]);

  const handleInputChange = e =>{
    setInputValue(e.target.value);
  }

  const handleSubmit = e =>{
    e.preventDefault();
    
    console.log(inputValue);
  
    navigate('/search');

    setInputValue('');
  }
  

  return (
    <div className='contenedor-nav'>
      <nav className='contenido-nav'>
          <Link to='/'>Home</Link>
          <Link to='/anime'>Anime</Link>
          <Link to='/games'>Game</Link>
      </nav>


      <form onSubmit={handleSubmit} className='contenido-input-search'>
          <input type="text" 
            placeholder='Buscar'
            value={inputValue}
            onChange={handleInputChange}
          />
      </form>
    </div>
  );
}

export default NavBar;
