import React from 'react'

export default function Contactus() {
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-4 mt-20">


      <div className=" bg-slate-100  h-48 p-10">
          <div className="text-blue-600 flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-10"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
          </div>
          <p className="text-blue-600 text-[15px]">Our Address</p>
          <p>
            105,Ratnadeep Complex, 1st Floor,opposite Central Salt, Waghawadi
            road, Bhavnagar-364001
          </p>
        </div>

        <div className=" bg-slate-100  h-48 p-10">
          <div className="text-blue-600 flex justify-center  ">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-10">
  <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
  <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
</svg>

          </div>
          <p className="text-blue-600 text-[15px]">Email Us</p>
          <p>
          support@softwingz.com
          </p>
        </div>


        <div className=" bg-slate-100 h-48 p-10">
          <div className="text-blue-600 flex justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-10">
  <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clip-rule="evenodd" />
</svg>


          </div>
          <p className="text-blue-600 text-[15px]">Call Us</p>
          <p>
          +91 9023909022          </p>
        </div>



      </div>
    </div>
  )
}
