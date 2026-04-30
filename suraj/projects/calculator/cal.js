let input1 = document.querySelector(".in-1");
let input2 = document.querySelector(".in-2");
let button1 = document.querySelector(".btn-1");
let button2 = document.querySelector(".btn-2");
let button3 = document.querySelector(".btn-3");
let button4 = document.querySelector(".btn-4");
let output = document.querySelector(".output");


function add(){
    let inputvalue = Number(input1.value);
     let inputtvalue = Number(input2.value);
     changeStyle();
   return 'The sum of values are:' + ' '+  Number(inputvalue + inputtvalue);
}

button1.addEventListener("click", function () {
    output.innerHTML = add();
});


function sub(){
    let inputvalue = Number(input1.value);
     let inputtvalue = Number(input2.value);
     changeStyle();
   return 'The sub of values are:'+ ' '+  Number(inputvalue - inputtvalue);
}


button2.addEventListener("click", function () {
    output.innerHTML = sub();
});

function mul(){
    let inputvalue = Number(input1.value);
     let inputtvalue = Number(input2.value);
     changeStyle();
   return 'The multiple of values are:'+ ' '+  Number(inputvalue * inputtvalue);
}


button3.addEventListener("click", function () {
    output.innerHTML = mul();
});

function div(){
    let inputvalue = Number(input1.value);
     let inputtvalue = Number(input2.value);
     changeStyle();
   return 'The Div of values are:'+ ' '+  Number(inputvalue / inputtvalue);
}


button4.addEventListener("click", function () {
    output.innerHTML = div();
});





function changeStyle() {
   
    output.style.color = "red";
    output.style.backgroundColor = "yellow";
}