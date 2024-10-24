import React,{useState} from 'react'
import Dropdown1 from './Dropdown1'
import Dropdown2 from './Dropdown2'
import Dropdown3 from './Dropdown3'
import Dropdown4 from './Dropdown4'
import Dropdown5 from './Dropdown5'

export default function Sidebar() {

  
   

    
  return (
    <div className='p-7 '>

      <div className="flex py-2  text-blue-900 flex hover:text-blue-500  hover:bg-[#f6f9ff]"><div className=""><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-app-indicator" viewBox="0 0 16 16">
  <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1z"/>
  <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
</svg></div><div className="">Dashboard</div> </div>

<Dropdown1/>
<Dropdown2/>
<Dropdown3/>
<Dropdown4/>
<Dropdown5/>
      
    </div>
  )
}


