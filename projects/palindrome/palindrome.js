// console.log("hello");


let input = document.querySelector(".input");
let output = document.querySelector(".output");
let button = document.querySelector(".btn");


const palindrome = ()=>{
    let inputvalue = input.value;
    let check = inputvalue.split("").reverse().join("");
    output.style.backgroundColor = "yellow";
      output.style.Color = "red";
    if(check === inputvalue){
        output.innerHTML = "Wow😅! Your name is a Palindrome";
    }
    else{
        output.innerHTML = "No🙁! Your name is not a Palindrome";
    }
    if(inputvalue === ""){
        output.innerHTML = "Please enter your name";
    }
}

button.addEventListener("click",palindrome);