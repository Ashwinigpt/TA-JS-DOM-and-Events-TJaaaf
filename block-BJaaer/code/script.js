let form = document.querySelector("form");
let modal = document.querySelector(".modal_overlay");
let modalInfo = document.querySelector(".modal_info");

let userInfo = {};

// function handelSumbit(event){
//         event.preventDefault();
//         let elements = event.target.elements;
        
//         userInfo.name = elements.name.value;

//         userInfo.email = elements.email[0].value;

//         userInfo.category = elements.gender.value;

//         userInfo.color = elements.email[1].value;

//         userInfo.rate = elements.range.value;

//         userInfo.genre = elements.drone.value;

//         console.log(elements.terms.value);

//         modal.classList.add("open");

//         displayForm(userInfo);

// }

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let elements = event.target.elements;

    userInfo.name = elements.name.value;
    userInfo.email = elements.email.value;
    userInfo.choice = elements.choice.value;
    userInfo.color = elements.color.value;
    userInfo.movie = elements.movie.value;
    userInfo.book = elements.book.value;
    userInfo.terms = elements.terms.value;

    modal.classList.add("open");

    let close = document.querySelector(".modal_close");
    close.addEventListener("click", () => {
        modal.classList.remove("open");
    });

    displayInfo(userInfo);
});

function displayInfo(data = {}) {
    let h1 = document.createElement("h1");
    h1.innerText = `Hello ${data.name}`;
    let email = document.createElement("h1");
    h1.innerText = `Hello ${data.name}`;
    let h1 = document.createElement("h1");
    h1.innerText = `Hello ${data.name}`;
    let h1 = document.createElement("h1");
    h1.innerText = `Hello ${data.name}`;
    let h1 = document.createElement("h1");
    h1.innerText = `Hello ${data.name}`;
    let h1 = document.createElement("h1");
    h1.innerText = `Hello ${data.name}`;

    modalInfo.append(h1);
}