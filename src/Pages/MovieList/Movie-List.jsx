import React from 'react';
import { useSelector } from 'react-redux';
import Cards from '../../Components/Cards/Cards';
import Styles from "./Movie-List.module.css";

export default function MovieList() {
    const movies = useSelector(state => state.loadMov);

  return (
    <div className={Styles.container}>
        {    
        movies?.map(m => {
          return (
              <Cards
              key={m.imdbID}
              idMovie={m.imdbID}
              title={m.Title}
              poster={m.Poster}
              type={m.Type}
              year={m.Year}
              />)}
        )} 
    </div>
  )
}
