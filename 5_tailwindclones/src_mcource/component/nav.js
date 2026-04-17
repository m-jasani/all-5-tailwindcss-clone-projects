import React from 'react'

export default function Nav() {
  return (
    <div>
      <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-lg mb-5 bg-body-tertiary rounded">
  <div className="container-fluid">
    <a id="navimg" className="navbar-brand navbar nav-left" href="#"><img src="https://www.mcourse.co.in/assets/img/M_COURSE_LOGO_FINAL.png" alt="Bootstrap" width="30%" height="auto"/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse list1" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0 py-0">
        <li className="nav-item">
          <a className="nav-link active text-dark" aria-current="page" href="#">Home</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li> */}
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" id="drp">
            About US
          </a>
          <ul className="dropdown-menu">
          <li><a className="dropdown-item text-dark" href="#">About US</a></li>
            <li><a className="dropdown-item" href="#">CEO</a></li>
            <li><a className="dropdown-item" href="#">Social Actity</a></li>
            {/* <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li> */}
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link text-dark dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" id="drp">
          Services
          </a>
          <ul className="dropdown-menu ">
            <li><a className="dropdown-item" href="#">E-Logbook & LMS</a></li>
            <li><a className="dropdown-item" href="#">Web Development</a></li>
            <li><a className="dropdown-item" href="#">App Development</a></li>
            <li><a className="dropdown-item" href="#">App Development</a></li>
            <li><a className="dropdown-item" href="#">Software Development</a></li>
            <li><a className="dropdown-item" href="#">Dedicated Developers</a></li>
            <li><a className="dropdown-item" href="#">Chatbot</a></li>
            <li><a className="dropdown-item" href="#">Bulk Whatsapp</a></li>
            <li><a className="dropdown-item" href="#">Web Hosting</a></li>
            <li><a className="dropdown-item" href="#">Video Marketing</a></li>
            <li><a className="dropdown-item" href="#">Internship</a></li>
            {/* <li><hr className="dropdown-divider"/></li> */}
            {/* <li><a className="dropdown-item" href="#">Something else here</a></li> */}
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a id="drp" className="nav-link text-dark dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Technologies
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">React.js</a></li>
            <li><a className="dropdown-item" href="#">React Native</a></li>
            <li><a className="dropdown-item" href="#">Next.js</a></li>
            <li><a className="dropdown-item" href="#">Node.js</a></li>
            {/* <li><hr className="dropdown-divider"/></li> */}
            {/* <li><a className="dropdown-item" href="#">Something else here</a></li> */}
          </ul>
          </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="#">Gallery</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="#">Blogs</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="#">Contact</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li> */}
      </ul> 
    </div>
  </div>
</nav>
      </>
    </div>
  )
}
