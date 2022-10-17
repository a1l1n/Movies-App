import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addFavMovie } from "../../Redux/Actions";
import Styles from "./Cards.module.css";


export default function Cards({ title, poster, idMovie, type, year }) {
  const movie = useSelector(state=> state.favMov);
  const dispatch = useDispatch();

   function addTitle(movie){
    dispatch(addFavMovie(movie));
    alert("Movie saved in Favs!")
   }

  return (
    <div className={Styles.cardsContainer}>
    <div className={Styles.container} key={idMovie} >
            <img className={Styles.cardsImage} src={poster} alt="Movie Cover" />
       
        <Link to={`/movie/${idMovie}`} style={{ textDecoration: 'none' }}>
        <div className={Styles.textContainer}>
          <span className={Styles.mTitle}>{title}</span>
          <span className={Styles.mType}>{type}</span>
          <span className={Styles.mYear}>{year}</span>
        </div>
        </Link>
       
        <div className={Styles.button}>
            <button
              className={Styles.btn}
              onClick={()=> addTitle(
              {title: title, 
              idMovie: idMovie,
              type: type,
              year: year,
              poster: poster})}
              > Favs
            </button>
        </div>
    </div>
    </div>
  )
}
