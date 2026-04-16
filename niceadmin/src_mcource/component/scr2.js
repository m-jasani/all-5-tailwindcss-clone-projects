import React from 'react'

export default function Scr2() {
  return (
    <div  className=''>
       <h5 className='about'><u>Contact Us</u></h5>

        <div className="container-fuild row" id="block3">
            <div className="col-md-4 ps-3">
            <span class="text-start" >
                <div class="card-body">
                    <h5 class="card-title text-danger"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-geo-alt mb-3" viewBox="0 0 16 16">
                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                        </svg></h5>
                   <h3>Address</h3>
                    <p>A108 Adam Street,
                    New York, NY 535022</p>
                    {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                </div>
                </span>
            </div>



            <div className="col-md-4">
            <span class="text-start" >
                <div class="card-body">
                    <h5 class="card-title text-danger"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-envelope mb-3" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
</svg></h5>

                    <h3>Email Us</h3>
                    <p> info@example.com
                    contact@example.com</p>
                    {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                </div>
                </span>

            </div>

            <div className="col-md-4 pe-3">
            <span class="text-start" >
                <div class="card-body">
                    <h5 class="card-title text-danger"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-phone mb-3" viewBox="0 0 16 16">
  <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
</svg></h5>

                    <h3>Call Us</h3>
                    <p>A108 Adam Street,
                    New York, NY 535022</p>
                    {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                </div>
                </span>
            </div>
        </div>


        <div>
        <div className="p-3 m-5 bg-dark text-white my-2 text-light card shadow  mb-5  rounded d-flex justify-content-center">
        <span className="row">
            <h4 className='card-title'>Apply Now</h4>
            <div className="col-md-4">
            <div class="m-3">
            <label for="exampleFormControlInput1" class="form-label"></label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="your name"/>
            </div>
            </div>

            <div className="col-md-4">
            <div class="m-3">
            <label for="exampleFormControlInput1" class="form-label"></label>
            <input type="mail" class="form-control" id="exampleFormControlInput1" placeholder="your email"/>
            </div>
            </div>

            <div className="col-md-4">
            <div class="m-3">
            <label for="exampleFormControlInput1" class="form-label"></label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="subject"/>
            </div>
            </div>

        </span>


           
            <div class="m-3">
            <label for="exampleFormControlTextarea1" class="form-label"></label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="message"></textarea>
            </div>

            <span><button type="button" class="btn  btn-danger mb-3">send messager</button></span>
    </div>

        </div>
    </div>
  )
}
