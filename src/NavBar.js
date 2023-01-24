import React from "react";
import mynkLogo from "./img/logo.png"

function NavBar(){
    return (
        <div>
     <nav class="navbar mynkNavBar bg-body-tertiary ">
  <div class="container-fluid">
    <a class="navbar-brand " href="/"><img src={mynkLogo} width="200px" alt="Mikaila Ivery's Logo" /></a>
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
       
   
      <button className="dwnldBtn">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
</svg>
      </button>
      <button className="resumeBtn">
        <a href="#" className="resumeLink"> Resume</a>
      </button>
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