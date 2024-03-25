import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import Styles from "../NavBar/NavBar.module.css"
import { ProjIcon } from "../SVGs/ProjIcon";

export default function NavBar(){
  const location = useLocation();
  const [ showMenu, setShowMenu ] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState(location.pathname);

  const handleRouteChange = (route) => {
    setSelectedRoute(route);
  };

    return (
        <>
        <div className={showMenu ? Styles.navbar_show_container : Styles.container}>
            <div className={Styles.navbar_logo_container}>
              <ProjIcon className={Styles.navbar_icon}/>
              <div className={Styles.navbar_logo_text}>
                <h1 className={Styles.name}> CheckFlix </h1>
              </div>
            </div>

          <div className={  
            location.pathname === "/home" ? Styles.navbar_hidden_searchBar : Styles.navbar_view_searchBar
            }>
              <div className={
                showMenu ? Styles.navbar_show_searchBar : Styles.navbar_drop_searchBar}>
                <SearchBar />
              </div>
          </div>
          
          <div className={!showMenu ? Styles.navbar_links : location.pathname === "/home" ? Styles.navbar_bottom_links : Styles.navbar_show_links }>
            <NavLink 
            className={
              selectedRoute === "/home" ? Styles.link_selected_style
              : Styles.linkStyle} 
            to="/home"
            onClick={() => handleRouteChange("/home")}>
              HOME
            </NavLink>

            <NavLink 
            className={
              selectedRoute === "/favs" ? Styles.link_selected_style
              : Styles.linkStyle} 
            to="/favs"
            onClick={() => handleRouteChange("/favs")}>
              MY LIST
            </NavLink> 

            <NavLink 
            className={
              selectedRoute === "/about" ? Styles.link_selected_style
              : Styles.linkStyle} 
            to="/about"
            onClick={() => handleRouteChange("/about")}>
              ABOUT
            </NavLink> 
          </div>

          <div className={Styles.navbar_toggle} onClick={() => setShowMenu(!showMenu)}>
                <div className={showMenu ? Styles.navbar_burger_clicked : Styles.navbar_burguer}></div>
                <div className={showMenu ? Styles.navbar_burger_clicked : Styles.navbar_burguer}></div>
                <div className={showMenu ? Styles.navbar_burger_clicked : Styles.navbar_burguer}></div>
            </div>
        </div>
        </>
    )
};