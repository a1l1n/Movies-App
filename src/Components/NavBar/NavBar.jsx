import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import Styles from "../NavBar/NavBar.module.css"

export default function NavBar(){
    /* LA NAVBAR CON UN Min-Width de 1200px x 721.6px -> Título de la Página */
    /* Replantear el título para tamaños menores */

    return(
        <>
        <div className={Styles.container}>
            <h1 className={Styles.name}> Henry's Movies App </h1>
          <div className={Styles.sbar} >
            <SearchBar />
          </div>
          <div className={Styles.links}>
            <Link className={Styles.linkStyle} to="/">Home</Link>
            <Link className={Styles.linkStyle} to="/favs">Favs</Link> 
            <Link className={Styles.linkStyle} to="/about">About</Link> 
          </div>
        </div>
        </>
    )
};