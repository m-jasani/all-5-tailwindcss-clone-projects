import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Feature() {

    const settings = {
        dots:false,
        infinite: true,
        speed: 500,
        slidesToShow: 3.5,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000, // Slide every 2 seconds
        dots:false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2.5, // Show 2 slides for screens less than 1024px wide
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1.5, // Show 1 slide for screens less than 768px wide
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            }
          }
        ]
      };
      

  return (
    <div className="bg-white  sm:px-8">
    <h2 className=' py-5 text-left text-[20px] font-bold'>Featured Brands</h2>
    <Slider {...settings}>

      <div className="px-2">
        <div className=" border border-1 border-gray-300 rounded ">
        <img className='rounded' src="https://rukminim2.flixcart.com/fk-p-flap/450/280/image/ffcbc2dc7c99cd08.jpeg?q=20" alt=""  />
        </div>
      </div>

      <div className="px-2">
        <div className="border border-2 border-gray-300 rounded ">
        <img className='rounded' src="https://rukminim2.flixcart.com/fk-p-flap/450/280/image/10ed0579dc32ddc4.jpeg?q=20" alt=""  />
        </div>
      </div>

      <div className="px-2">
        <div className="border border-2 border-gray-300 rounded ">
        <img className='rounded' src="https://rukminim2.flixcart.com/fk-p-flap/450/280/image/5505c4e98732a185.jpeg?q=20" alt=""  />
      </div>
      </div>

      <div className="px-2">
        <div className="border border-2 border-gray-300 rounded ">
        <img className='rounded' src="https://rukminim2.flixcart.com/fk-p-flap/450/280/image/c1f7c6fb1da49a88.jpeg?q=20" alt=""  />
       </div>
      </div>

      <div className="px-2">
        <div className="border border-2 border-gray-300 rounded ">
        <img className='rounded' src="https://rukminim2.flixcart.com/fk-p-flap/450/280/image/6cb41fb0c0b4d676.jpeg?q=20" alt=""  />
        </div>
      </div>

      <div className="px-2">
        <div className="border border-2 border-gray-300 rounded">
        <img className='rounded' src="https://rukminim2.flixcart.com/fk-p-flap/450/280/image/ea6246119d55632b.jpeg?q=20" alt=""  />
        </div>
      </div>

      <div className="px-2">
        <div className="border border-2 border-gray-300 rounded ">
        <img className='rounded' src="https://rukminim2.flixcart.com/fk-p-flap/450/280/image/45576c1d1324254c.jpeg?q=20" alt=""  />
        </div>
      </div>

      <div className="px-2">
        <div className="border border-2 border-gray-300 rounded ">
        <img className='rounded' src="https://rukminim2.flixcart.com/fk-p-flap/450/280/image/9155009248fbab5c.jpeg?q=20" alt=""  />
        </div>
      </div>
   
      
    </Slider>
  </div>
    
  )
}

