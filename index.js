let radio1 = document.getElementById("c-f");
let radio2 = document.getElementById("f-c");
let btn = document.getElementById("result");
let text = document.getElementById("msg");

let value;

btn.onclick = function(){
    let number = document.getElementById("screen").value;
    number = Number(number);
    if(radio1.checked){
        value = (number*(9/5)+32);
        text.textContent = "Temperature is "+value+"F";
    }
    else if(radio2.checked){
        value = (number-32)*(5/9);
        text.textContent = "Temperature is "+value+"°C";
    }
    else{
        text.textContent = "Must select one option";
    }
}