let box1 = document.querySelector(".first");
let box2 = document.querySelector(".second");

function randomColor (){
    var color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    box1.style.backgroundColor = color;
}

function mouseColor (){
    var color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    box2.style.backgroundColor = color;
}

box1.addEventListener("click", randomColor);

box2.addEventListener("mousemove", mouseColor);