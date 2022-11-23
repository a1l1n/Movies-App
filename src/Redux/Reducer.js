import { GET_MOVIES, 
        ADD_MOVIES_TO_WATCHED,
        ADD_MOVIES_FAV,
        ADD_MOVIES_TO_WATCH,
        REMOVE_MOVIE_FAV,
        GET_MOVIE_DETAIL, 
        CLEAN_DETAILS, 
        CLEAN_MOVIES } from "./Constants";


const initialState = {
    watchedMov: [],
    favMov: [],
    toWatchMov: [],
    loadMov: [],
    detailMov: {}
};

export default function reducer(state = initialState, action){
    switch(action.type){
        case GET_MOVIES:
            return {
                ...state,
                loadMov: action.payload
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
        case CLEAN_MOVIES:
            return {
                ...state,
                loadMov: []
            }
        default:
            return {... state}
    }
};