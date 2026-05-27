const form = document.getElementById("loginForm");

form.addEventListener("submit", function(e){
    e.preventDefault();

    // Inputs
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Errors
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const successMessage = document.getElementById("successMessage");

    // Clear messages
    emailError.textContent = "";
    passwordError.textContent = "";
    successMessage.textContent = "";

    let isValid = true;

    // Email validation
    if(email === ""){
        emailError.textContent = "Email is required";
        isValid = false;
    } 
    else if(!validateEmail(email)){
        emailError.textContent = "Enter a valid email";
        isValid = false;
    }

    // Password validation
    if(password === ""){
        passwordError.textContent = "Password is required";
        isValid = false;
    } 
    else if(password.length < 6){
        passwordError.textContent = "Password must be at least 6 characters";
        isValid = false;
    }

    // Success
    if(isValid){
        successMessage.textContent = "Login Successful!";
    }
});

// Email Regex
function validateEmail(email){
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}