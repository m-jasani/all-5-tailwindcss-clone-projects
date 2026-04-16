import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000, // Slide every 2 seconds
      };
      

  return (
    <div className="sm:px-0">
  
    <Slider {...settings}>
      <div className='flex justify-center'>
        <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/f15976713215171a.jpg?q=20" alt="" className="" />
      </div>
      <div>
        <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/126619f56d1f3607.jpg?q=20" alt="" className="" />
      </div>
      <div>
        <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/7052574e1ea8af4a.jpeg?q=20" alt="" className="" />
      </div>
      
    </Slider>
  </div>
    
  )
}
