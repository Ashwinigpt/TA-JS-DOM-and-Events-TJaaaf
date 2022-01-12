let h2 = document.querySelector('h2');
let h3 = document.querySelector('h3');
let button  = document.querySelector('button');

function generateRandomNumbers(max){
    return Math.floor(Math.random() * max);
}

function handleClick(){
    let randomIndex = generateRandomNumbers(data.length);
    let randomShortCut = data[randomIndex];
    h2.innerText = randomShortCut.shortcut;
    h3.innerText = randomShortCut.result;
}

button.addEventListener('click', handleClick)
