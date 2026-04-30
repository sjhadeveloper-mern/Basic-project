let input1 = document.querySelector(".in-1");
let input2 = document.querySelector(".in-2");
let output = document.querySelector(".output");
let btn = document.querySelector(".btn");


const find = ()=>{
    let input1value = Number(input1.value);
      let input2value = Number(input2.value);
      return output.innerHTML="The Area is "+(1/2)*input1value*input2value+" unit square";

}

btn.addEventListener("click",find);