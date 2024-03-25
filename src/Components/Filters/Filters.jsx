import React from 'react';
import Styles from './Filters.module.css'
import { BsBorderAll } from "react-icons/bs";

import { MdDone, MdFavoriteBorder, MdPlaylistAdd } from "react-icons/md";


export const Filters = ({ setFilter, selectedFilter }) => {


  return (
    <div className={Styles.filters_container}>
      <button
      onClick={() => setFilter("ALL")}
      className={
        selectedFilter === "ALL" ? Styles.filters_all_button
        : Styles.filters_buttons}>
        <BsBorderAll 
        className={
          selectedFilter === "ALL" ? Styles.filters_all_active_icon 
          : Styles.filters_all_icon}/>
        ALL
      </button>
      
      <button
      onClick={() => setFilter("WATCHED")}
      className={
        selectedFilter === "WATCHED" ? Styles.filters_watched_button
        : Styles.filters_buttons}>
        <MdDone  className={
          selectedFilter === "WATCHED" ? Styles.filters_watched_active_icon 
          : Styles.filters_watched_icon}/> 
        WATCHED
      </button>

      <button
      onClick={() => setFilter("FAVS")}
      className={
        selectedFilter === "FAVS" ? Styles.filters_fav_button
        : Styles.filters_buttons}>
        <MdFavoriteBorder  className={
          selectedFilter === "FAVS" ? Styles.filters_fav_active_icon
          : Styles.filters_fav_icon}/> 
        FAVS
      </button>

      <button
      onClick={() => setFilter("TO WATCH")}
      className={
        selectedFilter === "TO WATCH" ? Styles.filters_towatch_button
        : Styles.filters_buttons}>
        <MdPlaylistAdd className={
          selectedFilter === "TO WATCH" ? Styles.filters_toWatch_active_icon
          : Styles.filters_toWatch_icon}/> 
        TO WATCH
      </button>
    </div>
  )
}
