import React from 'react'

export default function Scr1({isCompressed}) {
  return (
    
    <div>
    <div className='bg-[#f6f9ff] py-3'>
        <h1 className='text-left px-6 pt-2 text-[20px] font-semibold text-blue-950'>Dashboard</h1>
        <p className="text-left px-6 text-sm text-gray-500"> Home / <span className='text-[15xpx] pl-2 pt-1 text-sm text-gray-800'> Dashboard</span> </p>

      <div className="">
               
                <div className="">
                    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 ld:grid-cols-9 m-3 md:m-5 gap-4 ">

        
                        <div  className=" h-36 pb-4 bg-white rounded-lg shadow-xl col-span-2" >
                            <div className={`${'isCompressed'?'w-64':'w-72'}`}>
                            <div className="flex  flex-shrink justify-between">
                            <p className='text-left  ml-8 mt-4 flex'><span className="text-lg text-blue-950 font-semibold ">Sales </span><span className='pl-2 pt-1 text-sm text-gray-500'> | Today</span></p>
                      
            
                            
                            <p className=' mt-2 text-2xl text-gray-600'>...</p>
                            </div>
                            <div className="flex m-4">
                                <p className='bg-blue-100 rounded-full size-16 p-3   text-blue-900'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                </svg>
                                </p>
                                <div className=" text-left ml-4 leading-tight">
                                    <p className="text-blue-800 font-bold text-[25px]">145</p>
                                    <p className="text-[14px]"><span className='text-green-600 font-bold'>12%</span> increase</p>
                                </div>
                            </div>
                            </div>
                        </div>


                        <div className=" h-36 bg-white rounded-xl shadow-lg col-span-2">
                        <div className={`${'isCompressed'?'w-64':'w-72'}`}>

                            <div className="flex justify-between">
                            <p className='text-left  ml-8 mt-4 '><span className="text-lg text-blue-950 font-semibold">Revenue</span><span className="pl-2 pt-1 text-sm text-gray-500"> | This Month</span></p>
                            <p className=' mt-2 text-2xl text-gray-600'>...</p>
                            </div>
                            <div className="flex m-4">
                                <p className='bg-green-100 rounded-full size-16 p-3   text-green-900'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>

                                </p>
                                <div className=" text-left ml-4 leading-tight">
                                    <p className="text-blue-800 font-bold text-[25px]">$3,264</p>
                                    <p className="text-[14px]"><span className='text-green-600 font-bold'>8%</span> increase</p>
                                </div>
                            </div>
                            </div>
                        </div>



                        <div className=" h-36 bg-white rounded-lg shadow-xl col-span-2">
                        <div className={`${'isCompressed'?'w-64':'w-72'}`}>
                            
                            <div className="flex">
                            <p className='text-left  ml-8 mt-4 text-justify'><span className="text-lg text-blue-950 font-semibold">Customers</span><span className="pl-2 pt-1 text-sm text-gray-500"> | This Year</span></p>
                            <p className='ml-[47px] mt-2 text-2xl text-gray-600'>...</p>
                            </div>
                            <div className="flex m-4">
                                <p className='bg-red-100 rounded-full size-16 p-3   text-orange-900'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>

                                </p>
                                <div className=" text-left ml-4 leading-tight">
                                    <p className="text-blue-800 font-bold text-[25px]">1244</p>
                                    <p className="text-[14px]"><span className='text-red-600 font-bold'>12%</span> decrease</p>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg  col-span-3">
                            <div className="flex">
                                <p className='text-left  ml-8 mt-4 '><span className="text-lg text-blue-950 font-semibold">Recent Activity</span><span className="pl-2 pt-1 text-sm text-gray-500">| Today</span> </p>
                                <p className='ml-48 mt-2 text-2xl text-gray-600'>...</p>
                            </div>


                            <div className="flex my-5 ml-9 ">

                                <div className="w-16 ">
                                    <div className="text-[14px] text-gray-500">32 min</div>
                                    <div className="h-3"></div>
                                    <div className="text-[14px] text-gray-500">56 min</div>
                                    <div className="h-3"></div>
                                    <div className="text-[14px] text-gray-500">2 hrs</div>
                                    <div className="h-3"></div>
                                    <div className="text-[14px] text-gray-500">1 day</div>
                                    <div className="h-3"></div>
                                    <div className="text-[14px] text-gray-500">2 days</div>
                                    <div className="h-3"></div>

                                    <div className="text-[14px] text-gray-500">4 weeks</div>
                                </div>


                                <div className=" ">


                                <div class=" ">
                                        <div class="h-3 w-3 rounded-full bg-green-500"></div>
                                        <div class="h-5  w-1 bg-gray-400 mx-1 my-px"></div> 
                                    </div>
                                <div class=" ">
                                        <div class="h-3 w-3 rounded-full bg-red-500"></div>
                                        <div class="h-5 w-1 bg-gray-400 mx-1 my-px"></div> 
                                    </div>
                                <div class=" ">
                                        <div class="h-3 w-3 rounded-full bg-blue-900"></div>
                                        <div class="h-5 w-1 bg-gray-400 mx-1 my-px"></div> 
                                    </div>
                                <div class=" ">
                                        <div class="h-3 w-3 rounded-full bg-blue-400"></div>
                                        <div class="h-5 w-1 bg-gray-400 mx-1 my-px"></div> 
                                    </div>
                                <div class=" ">
                                        <div class="h-3 w-3 rounded-full bg-yellow-500"></div>
                                        <div class="h-5 w-1 bg-gray-400 mx-1 my-px"></div> 
                                    </div>
                                <div class=" ">
                                        <div class="h-3 w-3 rounded-full bg-gray-600"></div>
                                        <div class="h-5 w-1 bg-gray-400 mx-1 my-px"></div> 
                                    </div>
                                   
                                   
                                </div>



                                <div className="">
                                    <p className=" text-left text-[14px] ml-1">Quia quae rerum explicabo officiis beatae</p>
                                    <div className="h-3"></div>
                                    <p className=" text-left ml-1 text-[14px]">Quia quae rerum explicabo officiis beatae</p>
                                    <div className="h-3"></div>
                                    <p className=" text-left ml-1 text-[14px]">Quia quae rerum explicabo officiis beatae</p>
                                    <div className="h-3"></div>
                                    <p className=" text-left ml-1 text-[14px]">Quia quae rerum explicabo officiis beatae</p>
                                    <div className="h-3"></div>
                                    <p className=" text-left ml-1 text-[14px]">Quia quae rerum explicabo officiis beatae</p>
                                    <div className="h-3"></div>
                                    <p className=" text-left ml-1 text-[14px]">Quia quae rerum explicabo officiis beatae</p>
                                </div>
                            </div>

                    </div>


                    </div>

                    </div>


                   






                   
                    

      </div>
        
     

       
    </div>
    </div>
  )
}
