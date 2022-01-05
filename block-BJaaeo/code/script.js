let result = document.getElementById("inputext");

let clear = document.querySelector(".clear")

let calculate = (number) => {
    result.value += number;
}

let Result = () => {
    try{
        result.value = eval(result.value)
    }
    catch(err){
        alert("Enter valid Input");
    }
}

function clearFn(){
    result.value = " ";
}

clear.addEventListener("click",clearFn);