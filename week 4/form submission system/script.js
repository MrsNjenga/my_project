// script.js

const form = document.getElementById("form");
const successBox = document.getElementById("successBox");

form.addEventListener("submit", function(e){
  e.preventDefault();

  successBox.style.display = "block";

  form.reset();

  setTimeout(()=>{
    successBox.style.display = "none";
  },3000);
});