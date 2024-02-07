
let userName = ""

function submitBtn() {
    const emailInputEl = document.querySelector("#emailInput").value;
    const passwordInputEl = document.querySelector("#passwordInput").value;

    if (!emailValidation(emailInputEl)) {
        alert("your email is not valid");
        return
    }
    else {
        userName = emailInputEl
        window.location.href = "nextpage.html"

    }

    passwordValidation(passwordInputEl)
}


function emailValidation(email) {
    const valid = email.includes("tahanaushad6@gmail.com")
    return valid

    console.log(email);

}

function passwordValidation(password) {
    console.log(password)
}

const nextPageEl = document.getElementById("nextPage")
nextPageEl.innerText = `${userName} is logged in`