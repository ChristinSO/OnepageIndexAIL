const logotwo = document.querySelector('.logo2');
logotwo.addEventListener('click', ()=> { 
  window.location.replace("/index.html");});
var bgclr=0;
//var mode = document.getElementById('body');


function loader(){
  //spin.style.opacity='0%';
  //wrap.style.op

  const wrap = document.querySelector("#wrap");

  setTimeout(() => {
   wrap.style.opacity = "0%";
   wrap.style.display = "none";
  }, 200);

 
if (window.matchMedia && window.matchMedia(' (max-width: 800px)').matches){ 
  if (window.matchMedia && window.matchMedia (' (prefers-color-scheme: dark)').matches) {
    mode = "dark";
    logoone();
    
  };
   
}
}



function getCookie(name) {
  let cookies = document.cookie.split(";"); // split cookies into array
  for (let cookie of cookies) { // loop through each cookie
    let [key,value] = cookie.trim().split("="); // split key and value
    if (key === name) { // if key matches name
      return value; // return value
    }
  }
  return null; // if no match found
}

var mode="dark";
//add cookie session and replace with dark to get rid of the double switch.
function logoone(){
  //alert(mode);
  //document.cookie = "dark";
 // alert(document.cookie);

 var bgs = document.querySelector("body");
 //if(bgs.style.backgroundImage = "/Resources/paper_inverted.webp"){
  //mode=light;
  //sunny.src = "/Resources/moon.png";
  
 //}
 const sunny = document.querySelector("#sun");

 //var links = document.getElementsByClassName("item");
 var link = document.querySelectorAll("a");

  if(mode=="light"){

    mode="dark";
    document.body.style.backgroundImage="url('/Resources/paper-texture.jpg')";
    sunny.src = "/Resources/sun.png";
    link.forEach(elem => elem.style.color = "#212529");
    link.forEach(elem => elem.addEventListener("mouseover",()=>{elem.style.color="#0603A0";}));
    link.forEach(elem => elem.addEventListener("mouseout",()=>{elem.style.color="#212529";}));
  
  }
  
  else {
  mode="light";
  document.body.style.backgroundImage="url('/Resources/paper_inverted.webp')";
  sunny.src = "/Resources/moon.png";
  //link.style.color = "red";
  link.forEach(elem => elem.style.color = "#3faef8");
  link.forEach(elem => elem.addEventListener("mouseover",()=>{elem.style.color="#bfbfbf";}));
  link.forEach(elem => elem.addEventListener("mouseout",()=>{elem.style.color="#3faef8";}));
}

}



function linkc(){
  //alert("You clicked the link");
  window.open("https://us17.list-manage.com/contact-form?u=fdd0a6eae771e6363c3efc98c&form_id=1cadc5553b74160731edeb24ce8f4cbd", '_blank').focus();
}
//if(document.body.backgroundImage="url('/Resources/paper-texture.jpg')")

//const dark1 = document.querySelector('.sun');
//dark1.addEventListener('click', ()=> { alert("hello");
//});

//Under this is the slide code
var slidePosition = 1;
SlideShow(slidePosition);  

// forward/Back controls
function plusSlides(n) {
  SlideShow(slidePosition += n);
}

//  images controls
function currentSlide(n) {
  SlideShow(slidePosition = n);
}

function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("Containers");
  var circles = document.getElementsByClassName("dots");
  if (n > slides.length) {slidePosition = 1}
  if (n < 1) {slidePosition = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
      circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition-1].style.display = "block";
  circles[slidePosition-1].className += " enable";
} 

// ------------------------------------------------------------------------------------------//
