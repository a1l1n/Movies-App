import React, { useState } from 'react';
import ImageSliders from './ImageSliders';
import images from "./Images/images";
import Styles from "./Carousel.module.css";

export default function Carousel(){


  return (
    <div className={Styles.cContainer}>
      <ImageSliders images={images} />
    </div>
  )
};
