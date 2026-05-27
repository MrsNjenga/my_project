const password = document.getElementById("password");
const strengthBar = document.getElementById("strength-bar");
const togglePassword = document.getElementById("togglePassword");

/* PASSWORD STRENGTH */

password.addEventListener("input", () => {

    let value = password.value;
    let strength = 0;

    if(value.length >= 6){
        strength += 25;
    }

    if(value.match(/[A-Z]/)){
        strength += 25;
    }

    if(value.match(/[0-9]/)){
        strength += 25;
    }

    if(value.match(/[@#$%^&*!]/)){
        strength += 25;
    }

    strengthBar.style.width = strength + "%";

    if(strength <= 25){
        strengthBar.style.background = "red";
    }

    else if(strength <= 50){
        strengthBar.style.background = "orange";
    }

    else if(strength <= 75){
        strengthBar.style.background = "yellow";
    }

    else{
        strengthBar.style.background = "lime";
    }

});

/* SHOW PASSWORD */

togglePassword.addEventListener("click", () => {

    if(password.type === "password"){
        password.type = "text";
        togglePassword.innerHTML =
        `<i class="fa-solid fa-eye-slash"></i>`;
    }

    else{
        password.type = "password";
        togglePassword.innerHTML =
        `<i class="fa-solid fa-eye"></i>`;
    }

});