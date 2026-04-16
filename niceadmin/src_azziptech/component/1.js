import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Clients() {
  return (
    <div className='mt-20'>
      <div className="flex justify-center ">
        <div className=" inline-block border-4 border-[#EC8305] h-[5px] w-16 mt-8 mr-3"></div>
            <h1 className=" text-center font-bold text-[30px] md:text-[50px] text-blue-950   ">
                    OUR CLIENTS
            </h1>
        <div className=" inline-block border-4 border-[#EC8305] h-[5px] w-16 mt-8 ml-3"></div>
         </div>

         <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-4  mx-24 my-7 gap-1">


            <div className='bg-black hover:border-8 hover:border-blue-950  border-[4px] border-[#6b6864] flex justify-center'>
                <img className="size-44 rounded-full border-8 border-red-900" src="https://www.azziptech.com/assets/img/clients/1-GMCB-Azziptech.jpg" alt=""  />
            </div>

            <div className='hover:border-8 hover:border-blue-950  border-[4px] border-[#6b6864]   flex justify-center'>
                <img className="size-40" src="https://www.azziptech.com/assets/img/clients/ssccm.png" alt=""  />
            </div>

            <div className=' hover:border-8 hover:border-blue-950 border-[4px] border-[#6b6864]   flex justify-center'>
                <img className="size-40" src="https://www.azziptech.com/assets/img/clients/11-NHL.jpg" alt=""  />
            </div>


            <div className='hover:border-8 hover:border-blue-950  border-[4px] border-[#6b6864]   flex justify-center'>
                <img className="size-40" src="https://www.azziptech.com/assets/img/clients/6-ima-bhavnagar.png" alt=""  />
            </div>

            <div className='hover:border-8 hover:border-blue-950 border-[4px] border-[#6b6864]   flex justify-center'>
                <img className="size-40" src="https://www.azziptech.com/assets/img/clients/HIMS-Azziptech.jpg" alt=""  />
            </div>

            <div className='hover:border-8 hover:border-blue-950 border-[4px] border-[#6b6864]   flex justify-center'>
                <img className="size-40" src="https://www.azziptech.com/assets/img/clients/7-orrery-drugs.png" alt=""  />
            </div>

            <div className='hover:border-8 hover:border-blue-950  border-[4px] border-[#6b6864]   flex justify-center'>
                <img className="size-40" src="https://www.azziptech.com/assets/img/clients/2-aj-institute.jpg" alt=""  />
            </div>

            <div className='hover:border-8 hover:border-blue-950 border-[4px] border-[#6b6864]   flex justify-center'>
                <img className="size-40" src="https://www.azziptech.com/assets/img/clients/GMC%20Azziptech.png" alt=""  />
            </div>


        </div>




    </div>
  )
}
