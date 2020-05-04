console.log("i am connected")

const form = document.getElementById('emailForm');
const email = document.getElementById('email')
 

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkMailInput();
})

//TODO: check email input and trim white space
function checkMailInput() {
    const emailValue = email.value.trim();

    if (emailValue === ''){
        setErrorForMail(email, 'Field cannot be blank')
    } else if (!isMail(emailValue)) {
        setErrorForMail(email, 'This is not a valid email address')
    } else {
        setSuccessForMail(email);
    }

}
//TODO: CREATE FUNCTION TO SET ERROR MESSAGE
function setErrorForMail(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

//TODO: CREATE FUNCTION TO SET SUCCESS

function setSuccessForMail(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control';
}

//TODO: Validate Email
function isMail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


