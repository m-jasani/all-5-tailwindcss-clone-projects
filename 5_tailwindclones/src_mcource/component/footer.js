import React from 'react'

export default function Footer() {
  return (
    <div>
      

            <div className="container row" id='ftitle'>

        <div className="col-md-3 col-sm-6" >
        <div id='cr'>
        
        <ul >
        <p> Enrol with Us</p>
            {/* {/ <li>Enrol with Us</li> /} */}
        <li id='li'><a href="">Apply Now</a></li>
        <li><a href="">National Admissions</a></li>
        <li> <a href="">International Admissions</a></li>
        <li> <a href="">Admission Offices</a></li>
        </ul>
        </div>
        </div>
        <div className="col-md-3 col-sm-6">
        
        <ul >
        <p>Learn with Us</p>
        <li id='li'><a href="">Research & Innovation</a></li>
        <li><a href="">Libraries</a></li>
        <li> <a href="">SSCCM Advantages</a></li>
        <li> <a href="">ABC Scheme</a></li>
        </ul>
        </div>
        <div className="col-md-3 col-sm-6">
        
        <ul >
        <p>Grow with Us</p>
        <li id='li'><a href="">Culture at SSCCM</a></li>
        <li><a href="">Awards and Ranking</a></li>
        
        </ul>
        </div>
        <div className="col-md-3 col-sm-6">

        <ul >
        <p>Connect with Us</p>
        <li id='li'><a href="">Contact Us</a></li>
        <li><a href="">Admission Helpline</a></li>
        <li> <a href="">Visit Us</a></li>
        </ul>
        </div>
        </div>


    </div>
  )
}
