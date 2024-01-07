const subscribeBtn = document.querySelector("#subscribeBtn");
const emailField = document.querySelector("#emailField");
const validEmail = document.querySelector("#validEmail");

subscribeBtn.addEventListener("click", () => {
    let email = emailField.value;
    localStorage.setItem("theEmail", email);
    // console.log(email);
    // console.log(isValidEmail(email));
    let validity = isValidEmail(email);
    if(validity){
        window.location.href = "alert.html";  
    }
    else{
        validEmail.style.visibility = "visible";
        emailField.style.borderColor = "hsl(4, 100%, 67%)";
        emailField.style.backgroundColor = "hsl(4, 92%, 90%)";
    }
})

function isValidEmail(email) {
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Test the provided email against the regex
    return emailRegex.test(email);
}