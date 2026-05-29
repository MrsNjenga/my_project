const password = document.getElementById("password");
const strengthBar = document.getElementById("strength-bar");
const strengthText = document.getElementById("strength-text");

password.addEventListener("input", () => {

    const value = password.value;

    let strength = 0;

    const hasLength = value.length >= 8;
    const hasUppercase = /[A-Z]/.test(value);
    const hasLowercase = /[a-z]/.test(value);
    const hasNumber = /[0-9]/.test(value);
    const hasSpecial = /[^A-Za-z0-9]/.test(value);

    updateRequirement("length", hasLength);
    updateRequirement("uppercase", hasUppercase);
    updateRequirement("lowercase", hasLowercase);
    updateRequirement("number", hasNumber);
    updateRequirement("special", hasSpecial);

    if(hasLength) strength++;
    if(hasUppercase) strength++;
    if(hasLowercase) strength++;
    if(hasNumber) strength++;
    if(hasSpecial) strength++;

    if(strength <= 1){
        strengthBar.style.width = "25%";
        strengthBar.style.background = "red";
        strengthText.textContent = "Weak";
    }
    else if(strength <= 3){
        strengthBar.style.width = "50%";
        strengthBar.style.background = "orange";
        strengthText.textContent = "Medium";
    }
    else if(strength === 4){
        strengthBar.style.width = "75%";
        strengthBar.style.background = "blue";
        strengthText.textContent = "Strong";
    }
    else{
        strengthBar.style.width = "100%";
        strengthBar.style.background = "green";
        strengthText.textContent = "Very Strong";
    }

});

function updateRequirement(id, valid){

    const element = document.getElementById(id);

    if(valid){
        element.innerHTML = "✅ " + element.textContent.slice(2);
        element.style.color = "green";
    }
    else{
        element.innerHTML = "❌ " + element.textContent.slice(2);
        element.style.color = "#555";
    }
}