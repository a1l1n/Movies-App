import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from "./Components/NavBar/NavBar";
import Favs from './Pages/Favs/Favs';
import Home from './Pages/Home/Home';
import Card from "./Pages/Card/Card";
import Styles from "./App.module.css"

function App() {
  return (
   <div>
    <NavBar />
       <div className={Styles.separator}></div>
    <Routes>
       <Route exact path="/" element={<Home />} />
       <Route path="/favs" element={<Favs />} />
      {/* SIEMPRE AL INGRESAR INFO X PARAMS, QUE COINCIDA LA DATA X URL CON LO ESPECIFICADO TANTO EN EL COMPONENTE COMO EN LA ACTION(REDUX) */}
       <Route path="/movie/:idMovie" element={<Card />} />
     </Routes>
   </div>
  );
}

export default App;
