import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from 'react-router-dom';
import { movieDetail, addFavMovie, cleanDetail, cleanMovies } from "../../Redux/Actions";
import Styles from "./Card.module.css";


export default function Card(){
    const movieInfo = useSelector(state => state.detailMov);
    const dispatch = useDispatch();
    const { idMovie } = useParams(); 
    const navigate = useNavigate();

    useEffect(()=> { //------------------------------------------------------------------------
        dispatch(movieDetail(idMovie))
    }, [dispatch, idMovie]);

    function addTitle(movie){ //---------------------------------------------------------------
        dispatch(addFavMovie(movie));
        alert("Movie saved in Favs!")
       }

    function goBack(){ //----------------------------------------------------------------------
        dispatch(cleanDetail());
        dispatch(cleanMovies());
        navigate("/");
    };

    return (
        <div className={Styles.infoContainer}>
            <div className={Styles.idContainer}>
                <img className={Styles.cardImage} src={movieInfo.Poster} alt="Movie Cover" />
            </div>

            <div className={Styles.textContainer}>
                <p>{`Title: ${movieInfo.Title}`}</p>
                <p>{`Released: ${movieInfo.Released}`}</p>
                <p>{`Runtime: ${movieInfo.Runtime}`}</p>
                <p>{`Genre: ${movieInfo.Genre}`}</p>
                <p>{`Director: ${movieInfo.Director}`}</p>
                <p>{`Writer: ${movieInfo.Writer}`}</p>
                <p>{`Actors: ${movieInfo.Actors}`}</p>
                <p>{`Lenguage: ${movieInfo.Lenguage}`}</p>
                <p>{`Awards: ${movieInfo.Awards}`}</p>
                {`Plot: ${movieInfo.Plot}`}
            </div>
         
            <div className={Styles.btnBack}>
                <button className={Styles.idButton} onClick={() => goBack()}>Go Back</button>
            </div>

            <div className={Styles.btnFavs}>
                <button
                className={Styles.btn}
                onClick={()=> addTitle(
                {title: movieInfo.title, 
                idMovie: idMovie,
                type: movieInfo.type,
                year: movieInfo.year,
                poster: movieInfo.Poster})}
                > Favs
                </button>
            </div>
        </div>
    )
};