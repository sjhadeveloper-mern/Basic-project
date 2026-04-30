let btn = document.querySelector(".btn");
let output = document.querySelector('.output');

let count = 0;
function counter(){


let newCount = count++;
console.log(newCount);
output.innerHTML = newCount;

}

btn.addEventListener("click",counter);