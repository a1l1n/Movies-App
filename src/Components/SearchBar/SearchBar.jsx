import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMovies } from "../../Redux/Actions";
import Image from "./search-icon.png.webp"
import Styles from "../SearchBar/SearchBar.module.css"

export default function SearchBar(){
    
// Estados -> useState: is a Hook that lets you add React state to function components
const [title, setTitle] = useState("");
const dispatch = useDispatch();
const navigate = useNavigate();

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

    return(
        <div className={Styles.container}>
            <form onSubmit={(e) => movieSubmit(e)}>
                <input 
                className={Styles.input}
                onChange={handleChange}
                value={title}
                type="text"
                placeholder="Search a movie..."
                autoComplete="on"
                onSubmit={(e) => movieSubmit(e)}
                required
                />
                <button type="submit" className={Styles.btn}  >
                    <i className="material-icons">search</i>
                </button>
            </form>
        </div>
    )
};
