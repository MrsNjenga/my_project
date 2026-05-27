const form = document.getElementById("emailForm");
const email = document.getElementById("email");
const message = document.getElementById("message");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    validateEmail();
});

function validateEmail() {
    const emailValue = email.value.trim();

    // Email Regex
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(emailValue === ""){
        setError("Email cannot be empty");
    }
    else if(!pattern.test(emailValue)){
        setError("Invalid email format");
    }
    else{
        setSuccess("Valid email address");
    }
}

function setError(msg){
    message.innerText = msg;

    email.classList.add("error");
    email.classList.remove("success");

    message.classList.add("error-text");
    message.classList.remove("success-text");
}

function setSuccess(msg){
    message.innerText = msg;

    email.classList.add("success");
    email.classList.remove("error");

    message.classList.add("success-text");
    message.classList.remove("error-text");
}
