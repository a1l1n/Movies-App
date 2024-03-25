import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addFavMovie, addWatchedMov, addToWatchMov } from "../../Redux/Actions";
import { MdDone, MdFavoriteBorder, MdPlaylistAdd } from "react-icons/md";
import noPoster from "../../Img/no-poster.jpg";
import Swal from 'sweetalert2';
import Styles from "../Cards/Cards.module.css";
import '../../index.css';


export default function Cards({ title, poster, idMovie, type, year }) {
  const movieFav = useSelector(state => state.favMov);
  const movieWatched = useSelector(state => state.watchedMov);
  const movieToWatch = useSelector(state => state.toWatchMov);

  // Verifica si la película está en alguna lista
  const isInWatched = movieWatched.some(movie => movie.idMovie === idMovie);
  const isInFav = movieFav.some(movie => movie.idMovie === idMovie);
  const isInToWatch = movieToWatch.some(movie => movie.idMovie === idMovie);

  const [isWatchedSelected, setWatchedSelected] = useState(false);
  const [isFavSelected, setFavSelected] = useState(false);
  const [isToWatchSelected, setToWatchSelected] = useState(false);

  const dispatch = useDispatch();
  
  function addToWatched(movieInfo){
    dispatch(addWatchedMov(movieInfo));
    setWatchedSelected(true);
    Swal.fire({
      title: "Watched List",
      text: "This Movie is saved in your Watched List!",
      customClass: {
          popup: 'sweet-background'
      }
    })
  };
  
  function addTitle(movieInfo){
    dispatch(addFavMovie(movieInfo));
    setFavSelected(true);
    Swal.fire({
      title: "Favourite List", 
      text: "This Movie is saved in your Favs List!",
      customClass: {
          popup: 'sweet-background'
        }
      });
   };

function addToWatch(movieInfo){
    dispatch(addToWatchMov(movieInfo));
    setToWatchSelected(true);
    Swal.fire({
      title: "To Watch List",
      text: "This Movie is saved in your 'To Watch' List!",
      customClass: {
          popup: 'sweet-background'
      }
    });
  };
  
  return (
    <div className={Styles.cardsContainer}>
    <div className={Styles.container} key={idMovie} >
      {
        poster !== "N/A" ? <img className={Styles.cardsImage} src={poster} alt="Movie Cover" />
        : <img className={Styles.cardsImage} src={noPoster} alt="No poster Available" />
      }
        
        <div className={Styles.textContainer}>
        <Link className={Styles.cards_link_container} to={`/movie/${idMovie}`} style={{ textDecoration: 'none' }}>
          <span className={Styles.mTitle}>{title}</span>
          <div className={Styles.mType}>{type.toUpperCase()}</div>
          <div className={Styles.mYear}>{year}</div>
        </Link>
        </div>

         <div className={Styles.buttons}>
         <button
          className={
            isInWatched ? Styles.watchedActiveBtn
            : Styles.watchedBtn} 
          onClick={() => !isWatchedSelected && addToWatched (
          {title: title,
          idMovie: idMovie,
          type: type,
          year: year,
          poster: poster
          })}
          disabled={isWatchedSelected}>
            <MdDone />
          </button> 

        <button
          className={
            isInFav ? Styles.favActiveBtn
            : Styles.favsBtn}
          onClick={()=> !isFavSelected && addTitle (
          {title: title, 
          idMovie: idMovie,
          type: type,
          year: year,
          poster: poster})} 
          disabled={isFavSelected}> 
          <MdFavoriteBorder />
        </button>

        <button
          className={
            isInToWatch ? Styles.toWatchActiveBtn
            : Styles.toWatchBtn}
          onClick={() => !isToWatchSelected && addToWatch (
          {title: title,
          idMovie: idMovie,
          type: type,
          year: year,
          poster: poster
          })}
          disabled={isToWatchSelected}>
          <MdPlaylistAdd />
        </button> 
        </div>
      </div>
    </div>
  )
}
