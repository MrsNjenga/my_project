/* DYNAMIC GREETING */

const greeting = document.getElementById("greeting");

const hour = new Date().getHours();

if(hour < 12){
    greeting.innerHTML = "🌞 Good Morning";
}
else if(hour < 18){
    greeting.innerHTML = "☀️ Good Afternoon";
}
else{
    greeting.innerHTML = "🌙 Good Evening";
}

/* LIVE CLOCK */

function updateClock(){

    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("clock").innerHTML =
    `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock,1000);

updateClock();

/* BUTTON EFFECT */

const button = document.getElementById("exploreBtn");

button.addEventListener("click",()=>{

    button.innerHTML = "🚀 Welcome";

    button.style.transform = "scale(1.15)";

    setTimeout(()=>{
        button.style.transform = "scale(1)";
    },300);

});