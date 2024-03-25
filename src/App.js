import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from "./Components/NavBar/NavBar";
import Favs from './Pages/Favs/Favs';
import Home from './Pages/Home/Home';
import Card from "./Pages/Card/Card";
import Footer from './Components/Footer/Footer'
import MovieList from './Pages/MovieList/Movie-List';
import "./App.module.css";
import { About } from './Pages/About/About';

function App() {
  return (
   <div>
    <NavBar className="navbar"/>
    <Routes>
      <Route path="movie-list" element={<MovieList />}/>
       <Route exact path="/home" element={<Home />} />
       <Route path="/favs" element={<Favs />} />
       <Route path="/movie/:idMovie" element={<Card />} />
       <Route path="/about" element={<About />} />
     </Routes>
    <Footer />
   </div>
  );
}

export default App;
