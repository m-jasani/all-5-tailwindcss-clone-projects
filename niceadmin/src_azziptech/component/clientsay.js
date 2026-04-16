import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Clientsay() {

  const settings = {
    dots: true,        // Show dots at the bottom
    infinite: true,    // Infinite looping
    speed: 500,        // Transition speed in milliseconds
    slidesToShow: 1,   // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at once
    autoplay: true,    // Autoplay enabled
    autoplaySpeed: 2000, }

  return (

<div className='mt-20 pb-4'>
    <div className="flex justify-center ">
    <div className=" inline-block border-4 border-[#EC8305] h-[5px] w-16 mt-8 mr-3"></div>
        <h1 className=" text-center font-bold text-[30px] md:text-[50px] text-blue-950    font-N">
                CLIENT SAYS
        </h1>
    <div className=" inline-block border-4 border-[#EC8305] h-[5px] w-16 mt-8 ml-3"></div>
     </div>

    <div className="App mx-20 my-10">
      <Slider {...settings}>
        <div>
         
         <div className="flex ">
          <img className='size-44' src="https://www.azziptech.com/assets/img/clients/1-GMCB-Azziptech.jpg" alt="" />
          <div className="mx-10">
            <h1 className="text-left text-[20px] md:text-[30px] font-semibold font-N">Web Development</h1>
            <p className='text-left font-N'>AJ INSTITUTE extends its heartfelt gratitude to Azziptech for their exceptional work in developing our website. Their mastery of Next.js and Node.js resulted in a seamless and dynamic platform that perfectly embodies our institutions ethos. Azziptechs professionalism, attention to detail, and timely delivery surpassed our expectations, making the collaboration a resounding success. We highly recommend Azziptech for their expertise and commitment to client satisfaction. Heres to future endeavors together!</p>
          </div>
         </div>
        </div>


        <div>
        <div className="flex ">
          <img className='size-44' src="https://www.azziptech.com/assets/img/clients/6-ima-bhavnagar.png" alt="" />
          <div className="mx-10">
            <h1 className="text-left text-[20px] md:text-[30px] font-semibold font-N">Web Development</h1>
            <p className='text-left font-N'>AJ INSTITUTE extends its heartfelt gratitude to Azziptech for their exceptional work in developing our website. Their mastery of Next.js and Node.js resulted in a seamless and dynamic platform that perfectly embodies our institutions ethos. Azziptechs professionalism, attention to detail, and timely delivery surpassed our expectations, making the collaboration a resounding success. We highly recommend Azziptech for their expertise and commitment to client satisfaction. Heres to future endeavors together!</p>
          </div>
         </div>
        </div>



        <div>
        <div className="flex ">
          <img className='size-44' src="https://www.azziptech.com/assets/img/clients/11-NHL.jpg" alt="" />
          <div className="mx-10">
            <h1 className="text-left text-[20px] md:text-[30px] font-semibold font-N">Web Development</h1>
            <p className='text-left font-N'>AJ INSTITUTE extends its heartfelt gratitude to Azziptech for their exceptional work in developing our website. Their mastery of Next.js and Node.js resulted in a seamless and dynamic platform that perfectly embodies our institutions ethos. Azziptechs professionalism, attention to detail, and timely delivery surpassed our expectations, making the collaboration a resounding success. We highly recommend Azziptech for their expertise and commitment to client satisfaction. Heres to future endeavors together!</p>
          </div>
         </div>
        </div>

        <div>
        <div className="flex ">
          <img className='size-44' src="https://www.azziptech.com/assets/img/clients/6-ima-bhavnagar.png" alt="" />
          <div className="mx-10">
            <h1 className="text-left text-[20px] md:text-[30px] font-semibold font-N">Web Development</h1>
            <p className='text-left font-N'>AJ INSTITUTE extends its heartfelt gratitude to Azziptech for their exceptional work in developing our website. Their mastery of Next.js and Node.js resulted in a seamless and dynamic platform that perfectly embodies our institutions ethos. Azziptechs professionalism, attention to detail, and timely delivery surpassed our expectations, making the collaboration a resounding success. We highly recommend Azziptech for their expertise and commitment to client satisfaction. Heres to future endeavors together!</p>
          </div>
         </div>
        </div>

        <div>
        <div className="flex ">
          <img className='size-44' src="https://www.azziptech.com/assets/img/services/hire-developer-service-azziptech.avif" alt="" />
          <div className="mx-10">
            <h1 className="text-left text-[20px] md:text-[30px] font-semibold font-N">Web Development</h1>
            <p className='text-left font-N'>AJ INSTITUTE extends its heartfelt gratitude to Azziptech for their exceptional work in developing our website. Their mastery of Next.js and Node.js resulted in a seamless and dynamic platform that perfectly embodies our institutions ethos. Azziptechs professionalism, attention to detail, and timely delivery surpassed our expectations, making the collaboration a resounding success. We highly recommend Azziptech for their expertise and commitment to client satisfaction. Heres to future endeavors together!</p>
          </div>
         </div>
        </div>

      </Slider>
    </div>



    </div>
  );
}

