import axios from "axios";
import { GET_MOVIES, 
    ADD_MOVIES_TO_WATCHED,
    ADD_MOVIES_FAV,
    ADD_MOVIES_TO_WATCH,
    REMOVE_MOVIE_FAV,
    REMOVE_MOVIE_WATCHED,
    REMOVE_MOVIE_TOWATCH,
    GET_MOVIE_DETAIL,
    CLEAN_DETAILS,
    DELETE_MOVIE } from "./Constants";

const apikey = process.env.REACT_APP_API_KEY;

// Get all movies with axios --------------------------------------------------------------------
export function getMovies(title){
    return async function(dispatch){
        try {
            const res = await axios.get(`http://www.omdbapi.com/?apikey=${apikey}&s=${title}`);
            return dispatch({
                type: GET_MOVIES,
                payload: res.data.Search
            })
        } catch (error){
            console.log(error);
        }
    };
};

// Add movies to Watched List -------------------------------------------------------------------
export function addWatchedMov(movie){
    return (dispatch, getState) => {
        dispatch({
            type: ADD_MOVIES_TO_WATCHED,
            payload: movie
        });
        
        const watched = getState().watchedMov;
        localStorage.setItem("watchedMov", JSON.stringify(watched))
    }
};

// Add some movies to Favs ----------------------------------------------------------------------
export function addFavMovie(movie){
    return (dispatch, getState) => {
        dispatch({
            type: ADD_MOVIES_FAV,
            payload: movie
        });

        const fav = getState().favMov;
        localStorage.setItem("favMov", JSON.stringify(fav))
    }
};

// Add movies to To Watch List ------------------------------------------------------------------
export function addToWatchMov(movie) {
    return (dispatch, getState) => {
        dispatch({
            type: ADD_MOVIES_TO_WATCH,
            payload: movie
        });

        const toWatch = getState().toWatchMov;
        localStorage.setItem("toWatchMov", JSON.stringify(toWatch))
    }
}

// Delete movies from Favs ----------------------------------------------------------------------
export function removeFavMovie(movie){
    return {
        type: REMOVE_MOVIE_FAV,
        payload: movie
    }
};

// Delete movies from Watched  ----------------------------------------------------------------------
export function removeWatchedMovie(movie) {
    return {
        type: REMOVE_MOVIE_WATCHED,
        payload: movie
    }
};

// Delete movies from To Watch ----------------------------------------------------------------------
export function removeToWatchMovie(movie) {
    return {
        type: REMOVE_MOVIE_TOWATCH,
        payload: movie
    }
}

// Go to Movie Details --------------------------------------------------------------------------
export function movieDetail(idMovie){
    return async function (dispatch){
        try {
            const response = await axios.get(`http://www.omdbapi.com/?apikey=${apikey}&i=${idMovie}`)
            return dispatch({
                type: GET_MOVIE_DETAIL,
                payload: response.data
            })
        } catch (error) {
            console.log(error);
        }
    };
};

// Clean Detail  -------------------------------------------------------------------------------
export function cleanDetail(){
    return {
        type: CLEAN_DETAILS,
        payload: {}
    };
};

// Clean Movies  -------------------------------------------------------------------------------
export function deleteMovie(idMovie, listType){
    return (dispatch, getState) => {
        // Eliminar la película del estado global
        dispatch({
            type: DELETE_MOVIE,
            payload: { idMovie, listType }
        });

        // Obtener la lista actualizada después de eliminar la película
        const updatedList = getState()[listType];
        console.log("Actions - esti es listType: ", listType)
        console.log("Actions - esto es updatedList: ", updatedList)

        // Guardar la lista actualizada en el localStorage
        localStorage.setItem(listType, JSON.stringify(updatedList));
    };
}