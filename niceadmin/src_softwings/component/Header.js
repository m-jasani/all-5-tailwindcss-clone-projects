import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
  const click=()=>{
    const menuButton = document.getElementById('menuButton');
    const menu = document.getElementById('menu');
  
    menuButton.addEventListener('click', function() {
      menu.classList.toggle('hidden'); // Toggle 'hidden' class to show/hide the menu
    });
  }

  return (  
    <div >
    <div className="">
      <div className="bg-white sm:mx-24 sm:mt-8 mb-0 sm:flex inline-block" >
      <img src="https://www.softwingz.com/assets/img/logo.png" className='h-20   left-0' alt="" />
        <ul id="menu" className="sm:text-black sm:w-fit sm:ml-80 lg:ml-40  md:ml-28 sm:flex sm:flex-row sm:m-6 pt-24 sm:pt-0 px-20 hidden " >
            <li className='text-black lg:pl-8 sm:pl-3 hover:text-orange-500'><Link to="/home">Home</Link></li>
            <li className='text-black lg:pl-8 sm:pl-3  hover:text-orange-500'><Link to="/about">About</Link></li>
            <li className='text-black lg:pl-8 sm:pl-3  hover:text-orange-500'><Link to="/service">Services</Link></li>
            <li className='text-black lg:pl-8 sm:pl-3  hover:text-orange-500'><Link to="/team">Team</Link></li>
            <li className='text-black lg:pl-8 sm:pl-3  hover:text-orange-500'><Link to="/contact">Contact</Link></li>
            <li className='text-white lg:ml-8 sm:ml-3 sm:px-5 sm:py-2 bg-blue-950 rounded-3xl ' ><button className=''>Get Started</button></li>
        </ul>
        <button  id="menuButton" onClick={click} class="sm:m-5 m-0 text-black  bg-gray-500 sm:hidden rounded ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

  </button>

 

      </div>
    </div>
    </div>
  )
}
