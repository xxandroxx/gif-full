import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Anime from '../anime/Anime';
import Games from '../games/Games';
import Home from '../home/Home';
import NavBar from '../navbar/NavBar';
import SearchGif from '../search/SearchGif';

const AppRouter = () => {
  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/anime' element={<Anime />} />
            <Route path='/games' element={<Games />} />
            <Route path='/search' element={<SearchGif />} />
            <Route path='/' element={<Home />} />
        </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
