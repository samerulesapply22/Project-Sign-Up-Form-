function match() {
    password = document.querySelector("#password").value;
    confirm_password = document.querySelector("#confirm-password").value;
    message = document.querySelector("#message");
    button = document.querySelector("button")
    if (password == confirm_password) {
        message.textContent = "passwords match";
        message.style.color = "green";
        button.disabled = false;
        
    } else {
        message.textContent = "passwords do not mantch";
        message.style.color = "red";  
    }
}

