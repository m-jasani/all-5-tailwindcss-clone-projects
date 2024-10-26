import React, { useState } from 'react';

const Dropdown4 = () => {
  const [isVisible, setIsVisible] = useState(false); // State to manage visibility

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev); // Toggle visibility
  };

  return (
    <div className="hover:bg-[#f6f9ff]">
      <button 
        onClick={toggleVisibility} 
        className=" py-2  text-white rounded flex"
      >
        
                        <div className="text-blue-900 flex hover:text-blue-500 ">
                <span className=""><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
</svg>

</span>
                <p className="ml-2 text-[15px]">Charts</p>
                <span className="pt-1  pl-[134px]"><svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg></span></div>


      </button>



      {isVisible && (
        <ul className="  rounded text-left">
        


        <div className="flex pl-10"><div className="mt-2 mr-2 size-2 rounded-full inline-block border border-blue-800 border-3 border-px hover:bg-blue-800"></div><p className=" text-blue-900 hover:text-blue-500 text-[14px] ">Chart.js</p></div>
        <div className="flex pl-10"><div className="mt-2 mr-2 size-2 rounded-full inline-block border border-blue-800 border-3 border-px hover:bg-blue-800"></div><p className=" text-blue-900 hover:text-blue-500 text-[14px] ">ApexCharts</p></div>
        <div className="flex pl-10"><div className="mt-2 mr-2 size-2 rounded-full inline-block border border-blue-800 border-3 border-px hover:bg-blue-800"></div><p className=" text-blue-900 hover:text-blue-500 text-[14px] ">ECharts</p></div>

         
          
          
          
        </ul>
      )}
    </div>
  );
};

export default Dropdown4;

