import React from "react";
import Slider from "react-slick";
import { DATA } from "./data";
import './Carousel.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function CarouselRev() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <div className='slides-container'>
      <Slider {...settings}>
      {DATA.map(item => (
        <div className='slides-items' key={item.id}>
            <div className='styles-picture'>
            <img src={item.image} alt="first avatar" />
            </div>
            <h3>{item.name}</h3>
            <p>{item.text}</p>
        </div>
      ))}
      </Slider>
    </div>
  );
}

export default CarouselRev;
