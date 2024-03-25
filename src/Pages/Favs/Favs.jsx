import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Filters } from "../../Components/Filters/Filters";
import { addFavMovie, addWatchedMov, addToWatchMov, removeFavMovie, deleteMovie } from "../../Redux/Actions";

import Swal from 'sweetalert2';
import Styles from "./Favs.module.css"; 
import { BsTrash } from "react-icons/bs";
import noPoster from "../../Img/no-poster.jpg";
import Cards from "../../Components/Cards/Cards.module.css";
import { MdDone, MdFavoriteBorder, MdPlaylistAdd } from "react-icons/md";
import '../../index.css';

export default function Favs(){
    const watched = useSelector(state => state.watchedMov);
    const favourites = useSelector(state => state.favMov);
    const toWatch = useSelector(state => state.toWatchMov);
    const allMoviesRed = [...favourites, ...watched, ...toWatch];

    const [isWatchedSelected, setWatchedSelected] = useState(false);
    const [isFavSelected, setFavSelected] = useState(false);
    const [isToWatchSelected, setToWatchSelected] = useState(false);

    const [filter, setFilter] = useState('ALL');
    
    const dispatch = useDispatch();

    const addToWatched = (movieInfo) => {
        const isInTheList = watched.find(m => m.idMovie === movieInfo.idMovie)
        if (isInTheList) {
            setWatchedSelected(true)
            Swal.fire({
                title: "Oooops",
                text: "This Movie is already saved in your Watched List!",
                customClass: {
                    popup: 'sweet-background'
                }
              })
        } else {
            dispatch(addWatchedMov(movieInfo));
            setWatchedSelected(true);
            Swal.fire({
              title: "Watched List",
              text: "This Movie is saved in your Watched List!",
              customClass: {
                  popup: 'sweet-background'
              }
            })
        }
    };

    const addToFav = (movieInfo) => {
        const isInTheList = favourites.find(m => m.idMovie === movieInfo.idMovie)
        if (isInTheList) {
            setWatchedSelected(true)
            Swal.fire({
                title: "Oooops",
                text: "This Movie is already saved in your Watched List!",
                customClass: {
                    popup: 'sweet-background'
                }
              }) 
        } else {
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
    };

    function addToWatch(movieInfo){
        const isInTheList = toWatch.find(m => m.idMovie === movieInfo.idMovie)
        if (isInTheList) {
            setWatchedSelected(true)
            Swal.fire({
                title: "Oooops",
                text: "This Movie is already saved in your Watched List!",
                customClass: {
                    popup: 'sweet-background'
                }
              }) 
        } else {
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
      };
        
    function removeTitle(idMovie){
        const isInFavourites = favourites.find(movie => movie.idMovie === idMovie);
        const isInWatched = watched.find(movie => movie.idMovie === idMovie);
        const isInToWatch = toWatch.find(movie => movie.idMovie === idMovie);
        
        if (isInFavourites) {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: ".sweet-confirm" /* "#3085d6" */,
                cancelButtonColor: "#d38",
                confirmButtonText: "Yes, delete it!",
                customClass: {
                    popup: 'sweet-background'
                }
              }).then((result) => {
                if (result.isConfirmed) {
                  dispatch(deleteMovie(idMovie, "favMov"));
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success",
                    customClass: {
                        popup: 'sweet-background'
                    }
                  });
                }
              });
        }

        if (isInWatched) {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: ".sweet-confirm"/* "#3085d6" */,
                cancelButtonColor: "#d38",
                confirmButtonText: "Yes, delete it!",
                customClass: {
                    popup: 'sweet-background'
                }
              }).then((result) => {
                if (result.isConfirmed) {
                  dispatch(deleteMovie(idMovie, "watchedMov"));
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success",
                    customClass: {
                        popup: 'sweet-background'
                    }
                  });
                }
              });
        }

        if (isInToWatch) {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: ".sweet-confirm" /* "#3085d6" */,
                cancelButtonColor: "#d38",
                confirmButtonText: "Yes, delete it!",
                customClass: {
                    popup: 'sweet-background'
                }
              }).then((result) => {
                if (result.isConfirmed) {
                  dispatch(deleteMovie(idMovie, "toWatchMov"));
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success",
                    customClass: {
                        popup: 'sweet-background'
                    }
                  });
                }
              });
        }
        console.log("Favs - allMoviesRed: ", allMoviesRed)
    };
    
    const getFilteredMovies = () => {
        if (filter === "ALL") {
            return allMoviesRed;
        }          
        if (filter === "WATCHED") {
            return watched;
        }  
        if (filter === "FAVS") {
            return favourites;
        }
        if (filter === "TO WATCH"){
            return toWatch
        } 
    };

    const filteredMovies = getFilteredMovies();

    return (
        <div className={Styles.box}>
            <div className={Styles.filters}>
                <Filters setFilter={setFilter} selectedFilter={filter}/>
            </div>
            <div className={Styles.moviesContainer}>
                {
                filteredMovies?.map(movie => {
                    return (
                        <div className={Cards.container}>
                            {
                                movie.poster !== "N/A" ? <img className={Cards.cardsImage} src={movie.poster} alt="Movie Cover" />
                                : <img src={noPoster} alt="No poster Available"/>
                            }
                        <div className={Cards.textContainer}>
                        <Link to={`/movie/${movie.idMovie}`} style={{ textDecoration: 'none', color: 'white' }}>
                        <span className={Cards.mTitle}>{movie.title}</span>
                        <span className={Cards.mType}>{movie.type.toUpperCase()}</span>
                        <span className={Cards.mYear}>{movie.year}</span>
                        </Link>
                        </div>
                    
                        <div className={Styles.buttons}>
                            <button
                            className={
                                watched.some(m => m.idMovie === movie.idMovie) ? Styles.favs_watchedActiveBtn
                                : Styles.favs_watchedBtn}
                            onClick={() => !isWatchedSelected && addToWatched ({
                                title: movie.title,
                                idMovie: movie.idMovie,
                                type: movie.type,
                                year: movie.year,
                                poster: movie.poster
                            })}
                            disabled={isWatchedSelected}>
                                <MdDone />
                            </button>

                            <button
                            className={
                                favourites.some(m => m.idMovie === movie.idMovie) ? Styles.favs_favActiveBtn
                                : Styles.favs_favBtn}
                            onClick={()=> !isFavSelected && addToFav ({
                                title: movie.title, 
                                idMovie: movie.idMovie,
                                type: movie.type,
                                year: movie.year,
                                poster: movie.poster
                            })} 
                            disabled={isFavSelected}> 
                                <MdFavoriteBorder />
                            </button>

                            <button
                            className={
                                toWatch.some(m => m.idMovie === movie.idMovie) ? Styles.favs_toWatchActiveBtn
                                : Styles.favs_towatchBtn}
                            onClick={() => !isToWatchSelected && addToWatch (
                                {title: movie.title,
                                idMovie: movie.idMovie,
                                type: movie.type,
                                year: movie.year,
                                poster: movie.poster
                                })}
                            disabled={isToWatchSelected}>
                                <MdPlaylistAdd />
                            </button>

                            <button
                            className={Styles.favs_deleteBtn}
                            onClick={() => removeTitle(movie.idMovie)}
                            ><BsTrash /></button>
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
    )
};
