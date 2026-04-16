import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel2() {

    const settings = {
        dots:false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000, // Slide every 2 seconds
        dots:false,
      };
      

  return (
    <>
    <div className="bg-white md:w-[100%] ld:w-[80%] sm:px-8">

      <div className="flex justify-between">
    <h2 className=' pt-5 pb-2 text-left text-[20px] font-bold'>Premium Product</h2>
    <div className="pt-5">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 fill-blue-800  ">
        <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
      </div>
    </div>

    <Slider {...settings}>

      
      <div className="">
        <div className="border border-2 border-gray-300 rounded p-2">
        <img className='md:ml-6  w-36 h-44' src="https://rukminim2.flixcart.com/image/200/200/xif0q/headphone/p/r/z/enco-buds-2-oppo-original-imagh9frfp7gxdb3.jpeg?q=70" alt=""  />
        <p className="px-5 text-[14px] ">Best of QLED TVs <strong>Rs.7000 Off on Exch*</strong></p>
        </div>
      </div>
      <div className="">
        <div className="border border-2 border-gray-300 rounded p-2">
        <img className='md:ml-6 w-36 h-44' src="https://rukminim2.flixcart.com/image/200/200/xif0q/smartwatch/w/x/h/-original-imahfa7xspmxemvj.jpeg?q=70" alt=""  />
        <p className="px-5 text-[14px] ">Best of QLED TVs <strong>Rs.7000 Off on Exch*</strong></p>
        </div>
      </div>
      <div className="">
        <div className="border border-2 border-gray-300 rounded p-2">
        <img className='md:ml-6  w-36 h-44' src="https://rukminim2.flixcart.com/image/200/200/khavrm80/gamepad/9/n/m/microsoft-xbox-wireless-controller-original-imafxc8hdf7hheds.jpeg?q=70" alt=""  />
        <p className="px-5 text-[14px] ">Best of QLED TVs <strong>Rs.7000 Off on Exch*</strong></p>
        </div>
      </div>
      <div className="">
        <div className="border border-2 border-gray-300 rounded p-2">
        <img className='md:ml-6  w-36 h-44' src="https://rukminim2.flixcart.com/image/200/200/kwnv6a80/camera-led-light/o/6/p/480-6000-5-professional-19-inch-rgb-ring-light-for-youtube-photo-original-imag9a8cytgcshf9.jpeg?q=70" alt=""  />
        <p className="px-5 text-[14px] ">Best of QLED TVs <strong>Rs.7000 Off on Exch*</strong></p>
        </div>
      </div>
      <div className="">
        <div className="border border-2 border-gray-300 rounded p-2">
        <img className='md:ml-6  w-36 h-44' src="https://rukminim2.flixcart.com/image/200/200/xif0q/safe-locker/g/l/4/aps-1111-plantex-original-imagpa3rt3gyhfrp.jpeg?q=70" alt=""  />
        <p className="px-5 text-[14px] ">Best of QLED TVs <strong>Rs.7000 Off on Exch*</strong></p>
        </div>
      </div>
      <div className="">
        <div className="border border-2 border-gray-300 rounded p-2">
        <img className='md:ml-6  w-36 h-44' src="https://rukminim2.flixcart.com/image/200/200/xif0q/ceiling-lamp/z/z/y/4-1-40-40-1-7-adw-400mm-black-goldg-adwait-original-imagubjgnyyfjmfy.jpeg?q=70" alt=""  />
        <p className="px-5 text-[14px] ">Best of QLED TVs <strong>Rs.7000 Off on Exch*</strong></p>
        </div>
      </div>
      <div className="">
        <div className="border border-2 border-gray-300 rounded p-2">
        <img className='md:ml-6  w-36 h-44' src="https://rukminim2.flixcart.com/image/200/200/xif0q/bedsheet/p/q/0/hl144p0010-k-1-hl144p0010-k-flat-huesland-original-imaghghsr3eae5pt.jpeg?q=70" alt=""  />
        <p className="px-5 text-[14px] ">Best of QLED TVs <strong>Rs.7000 Off on Exch*</strong></p>
        </div>
      </div>
   
      
    </Slider>
  </div>

  <div className="block md:hidden">

  </div>

  </>
  )
}

