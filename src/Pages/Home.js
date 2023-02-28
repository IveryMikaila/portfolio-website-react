//Styling Imports
import './styles.css'
import logo from '../assets/logo.png';

function Home() {
//Code for ABOUT SECTION
function displayAbout (){
  const rightContent =document.getElementById('rightContent');
  let rightContentHTML =  `<div class='aboutContent'>`;
if (rightContent.classList.contains('about')){
  rightContentHTML = rightContentHTML +
`
<div>
<img src=${logo} alt='placeHolder Image' />
<h1> ABOUT SECTION</h1>
<h2> GURL YOU DID IT, JESUS LOVES YOU!</h2>
</div>
`;
}
rightContentHTML = rightContentHTML + `</div>`;
rightContent.innerHTML = rightContentHTML;
}

  function updateAbout () {
    let description = document.getElementById('description');
    description.style.backgroundColor = "#FCF038"
    document.getElementById('description').style.color ="black";
    let h1 = document.getElementById('h1');
    h1.innerHTML ="ABOUT"
    displayAbout();
  }
  //Code for PROJECT SECTION
  function displayProject (){
    const rightContent =document.getElementById('rightContent');
    let rightContentHTML =  `<div class='aboutContent'>`;
  if (rightContent.classList.contains('project')){
    rightContentHTML = rightContentHTML +
  `
  <div>
  <img src=${logo} alt='placeHolder Image' />
  <h1> PROJECT SECTION</h1>
  <h2> GURL YOU DID IT, JESUS LOVES YOU!</h2>
  </div>
  `;
  }
  rightContentHTML = rightContentHTML + `</div>`;
  rightContent.innerHTML = rightContentHTML;
  }

function updateProject () {
  let description = document.getElementById('description');
  description.style.backgroundColor = "#0C24FB"
  document.getElementById('description').style.color ="white";
  let h1 = document.getElementById('h1');
  h1.innerHTML ="PROJECTS"
  displayProject();
}
 //Code for RESUME SECTION
 function displayResume (){
  const rightContent =document.getElementById('rightContent');
  let rightContentHTML =  `<div class='aboutContent'>`;
if (rightContent.classList.contains('about')){
  rightContentHTML = rightContentHTML +
`
<div>
<img src=${logo} alt='placeHolder Image' />
<h1> RESUME SECTION</h1>
<h2> GURL YOU DID IT, JESUS LOVES YOU!</h2>
</div>
`;
}
rightContentHTML = rightContentHTML + `</div>`;
rightContent.innerHTML = rightContentHTML;
}

function updateResume () {
  let description = document.getElementById('description');
  description.style.backgroundColor = "#FCF038"
  document.getElementById('description').style.color ="black";
  let h1 = document.getElementById('h1');
    h1.innerHTML ="RESUME"
    displayResume();
}
 //Code for CONTACT SECTION
 function displayContact (){
  const rightContent =document.getElementById('rightContent');
  let rightContentHTML =  `<div class='aboutContent'>`;
if (rightContent.classList.contains('about')){
  rightContentHTML = rightContentHTML +
`
<div>
<img src=${logo} alt='placeHolder Image' />
<h1> CONTACT SECTION</h1>
<h2> GURL YOU DID IT, JESUS LOVES YOU!</h2>
</div>
`;
}
rightContentHTML = rightContentHTML + `</div>`;
rightContent.innerHTML = rightContentHTML;
}

function updateContact () {
let description = document.getElementById('description');
description.style.backgroundColor = "#0C24FB"
document.getElementById('description').style.color ="white";
let h1 = document.getElementById('h1');
    h1.innerHTML ="CONTACT"
    displayContact();
}
//Website React Code
  return (
    <div className="App">
<div className=" mynkRow" >
<div className="left">
  <ul>
    <li id="about" onMouseOver={updateAbout}>ABOUT</li>
    <li id="projects" onMouseOver={updateProject}>PROJECTS</li>
    <li id="resume" onMouseOver={updateResume}>RESUME</li>
    <li id="contact" onMouseOver={updateContact}>CONTACT</li>
  </ul>
</div>
<div className="right" id="description">
<p>
  <h1 id="h1">ABOUT</h1>
  <div id='rightContent' className='rightContent about project resume contact'>
  <p>
  Lorem ipsum dolor sit amet. Qui galisum enim At fugiat consequuntur sit modi quam. Aut quaerat iusto sit totam odio aut neque facilis et nesciunt blanditiis est voluptatem mollitia aut neque praesentium sed impedit aperiam. Ut reiciendis quas aut accusantium repudiandae non quaerat tenetur est quia rerum ut voluptas sint qui dolor officiis est quasi omnis? Eos adipisci dolore non eius assumenda aut praesentium galisum in molestiae alias aut soluta expedita et quia iusto.
  </p>
  <p>
  Lorem ipsum dolor sit amet. Qui galisum enim At fugiat consequuntur sit modi quam. Aut quaerat iusto sit totam odio aut neque facilis et nesciunt blanditiis est voluptatem mollitia aut neque praesentium sed impedit aperiam. Ut reiciendis quas aut accusantium repudiandae non quaerat tenetur est quia rerum ut voluptas sint qui dolor officiis est quasi omnis? Eos adipisci dolore non eius assumenda aut praesentium galisum in molestiae alias aut soluta expedita et quia iusto.
  </p>
  </div>
</p>
</div>
</div>
    </div>  
  );
}

export default Home;