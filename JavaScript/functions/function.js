//function declation of defination
/*
function func_name(param1,...){
    //block of code
}
*/
//anonymous function/self invoking function
/* 
(function(param1,...){
    //block of code
})();
*/
//function call
//func_name(param1,...);
//function expression:store function in variable
/*
variable variable_name=function func_name(param1,...){
    //block of code
};
//without function name anonymous function
variable variable_name=function(param1,...){
    //block  of code
};
or
variable variable_name=()=>single line code
eg. let hello=()=>"Hello World";
*/
//arrow function
/*
variable variable_name=()=>{
    //block of code
};
*/

function printSum(a,b){
    //c=a+b
    //console.log(c);
    console.log(`Sum ${a} and ${b} is ${a+b}`);
}
printSum(30,20);

function printMsg(msg){
    console.log(msg);
}
printMsg("I'm JS Function");

let hello=()=>{
    return "Hello World";
}
//console.log(hello); it prints entire function
console.log(hello());

let sum=(a,b)=> a+b;
console.log("Sum of two numbers : "+sum(60,40));

//forEach loop
let arr=["Pune","Delhi","Mumbai"];
arr.forEach((val)=>{
    console.log(val);
});
