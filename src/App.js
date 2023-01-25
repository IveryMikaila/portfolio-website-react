
import React from "react";
import NavBar from "./NavBar"


function App() {
  

  function updateAbout () {
    let description = document.getElementById('description');
    description.style.backgroundColor = "#FCF038"
    let h1 = document.getElementById('h1');
    h1.innerHTML ="ABOUT"
  }
function updateProject () {
  let description = document.getElementById('description');
  description.style.backgroundColor = "#0C24FB"
  let h1 = document.getElementById('h1');
  h1.innerHTML ="PROJECTS"
}
function updateResume () {
  let description = document.getElementById('description');
  description.style.backgroundColor = "#FCF038"
  let h1 = document.getElementById('h1');
    h1.innerHTML ="RESUME"
}
function updateContact () {
let description = document.getElementById('description');
description.style.backgroundColor = "#0C24FB"
let h1 = document.getElementById('h1');
    h1.innerHTML ="CONTACT"
}

  return (
    <div className="App">
      <NavBar />
<div className="row mynkRow" >
<div className="col-2 left">
  <ul>
    <li id="about" onMouseOver={updateAbout}>ABOUT</li>
    <li id="projects" onMouseOver={updateProject}>PROJECTS</li>
    <li id="resume" onMouseOver={updateResume}>RESUME</li>
    <li id="contact" onMouseOver={updateContact}>CONTACT</li>
  </ul>
</div>
<div className="col-2 right" id="description">
<p>
  <h1 id="h1">ABOUT</h1>
  Lorem ipsum dolor sit amet. Qui galisum enim At fugiat consequuntur sit modi quam. Aut quaerat iusto sit totam odio aut neque facilis et nesciunt blanditiis est voluptatem mollitia aut neque praesentium sed impedit aperiam. Ut reiciendis quas aut accusantium repudiandae non quaerat tenetur est quia rerum ut voluptas sint qui dolor officiis est quasi omnis? Eos adipisci dolore non eius assumenda aut praesentium galisum in molestiae alias aut soluta expedita et quia iusto.
</p>
</div>
</div>

    </div>
    
  );
}

export default App;
