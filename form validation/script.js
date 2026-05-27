const form = document.getElementById("form");

form.addEventListener("submit", function(e){

  e.preventDefault();

  // Inputs
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("confirmPassword").value.trim();

  // Errors
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const confirmError = document.getElementById("confirmError");

  const successMessage = document.getElementById("successMessage");

  // Hide all errors first
  nameError.style.display = "none";
  emailError.style.display = "none";
  passwordError.style.display = "none";
  confirmError.style.display = "none";
  successMessage.style.display = "none";

  let isValid = true;

  // Name Validation
  if(name.length < 3){
    nameError.style.display = "block";
    isValid = false;
  }

  // Email Validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if(!email.match(emailPattern)){
    emailError.style.display = "block";
    isValid = false;
  }

  // Password Validation
  if(password.length < 6){
    passwordError.style.display = "block";
    isValid = false;
  }

  // Confirm Password Validation
  if(password !== confirmPassword){
    confirmError.style.display = "block";
    isValid = false;
  }

  // Success
  if(isValid){
    successMessage.style.display = "block";

    form.reset();
  }

});