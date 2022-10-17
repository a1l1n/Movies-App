import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeFavMovie, cleanMovies } from "../../Redux/Actions";
import Styles from "./Favs.module.css"

export default function Favs(){
    const favourites = useSelector(state => state.favMov);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function removeTitle(movie){
        dispatch(removeFavMovie(movie));
        alert(`${movie.title} deleted!`)
    };

    function goBack(){
        dispatch(cleanMovies());
        navigate("/");
    };

    return(
        <div>
            <h1>This are Your Favourites Movies</h1>
                {
                favourites?.map(movie => {
                    return (
                    <div className={Styles.cardContainer}>
                        <Link to={`/movie/${movie.idMovie}`}>
                          <img src={movie.poster} alt="Movie Cover" />
                        </Link>
                       
                        <div className={Styles.textContainer}>
                          <span className={Styles.mTitle}>{movie.title}</span>
                          <span className={Styles.mType}>{movie.type}</span>
                          <span className={Styles.mYear}>{movie.year}</span>
                        </div>
                       
                        <div className={Styles.button}>
                            <button
                            onClick={() => removeTitle(movie)}>
                                Quitar de Favoritos
                            </button>
                        </div>
                    </div>
                    )
                 })}
                 <button onClick={() => goBack()}>Go Back</button> 
        </div>
    )
};

/* 
 <li key={idMovie} >
                            <Link to={`/movie/${movie.idMovie}`}>{movie.title}</Link>
                            {console.log("Esto es idMovie: ", movie.idMovie)}
                            <button onClick={() =>removeTitle(movie.idMovie)}>X</button>
                        </li>
*/