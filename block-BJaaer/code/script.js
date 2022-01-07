let form = document.querySelector("form");
let modal = document.querySelector(".modal_overlay");
let modalInfo = document.querySelector(".modal_info");

let userInfo = {};

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let elements = event.target.elements;

    userInfo.name = elements.name.value;
    userInfo.email = elements.email.value;
    userInfo.choice = elements.choice.value;
    userInfo.color = elements.color.value;
    userInfo.movie = elements.movie.value;
    userInfo.book = elements.book.value;
    userInfo.terms = elements.terms.checked;

    modal.classList.add("open");

    let close = document.querySelector(".modal_close");
    close.addEventListener("click", () => {
        modal.classList.remove("open");
    });

    displayInfo(userInfo);
});

function displayInfo(data = {}) {
    modalInfo.innerHTML = "";
    let h1 = document.createElement("h1");
    h1.innerText = `Hello ${data.name}`;
    let email = document.createElement("p");
    email.innerText = `Email: ${data.email}`;
    let choice = document.createElement("p");
    choice.innerText = `Watching Choice ${data.choice}`;
    let color = document.createElement("p");
    color.innerText = `Color : ${data.color}`;
    let movie = document.createElement("p");
    movie.innerText = `Rating : ${data.movie}`;
    let book = document.createElement("p");
    document.innerText = `Book: ${data.book}`;
    let terms = document.createElement("p");
    terms.innerText = `${data.terms ? "You agreed to Terms and Condition" : "You don't agreed to Terms and Conditions"}`;

    modalInfo.append(h1, email, choice, color, movie, book, terms);
}