// script.js

const form = document.getElementById("contactForm");

form.addEventListener("submit",(e)=>{

  e.preventDefault();

  const button = document.querySelector("button");

  button.innerHTML = "Sending...";

  setTimeout(()=>{

    button.innerHTML = "Message Sent 🚀";

    setTimeout(()=>{
      button.innerHTML = "Send Message";
      form.reset();
    },2000);

  },1500);

});