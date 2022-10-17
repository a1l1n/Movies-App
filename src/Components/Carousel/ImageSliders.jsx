import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Styles from  "./ImageSliders.module.css";

export default function ImageSliders({images}){

  var settings = {
    dots: true,
    infinite: true,
    /* speed: 500, */
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 6000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className={Styles.cardContainer}>
      <Slider {...settings}>
        {
          images.map((mov) => (
            <Link to={`/movie/${mov.id}`}>
              <img src={mov.pic} alt={mov.title} className={Styles.cardPoster}/>
            </Link>
          ))
        }
      </Slider>
    </div>
  )
}
