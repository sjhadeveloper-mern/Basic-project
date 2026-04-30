let input = document.querySelector('.input');
let btn = document.querySelector('.btn-1');
let output = document.querySelector('.output-div');


const todo = ()=>{
 let inputvalue = input.value;
    if(inputvalue === ""){
       return alert("please Enter your task!")
    }
   
let outputin = document.createElement("div");
outputin.style.backgroundColor =  "yellow";
    output.appendChild(outputin);
outputin.style.display ="flex";
outputin.style.justifyContent = "space-between";
outputin.style.padding = "5px";
outputin.style.border = "2px solid orange";

 let newElement = document.createElement("p");
   newElement.textContent = inputvalue;
   outputin.appendChild(newElement);

    let buttonnew = document.createElement("button");
    buttonnew.textContent = "clear";
buttonnew.style.border = "none";
buttonnew.style.backgroundColor = "purple";
buttonnew.style.color = "white";
buttonnew.style.width = "50px";


    outputin.appendChild(buttonnew);
    buttonnew.addEventListener("click",()=>{
    outputin.remove();
})

   
   input.value = "";

  
  
}





btn.addEventListener("click",todo);