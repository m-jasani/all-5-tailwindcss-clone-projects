import React, { useState } from 'react';

const Dropdown5 = () => {
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
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125Z" />
</svg>


</span>
                <p className="ml-2 text-[15px]">Icons</p>
                <span className="pt-1  pl-[142px]"><svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg></span></div>


      </button>



      {isVisible && (
        <ul className="  rounded text-left">


        <div className="flex pl-10"><div className="mt-2 mr-2 size-2 rounded-full inline-block border border-blue-800 border-3 border-px hover:bg-blue-800"></div><p className=" text-blue-900 hover:text-blue-500 text-[14px] ">Remix Icons</p></div>
        <div className="flex pl-10"><div className="mt-2 mr-2 size-2 rounded-full inline-block border border-blue-800 border-3 border-px hover:bg-blue-800"></div><p className=" text-blue-900 hover:text-blue-500 text-[14px] ">Boxicons</p></div>
          
        
          
          
          
          
        </ul>
      )}
    </div>
  );
};

export default Dropdown5;

