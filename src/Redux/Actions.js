import axios from "axios";
import { GET_MOVIES, 
    ADD_MOVIES_FAV,
    REMOVE_MOVIE_FAV,
    GET_MOVIE_DETAIL,
    CLEAN_DETAILS,
    CLEAN_MOVIES } from "./Constants";

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

// Add some movies to Favs ----------------------------------------------------------------------
export function addFavMovie(movie){
    return {
        type: ADD_MOVIES_FAV,
        payload: movie
    }
};

// Delete movies from Favs ----------------------------------------------------------------------
export function removeFavMovie(movie){
    return {
        type: REMOVE_MOVIE_FAV,
        payload: movie
    }
};

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
export function cleanMovies(){
    return {
        type: CLEAN_MOVIES,
        payload: {}
    }
}