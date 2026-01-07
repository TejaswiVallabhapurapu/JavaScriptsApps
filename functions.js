//functions in js
function showMsg(){
    console.log("Hi");
}
showMsg();
//function with parameters
function sumOfnum(a,b)//a,b are parameters
{
    console.log(a+b);
}
sumOfnum(10,20)//10,20 are arguments
// return a value from function
function mulofNum(a,b){
return a*b;
}
let x=mulofNum(10,20)
console.log(x);
//ES6 new functions
//arrow function
const arrowDemo = () => {
console.log("arrow function Demo");
}
arrowDemo();
//arrow function with parameters
const addnum = (a,b) => {
    console.log(a+b);
}
addnum(20,30);
//in a simple way
const addnum1 = (a,b) => a+b;
console.log(addnum1(20,40));
//with return function
const mulnum1 = (a,b) => {return a*b}
let c=mulnum1(10,20);
console.log(c);
//without return 
const mulnum2 = (a,b) => a*b
console.log(mulnum2(10,20));
//rest parameter
const printnum = (a,b,...c) =>{ 
    console.log(a);
console.log(b);
console.log(...c);
}
printnum(10,20,30,40,50);
//default parameter
const sumNum = (a=10,b) =>{
    console.log(a+b);
}
sumNum(40);

