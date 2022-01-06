let form = document.querySelector("form");

let usernameError = {};

// function doesContainANumber(str){
//     return str.split('').some(e => Number(e));
// }

function handleSubmit(event) {
    event.preventDefault();
    console.dir(event.target);

    let usernameElm = event.target.elements.username;
    let parentElm = usernameElm.parentElement;

    if (usernameElm.value.length < 4) {
        usernameError.username = "Username can't be less than 4 characters";
        parentElm.classList.add('error');
    } else {
        usernameError = "";
        parentElm.classList.add('success');
        parentElm.classList.remove('error');
    }

    usernameElm.nextElementSibling.innerText = usernameError;
}

form.addEventListener("submit", handleSubmit);