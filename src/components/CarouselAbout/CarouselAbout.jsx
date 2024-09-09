import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "../Container/Container";
import "./CarouselAbout.scss";

function CarouselAbout() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2,
    speed: 500,
  };
  return (
    <div className="aboutCarousel">
      <Container>
        <h3>Наши Фото</h3>
      </Container>
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <img src="./images/aboutImg1.png" alt="carousel-images" loading="lazy"/>
          </div>
          <div>
            <img src="./images/aboutImg2.png" alt="carousel-images" loading="lazy"/>
          </div>
          <div>
            <img src="./images/aboutImg3.png" alt="carousel-images" loading="lazy"/>
          </div>
          <div>
            <img src="./images/aboutImg4.png" alt="carousel-images" loading="lazy"/>
          </div>
        </Slider>
      </div>
    </div>
  );
}
export default CarouselAbout;
