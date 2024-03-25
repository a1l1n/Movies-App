import React from "react";
import Carousel from "../../Components/Carousel/Carousel";
import SearchBar from "../../Components/SearchBar/SearchBar";
import { PopcornIcon } from "../../Components/SVGs/PopcornIcon";
import Styles from "./Home.module.css";

// Método que controle que no se repitan los Favs
/* Agregar un 404 por si no encuentra una peli */

export default function Home(){
    return (
    <div className={Styles.container}>

      <div className={Styles.home_searchBar_container}>
        <div className={Styles.home_searchBar_card}>

          <div className={Styles.home_text_container}>
            <h1>PICK A TITLE</h1>
            <h2>And start your Movie List!</h2>
          <SearchBar />
          </div>
          
        </div>
      </div>

      <div className={Styles.home_recom_container}>
        <Carousel />
      </div>

        <div className={Styles.home_recom_icon}>
          <PopcornIcon />
        </div>
        
      <div className={Styles.home_youtube_container}>
        <h1>Oscar winners trailers</h1>
        
        <div className={Styles.home_trailer_container}>
          <div className={Styles.home_trailer_card}>
            <h1>Pelicula 1</h1>
          </div>
          <div className={Styles.home_trailer_card}>
            <h1>Pelicula 2</h1>
          </div>
          <div className={Styles.home_trailer_card}>
            <h1>Pelicula 3</h1>
          </div>
        </div>

      </div>

    </div>
    )
};

