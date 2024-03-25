import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from 'react-router-dom';
import { movieDetail, addFavMovie, addWatchedMov, addToWatchMov, cleanDetail } from "../../Redux/Actions";
import { MdDone, MdFavoriteBorder, MdPlaylistAdd } from "react-icons/md";
import noPoster from "../../Img/no-poster.jpg";
import Swal from 'sweetalert2';
import Styles from "./Card.module.css";
import '../../index.css';


export default function Card(){
    const movieInfo = useSelector(state => state.detailMov);

    const movieFav = useSelector(state => state.favMov);
    const movieWatched = useSelector(state => state.watchedMov);
    const movieToWatch = useSelector(state => state.toWatchMov);

    const [isWatchedSelected, setWatchedSelected] = useState(false);
    const [isFavSelected, setFavSelected] = useState(false);
    const [isToWatchSelected, setToWatchSelected] = useState(false);

    const dispatch = useDispatch();
    const { idMovie } = useParams(); 
    const navigate = useNavigate();

    useEffect(()=> { //------------------------------------------------------------------------
        dispatch(movieDetail(idMovie))
    }, [dispatch, idMovie]);


    
    function addWatched(movieInfo){
        dispatch(addWatchedMov(movieInfo))
        setWatchedSelected(true);
        Swal.fire({
            title: "Watched List",
            text: "This Movie is saved in your Watched List!",
            customClass: {
                popup: 'sweet-background'
            }
        });
      }; 

    function addTitle(movieInfo){ //---------------------------------------------------------------
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

    function goBack(){ //----------------------------------------------------------------------
        dispatch(cleanDetail());
/*         dispatch(cleanMovies()); */
        navigate("/home");
    };
  
    // Verificar si la película está en alguna lista
    const isInWatched = movieWatched.some(movie => movie.idMovie === idMovie);
    const isInFav = movieFav.some(movie => movie.idMovie === idMovie);
    const isInToWatch = movieToWatch.some(movie => movie.idMovie === idMovie);

    return (
        <div className={Styles.infoContainer}>
            <div className={Styles.card_container}>
                <div className={Styles.idContainer}>
                {
                    movieInfo.Poster !== "N/A" ? <img className={Styles.cardImage} src={movieInfo.Poster} alt="Movie Cover" />
                    : <img className={Styles.cardImage} src={noPoster} alt="No poster Available" />
                }
                    <div className={Styles.btnBack}>
                        <button className={Styles.idButton} onClick={() => goBack()}>Back to Home</button>
                    </div>
                </div> 

                <div className={Styles.textContainer}>
                    <div className={Styles.btnFavs}>
                        <button
                            className={
                                isInWatched ? Styles.watchedActiveBtn 
                                : Styles.watchedBtn} 
                            onClick={() => !isWatchedSelected && addWatched (
                            {title: movieInfo.Title, 
                            idMovie: idMovie,
                            type: movieInfo.Type,
                            year: movieInfo.Tear,
                            poster: movieInfo.Poster})}
                            disabled={isWatchedSelected}>
                            <MdDone />
                        </button>

                        <button
                            className={
                                isInFav ? Styles.favActiveBtn
                                : Styles.favBtn}
                            onClick={()=> !isFavSelected && addTitle (
                            {title: movieInfo.Title, 
                            idMovie: idMovie,
                            type: movieInfo.Type,
                            year: movieInfo.Year,
                            poster: movieInfo.Poster})}
                            disabled={isFavSelected}>
                            <MdFavoriteBorder />
                        </button>

                            <button
                            className={
                                isInToWatch ? Styles.toWatchActiveBtn :
                                Styles.toWatchBtn}
                            onClick={() => !isToWatchSelected && addToWatch (
                            {title: movieInfo.Title,
                            idMovie: idMovie,
                            type: movieInfo.Type,
                            year: movieInfo.Year,
                            poster: movieInfo.Poster
                            })}
                            disabled={isToWatchSelected}>
                            <MdPlaylistAdd />
                            </button>
                    </div>

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
            </div>
        </div>
    )
};