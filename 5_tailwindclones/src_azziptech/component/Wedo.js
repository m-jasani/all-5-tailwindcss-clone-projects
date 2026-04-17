import React from 'react'

export default function Wedo() {
  return (
    <div className=' mt-20'>
        <div className="flex justify-center">
        <div className=" inline-block border-4 border-[#EC8305] h-[5px] w-16 mt-8 mr-3"></div>
            <h1 className=" text-center font-bold text-[30px] md:text-[50px] text-blue-950   font-N ">
                    WHAT WE DO
            </h1>
        <div className=" inline-block border-4 border-[#EC8305] h-[5px] w-16 mt-8 ml-3"></div>

      </div>

    <div className="grid grid-cols-1 md:grid-cols-2 md:mx-36 mx-0 gap-8 my-7 ">
        <div className="flex">
            <img className="size-40" src="https://www.azziptech.com/assets/img/services/web-development-service-azziptech.avif" alt="" />
            <div className="text-left m-3">
            <p className="text-[20px] md:text-[30px] font-semibold font-N"><span className=' text-[#EC8305]'>WEB</span> DEVELOPMENT</p>
            <p className=" text-[12px] md:text-[15px] font-N">we help identify the best way to improve your business</p>
            </div>
        </div>
        
        <div className="flex ">
            <img className="size-40" src="https://www.azziptech.com/assets/img/services/app-development-service-azziptech.avif" alt="" />
            <div className="text-left m-3">
            <p className="text-[20px] md:text-[30px] font-semibold font-N"><span className=' text-[#EC8305]'>APP</span> DEVELOPMENT</p>
            <p className=" text-[12px] md:text-[15px] font-N">we help identify the best way to improve your business</p>
            </div>
        </div>
        
        <div className="flex ">
            <img className="size-40" src="https://www.azziptech.com/assets/img/services/hire-developer-service-azziptech.avif" alt="" />
            <div className="text-left m-3">
            <p className="text-[20px] md:text-[30px] font-semibold font-N "><span className=' text-[#EC8305]'>DEDICATED</span> DEVELOPMENT</p>
            <p className=" text-[12px] md:text-[15px] font-N">we help identify the best way to improve your business</p>
            </div>
        </div>
        
        <div className="flex ">
            <img className="size-40" src="https://www.azziptech.com/assets/img/services/internship-service-azziptech.avif" alt="" />
            <div className="text-left m-3">
            <p className="text-[20px] md:text-[30px] font-semibold font-N "><span className=' text-[#EC8305]'>INTERNSHIP</span> INFO</p>
            <p className=" text-[12px] md:text-[15px] font-N">we help identify the best way to improve your business</p>
            </div>
        </div>
        
        
        
    </div>


    </div>
  )
}
