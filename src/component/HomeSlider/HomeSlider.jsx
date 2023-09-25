import React from 'react'
import './Style.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const HomeSlider = () => {

  let settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };


  return (

    <div className='container'>
      <div className='slider-content'>
        <Slider {...settings}>
          <div className='slider-item'>
            <img src='./slider_img_1.jpg' alt="" />
          </div>
          <div className='slider-item'>
            <img src='./slider_img_2.jpg' alt="" />
          </div>
        </Slider>
      </div>
    </div>

  )
}

export default HomeSlider;