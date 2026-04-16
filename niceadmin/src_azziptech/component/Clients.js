import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Clients() {

  

    const settings = {
      dots: false,        // Show dots at the bottom
      infinite: true,    // Infinite looping
      speed: 500,        // Transition speed in milliseconds
      slidesToShow: 5,   // Number of slides to show at once
      slidesToScroll: 1, // Number of slides to scroll at once
      autoplay: true,    // Autoplay enabled
      autoplaySpeed: 1000, // Autoplay speed in milliseconds

      responsive: [
        {
          breakpoint: 768, // Below 1024px
          settings: {
            slidesToShow: 2,  // Show 2 slides on medium screens
          }},
          {breakpoint: 480, // Below 1024px
          settings: {
            slidesToShow: 1,  // Show 2 slides on medium screens
          },
          }]
    };

    
  return (
    <div className='mt-20 bg-[#f2f4fd] pb-4'>
    <div className="flex justify-center ">
    <div className=" inline-block border-4 border-[#EC8305] h-[5px] w-16 mt-8 mr-3"></div>
        <h1 className=" text-center font-bold text-[30px] md:text-[50px] text-blue-950    font-N">
                OUR CLIENTS
        </h1>
    <div className=" inline-block border-4 border-[#EC8305] h-[5px] w-16 mt-8 ml-3"></div>
     </div>

      <div className="App mx-24 my-7">
      <Slider {...settings}>
        <div>
            <div className=' flex justify-center'>
                    <img className="size-40 rounded-full border-2 border-blue-950 " src="https://www.azziptech.com/assets/img/clients/1-GMCB-Azziptech.jpg" alt=""  />
            </div>
         </div>

        <div>
            <div className='  flex justify-center'>
                <img className="size-40 rounded-full border-2 border-blue-950  bg-white " src="https://www.azziptech.com/assets/img/clients/ssccm.png" alt=""  />
            </div>
        </div>

        <div>
        <div className='  flex justify-center'>
                <img className="size-40 rounded-full border-2 border-blue-950 " src="https://www.azziptech.com/assets/img/clients/11-NHL.jpg" alt=""  />
            </div>
        </div>

        <div>
            <div className='flex justify-center'>
                <img className="size-40 rounded-full border-2 border-blue-950 " src="https://www.azziptech.com/assets/img/clients/6-ima-bhavnagar.png" alt=""  />
            </div>
        </div>

        <div>
            <div className=' flex justify-center'>
                <img className="size-40 rounded-full border-2 border-blue-950 " src="https://www.azziptech.com/assets/img/clients/HIMS-Azziptech.jpg" alt=""  />
            </div>
        </div>

        <div>
          <div className='flex justify-center'>
                <img className="size-40 rounded-full border-2 border-blue-950 " src="https://www.azziptech.com/assets/img/clients/7-orrery-drugs.png" alt=""  />
            </div>
        </div>


        <div>
        <div className='  flex justify-center'>
                <img className="size-40 rounded-full border-2 border-blue-950 " src="https://www.azziptech.com/assets/img/clients/2-aj-institute.jpg" alt=""  />
            </div>
        </div>

      <div>
      <div className='  flex justify-center'>
                <img className="size-40 rounded-full border-2 border-blue-950 bg-white" src="https://www.azziptech.com/assets/img/clients/GMC%20Azziptech.png" alt=""  />
            </div>
      </div>

      </Slider>
    </div>
    </div>
  )
}
