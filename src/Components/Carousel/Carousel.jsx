import React from 'react';
import ImageSliders from './ImageSliders';
import images from "./Images/images";
import Styles from "./Carousel.module.css";

export default function Carousel(){

  return (
    <div className={Styles.cContainer}>
      <div>
        <h1>Recomendations of the Month</h1>
      </div>
      <ImageSliders images={images} />
    </div>
  )
};
