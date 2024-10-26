import React from 'react'

export default function Nav({toggleContentWidth}) {

  
   



  return (
  
    <div className="bg-white sticky top-0 h-29 md:h-auto">


      

      <ul className="flex md:grid md:grid-cols-5  md:px-3 pt-3 pb-1">


          <li className="md:col-span-1 flex ">
            <img className='size-8 mr-3 ml-1 *:md:ml-8' src="https://bootstrapmade.com/content/demo/NiceAdmin/assets/img/logo.png" alt="" />
            <div className="hidden md:inline-block">
            <p className="font-bold  text-blue-950 text-left text-[20px]">NiceAdmin</p>
            </div>
          </li>


          <li className="flex md:col-span-1 ">
            <button onClick={toggleContentWidth} className='' href=""><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            </button>

            

            <div class=" hidden md:flex mx-4 border-gray-300 border-[1px] hover:shadow-md rounded-md px-2">
              <input 
                type="text" 
                class="w-48 sm:w-64 h-8  p-2  rounded-md  text-black focus:outline-none  "
                placeholder="Search"/>
                <button className='size-1 md:size-5'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg></button>
              
            </div>

            <div className=" ml-16 md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7">
                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </div>

          </li>


          <li className="md:col-span-2">

          </li>

          <li className="flex gap-3 md:col-span-1">
            <div className="size-7">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
              </svg>
              </div>


              <div className="size-7">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
              </svg>
            </div>


              <img className="size-8 rounded-full " src="https://bootstrapmade.com/content/demo/NiceAdmin/assets/img/profile-img.jpg" alt=""  />

              <div className="">
              <div class="container mx-auto ">
    <div class="relative inline-block text-left">
      {/* <!-- Dropdown Trigger Button --> */}
      <button  class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-3 py-1 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 ">
        K.Anderson
        <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* <!-- Dropdown Menu --> */}
      {/* <div id="dropdownMenu" class="hidden origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
        <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Account settings</a>
          <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Support</a>
          <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">License</a>
          <form method="POST" action="#">
            <button type="submit" class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</button>
          </form>
        </div>
      </div> */}
    </div>
  </div>

              </div>







          </li>



      </ul>
    </div>

   
    
  )
}





 
  

