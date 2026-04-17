import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Scr6() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000, // Slide every 2 seconds
        responsive: [
          {
              breakpoint: 768, // Below this width
              settings: {
                  slidesToShow:1, // Show 2 slides
                  slidesToScroll: 1, // Scroll 1 slide at a time
                  infinite: true,
                  dots: true,
              },
          },] // Slide every 2 seconds
      };
      

  return (
    <div className='bg-blue-100'>
         {/* <h1 className='font-bold text-[35px] pt-16 pb-0 text-blue-600'>Testimonials</h1> */}
         <div className="flex justify-center">
      <div className="inline-block border-orange-600 h-[2px] w-20 border-2 mt-24 mr-3"></div>
      <h1 className="font-bold text-[35px] pt-16 pb-0 text-blue-600">
      Testimonials
      </h1>
      <div className="inline-block border-orange-600 h-[2px] w-20 border-2 mt-24 ml-3"></div>
      </div>
        <p className='pb-10'>we hear you</p>

        {/* <div className='bg-white  rounded-2xl text-left shadow-2xl mx-20'>
            
                <div className="flex">
                <img  className=" size-20 ml-7" src="https://www.softwingz.com/assets/img/testimonials/b.jpg" alt="" />
                <div className='p-5'>
                <h2 className='font-bold text-[17px]'>Suresh Mehta</h2>
                <p>Ceo & Founder</p>
                </div>
                </div>
                <h3 className='font-bold text-[20px] pt-10 px-5'>“Simply professionals”</h3>
                <p className='px-5 py-4'>
                   Working with SoftWingz Infotech has been an absolute pleasure. Their team of skilled professionals is not only knowledgeable in their field but also dedicated to providing top-notch service and support.Thank you for your support. 
                    </p>
        </div> */}


        <div className=" p-20">
      
      <Slider {...settings}>
        <div>
        <div className='bg-white  rounded text-left shadow-2xl mx-10'>
            
            <div className="flex">
            <img  className="ml-7 size-20" src="https://www.softwingz.com/assets/img/testimonials/b.jpg" alt="" />
            <div className='p-5'>
            <h2 className='font-bold text-[17px]'>Suresh Mehta</h2>
            <p>Ceo & Founder</p>
            </div>
            </div>
            {/* <p className='rotate-180 text-blue-100 font-extrabold text-[50px]'>,,</p> */}
            <h3 className='font-bold text-[20px] pt-10 px-16'>“Simply professionals”</h3>
            <p className='px-16 py-4'>
               Working with SoftWingz Infotech has been an absolute pleasure. Their team of skilled professionals is not only knowledgeable in their field but also dedicated to providing top-notch service and support.Thank you for your support. 
                </p>
    </div>
        </div>
        <div>
        <div className='bg-white  rounded text-left shadow-2xl mx-10'>
            
            <div className="flex">
            <img  className="ml-7 size-20" src="https://www.softwingz.com/assets/img/testimonials/b.jpg" alt="" />
            <div className='p-5'>
            <h2 className='font-bold text-[17px]'>Suresh Mehta</h2>
            <p>Ceo & Founder</p>
            </div>
            </div>
            {/* <p className='rotate-180 text-blue-100 font-extrabold text-[50px]'>,,</p> */}
            <h3 className='font-bold text-[20px] pt-10 px-16'>“Simply professionals”</h3>
            <p className='px-16 py-4'>
               Working with SoftWingz Infotech has been an absolute pleasure. Their team of skilled professionals is not only knowledgeable in their field but also dedicated to providing top-notch service and support.Thank you for your support. 
                </p>
    </div>
        </div>
        <div>
        <div className='bg-white rounded text-left shadow-2xl mx-10'>
            
            <div className="flex">
            <img  className="ml-7 size-20" src="https://www.softwingz.com/assets/img/testimonials/b.jpg" alt="" />
            <div className='p-5'>
            <h2 className='font-bold text-[17px]'>Suresh Mehta</h2>
            <p>Ceo & Founder</p>
            </div>
            </div>
            {/* <p className='rotate-180 text-blue-100 font-extrabold text-[50px]'>,,</p> */}
            <h3 className='font-bold text-[20px] pt-10 px-16'>“Simply professionals”</h3>
            <p className='px-16 py-4'>
               Working with SoftWingz Infotech has been an absolute pleasure. Their team of skilled professionals is not only knowledgeable in their field but also dedicated to providing top-notch service and support.Thank you for your support. 
                </p>
    </div>
        </div>
        <div>
        <div className='bg-white rounded text-left shadow-2xl mx-10'>
            
            <div className="flex">
            <img  className="ml-7 size-20" src="https://www.softwingz.com/assets/img/testimonials/b.jpg" alt="" />
            <div className='p-5'>
            <h2 className='font-bold text-[17px]'>Suresh Mehta</h2>
            <p>Ceo & Founder</p>
            </div>
            </div>
            {/* <p className='rotate-180 text-blue-100 font-extrabold text-[50px]'>,,</p> */}
            <h3 className='font-bold text-[20px] pt-10 px-16'>“Simply professionals”</h3>
            <p className='px-16 py-4'>
               Working with SoftWingz Infotech has been an absolute pleasure. Their team of skilled professionals is not only knowledgeable in their field but also dedicated to providing top-notch service and support.Thank you for your support. 
                </p>
    </div>
        </div>
        <div>
          <div className='bg-white rounded text-left shadow-2xl mx-10'>
            
                <div className="flex">
                <img  className="ml-7 size-20" src="https://www.softwingz.com/assets/img/testimonials/b.jpg" alt="" />
                <div className='p-5'>
                <h2 className='font-bold text-[17px]'>Suresh Mehta</h2>
                <p>Ceo & Founder</p>
                </div>
                </div>
                {/* <p className='rotate-180 text-blue-100 font-extrabold text-[50px]'>,,</p> */}
                <h3 className='font-bold text-[20px] pt-10 px-16'>“Simply professionals”</h3>
                <p className='px-16 py-4'>
                   Working with SoftWingz Infotech has been an absolute pleasure. Their team of skilled professionals is not only knowledgeable in their field but also dedicated to providing top-notch service and support.Thank you for your support. 
                    </p>
        </div>
        </div>
      </Slider>
    </div>



    </div>
  )
}
