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

/* const watchedMoviesFromStorage = JSON.parse(localStorage.getItem("watchedMov")) || [];
const favMoviesFromStorage = JSON.parse(localStorage.getItem("favMov")) || [];
const toWatchMoviesFromStorage = JSON.parse(localStorage.getItem("toWatchMov")) || []; */

const initialState = {
    watchedMov: JSON.parse(localStorage.getItem("watchedMov")) || [],
    favMov: JSON.parse(localStorage.getItem("favMov")) || [],
    toWatchMov: JSON.parse(localStorage.getItem("toWatchMov")) || [],
    loadMov: [],
    detailMov: {}
};

export default function reducer(state = initialState, action){
    switch(action.type){
        case GET_MOVIES:
            return {
                ...state,
                loadMov: action.payload,
            };
        case ADD_MOVIES_TO_WATCHED: 
            return {
                ...state,
                watchedMov: state.watchedMov.concat(action.payload)
            };
        case ADD_MOVIES_FAV:
            return {
                ...state,
                 favMov: state.favMov.concat(action.payload) 
            };
        case ADD_MOVIES_TO_WATCH:
            return {
                ...state,
                toWatchMov: state.toWatchMov.concat(action.payload)
            };
        case REMOVE_MOVIE_FAV:
            return {
                ...state,
                favMov: state.favMov.filter(m => m.idMovie !== action.payload.idMovie)
            };
        case REMOVE_MOVIE_WATCHED :
            return {
                ...state, 
                watchedMov: state.watchedMov.filter(m => m.idMovie !== action.payload.idMovie)
            };
        case REMOVE_MOVIE_TOWATCH: 
            return {
                ...state,
                toWatchMov: state.toWatchMov.filter(m => m.idMovie !== action.payload.idMovie)
            }
        case GET_MOVIE_DETAIL:
            return {
                ...state,
                detailMov: action.payload
            };
        case CLEAN_DETAILS:
            return {
                ...state,
                detailMov: {}
            };
        case DELETE_MOVIE:
            const { idMovie, listType } = action.payload;
            const updatedMovies = state[listType].filter(movie => movie.idMovie !== idMovie);
            localStorage.setItem(listType, JSON.stringify(updatedMovies));
            const newState = {
                ...state,
                [listType]: updatedMovies
            }
            console.log("Reducer - esto es newState: ", newState)
            return newState;
        default:
            return {... state}
    }
};