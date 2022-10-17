import React from "react";
import Cards from "../../Components/Cards/Cards";
import Carousel from "../../Components/Carousel/Carousel";
import Styles from "./Home.module.css";
import { useSelector } from "react-redux";

/* Agregar un footer con información sobre la página API de donde se obtiene la información? O simplemente un About con la info pertinente (o ambas) */
// Método que controle que no se repitan los Favs
// Método que deshabilite el buscador si no tiene un valor ingresado
// Alert que avise si lo que se busca no se encuentra
/* Agregar un 404 por si no encuentra una peli */

export default function Home(){
const movies = useSelector(state => state.loadMov);

    return(
        <div>
            
            <div className={Styles.container}>
                {
                !movies.length ? (<Carousel />) :
                movies?.map(m => {
                return (
                    <Cards
                    className={Styles.cardsContainer}
                    key={m.imdbID}
                    idMovie={m.imdbID}
                    title={m.Title}
                    poster={m.Poster}
                    type={m.Type}
                    year={m.Year}
                    />)
                }
                )} 
            </div>
        </div>
    )
};

