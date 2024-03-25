import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { getMovies } from "../../Redux/Actions";
import Styles from "../SearchBar/SearchBar.module.css";

export default function SearchBar(){
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const [title, setTitle] = useState("");
    const homeLocation = location.pathname;

    function handleChange(e) {
        e.preventDefault();
        setTitle(e.target.value)
    };

    function movieSubmit(e){
        e.preventDefault();
        dispatch(getMovies(title));
        setTitle("");
        navigate("/movie-list");
    }

    return (
        <div>
            <form className={Styles.search_form} onSubmit={(e) => movieSubmit(e)}>
                <input 
                className={
                    homeLocation === '/home' ? Styles.sb_home_location
                    : Styles.sb_input}
                onChange={handleChange}
                value={title}
                type="text"
                placeholder="Search a title..."
                autoComplete="on"
                onSubmit={(e) => movieSubmit(e)}
                required
                />
                <button 
                type="submit" 
                className={
                    homeLocation === '/home' ? Styles.sb_home_btn_location
                    : Styles.btn}>
                    <i className="material-icons">search</i>
                </button>
            </form>
        </div>
    )
};
