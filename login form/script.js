// script.js

const form = document.getElementById("loginForm");

form.addEventListener("submit",(e)=>{

  e.preventDefault();

  const button = document.querySelector("button");

  button.innerHTML = "Authenticating...";

  button.style.boxShadow = `
  0 0 20px #00f7ff,
  0 0 40px #8a2be2`;

  setTimeout(()=>{

    button.innerHTML = "Access Granted 🚀";

    setTimeout(()=>{
      button.innerHTML = "Access System";
      form.reset();
    },2000);

  },2000);

});