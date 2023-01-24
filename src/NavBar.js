import React from "react";


function NavBar(){
    return (
        <div>
     <nav class="navbar mynkNavBar bg-body-tertiary fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Mikaila Ivery</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Let's Keep in Touch</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 mynkLinks">
          <li class="nav-item">
            <a class="nav-link " aria-current="page" href="mailto:iverymikaila@gmail.com">EMAIL</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://www.linkedin.com/in/mikaila-ivery-259218223" target="_blank" >LINKEDIN</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://github.com/IveryMikaila?tab=repositories" target="_blank">GITHUB</a>
          </li>
        </ul>
        <span>
      <img alt="symbol of downloading file from internet"  />
      <button className="resumeBtn">
        <a href="#" className="resumeLink">Resume</a>
      </button>
      </span>
      </div>
    </div>
  </div>
</nav>
        </div>
    );
}
//Don't forget to update the href attributes for the links!!
//Also don't forget the "active" class, add that class to whatever page your actually on. It has to be in the actual link tag (ex: <a class="nav-link active" aria-current="page" href="#">About</a> )
export default NavBar;