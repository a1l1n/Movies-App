import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addFavMovie, addWatchedMov, addToWatchMov } from "../../Redux/Actions";
import { MdDone, MdFavoriteBorder, MdPlaylistAdd } from "react-icons/md";
import Swal from 'sweetalert2'
import Styles from "../Cards/Cards.module.css";


export default function Cards({ title, poster, idMovie, type, year }) {
  const dispatch = useDispatch();
  
  function addToWatched(movieInfo){
    dispatch(addWatchedMov(movieInfo))
    Swal.fire("This Movie is saved in your list of Watched!")
  };
  
  function addTitle(movieInfo){ //---------------------------------------------------------------
    dispatch(addFavMovie(movieInfo));
    Swal.fire("This Movie is saved in Favs!")
   };

function addToWatch(movieInfo){
    dispatch(addToWatchMov(movieInfo))
    Swal.fire("This Movie is saved in your 'To Watch' list!")
  };

  
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

         <div className={Styles.buttons}>
         <button
          className={Styles.watchedBtn} 
          onClick={() => addToWatched(
          {title: title,
          idMovie: idMovie,
          type: type,
          year: year,
          poster: poster
          })}><MdDone />
          </button> 

        <button
          className={Styles.favsBtn}
          onClick={()=> addTitle(
          {title: title, 
          idMovie: idMovie,
          type: type,
          year: year,
          poster: poster})} 
          > <MdFavoriteBorder />
        </button>

        <button
          className={Styles.toWatchBtn}
          onClick={() => addToWatch(
          {title: title,
          idMovie: idMovie,
          type: type,
          year: year,
          poster: poster
          })}>
          <MdPlaylistAdd />
        </button> 
        </div>

      </div>
    </div>
  )
}
