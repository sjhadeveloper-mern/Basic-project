//Addition

// function sum(a,b){
// return a+b;
// }
// console.log(sum(5,3));

// Subtraction     (// same for multiply and divide function)

// function sub(a,b){
//     return a-b;
// }
// console.log(sub(5,3));


// odd/even checker

// function check(a){
//     if(a%2===0){
//         return "even";
//     }else{
//         return "odd";
//     }
// }

// console.log(check(5));


// temperature convertor 

// function convert(C){
//     return C+273 + "K";
// }
// console.log(convert(7));


// Greeting Generator

// function greet(name){
//     return "Hello"+" "+name;
// }
// console.log(greet("Suraj"));



// Prime No checker

// function prime(a){
//     let N =a;
    
//     let count = 0;
//     for(i=1; i<=N; i++){
       
//  if(N%i===0){
//     count++;
//  }
//     }
//     if(count===2){

//         console.log("prime");
//     }else{
//         console.log("not prime");
        

//     }
// }
// console.log(prime(5));


// Palindrome checker

// function palindrome(name){

//     let reverse = name.split("").reverse().join("");
//     if(name===reverse){
//         return "wow! Your name is palindrome 🎉";
//     }else{
//         return "Your name is not a palindrome";
//     }

// }

// console.log(palindrome("racecar"));


// maximum no find

// let arr = [1,2,3,4,5]
// function array(){
//     let max = arr[0];
//    for(i=1; i<=4; i++){
// let maxnew = max++;
// }
// if(maxnew>max){
//     console.log(maxnew);
// }
// }
// console.log(array());


// closures

function outer(){
    let name = "suraj";
function inner(){
    console.log(name);
}
 return inner;


}

outer()();