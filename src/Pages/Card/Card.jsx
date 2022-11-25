import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from 'react-router-dom';
import { movieDetail, addFavMovie, addWatchedMov, addToWatchMov, cleanDetail, cleanMovies } from "../../Redux/Actions";
import { MdDone, MdFavoriteBorder, MdPlaylistAdd } from "react-icons/md";
import Swal from 'sweetalert2'
import Styles from "./Card.module.css";


export default function Card(){
    const movieInfo = useSelector(state => state.detailMov);
    const movieFav = useSelector(state => state.favMov);
    const movieWatched = useSelector(state => state.watchedMov);
    const movieToWatch = useSelector(state => state.toWatchMov);

    const dispatch = useDispatch();
    const { idMovie } = useParams(); 
    const navigate = useNavigate();

    useEffect(()=> { //------------------------------------------------------------------------
        dispatch(movieDetail(idMovie))
    }, [dispatch, idMovie]);

    
    function addWatched(movieInfo){
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

      function saveToLocalStorage (items){
        localStorage.setItem("")
      }

    function goBack(){ //----------------------------------------------------------------------
        dispatch(cleanDetail());
        dispatch(cleanMovies());
        navigate("/home");
    };

    localStorage.setItem("Card_WatchedMovies", JSON.stringify(movieWatched));
    localStorage.setItem("Card_FavMovies", JSON.stringify(movieFav));
    localStorage.setItem("Card_toWatchMovies", JSON.stringify(movieToWatch));

    return (
        <div className={Styles.infoContainer}>
            <div className={Styles.idContainer}>
                <img className={Styles.cardImage} src={movieInfo.Poster} alt="Movie Cover" />
            </div>
            <div className={Styles.textContainer}>
                <span><p>Title:</p>{`${movieInfo.Title}`}</span>
                <span><p>Released:</p> {`${movieInfo.Released}`}</span>
                <span><p>Runtime: </p>{`${movieInfo.Runtime}`}</span>
                <span><p>Genre: </p>{`${movieInfo.Genre}`}</span>
                <span><p>Director: </p>{`${movieInfo.Director}`}</span>
                <span><p>Writer: </p>{`${movieInfo.Writer}`}</span>
                <span><p>Actors: </p>{`${movieInfo.Actors}`}</span>
                <span><p>Lenguage: </p>{`${movieInfo.Lenguage}`}</span>
                <span><p>Awards: </p>{`${movieInfo.Awards}`}</span>
                <div className={Styles.plot}><p>Plot </p>{`${movieInfo.Plot}`}</div>
            </div> 
            <div className={Styles.btnBack}>
                <button className={Styles.idButton} onClick={() => goBack()}>Back to Home</button>
            </div>

            <div className={Styles.btnFavs}>
            <button
                className={Styles.watchedBtn} 
                onClick={() => addWatched(
                {title: movieInfo.title, 
                idMovie: idMovie,
                type: movieInfo.type,
                year: movieInfo.year,
                poster: movieInfo.Poster})}><MdDone />
            </button>

                <button
                className={Styles.favBtn}
                onClick={()=> addTitle(
                {title: movieInfo.title, 
                idMovie: idMovie,
                type: movieInfo.type,
                year: movieInfo.year,
                poster: movieInfo.Poster})}><MdFavoriteBorder />
                </button>

                <button
                className={Styles.toWatchBtn}
                onClick={() => addToWatch(
                {title: movieInfo.title,
                idMovie: idMovie,
                type: movieInfo.type,
                year: movieInfo.year,
                poster: movieInfo.Poster
                })}>
                <MdPlaylistAdd />
                </button>
            
            </div>
        </div>
    )
};