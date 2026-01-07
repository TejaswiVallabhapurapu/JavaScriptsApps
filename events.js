//events in js
//event logic
function sample(){
    alert ("h1");
}
let btnvalue = document.getElementById("demo");
btnvalue.addEventListener("click",sample);
function sample1(){
    alert("hello");
}
let btnvalue1  = document.getElementById("demo");
btnvalue.addEventListener("click",sample);
let headervlaue
const mouseover = () => {
    headervlaue.style.color = " ";
};
headervlaue.addEventListener("mouseover", mouseover);
headervlaue.addEventListener("mousehout",mouseout);

let inputvalue = document.getElementById("ip");
let pvalue = document.getElementById("p1");
const inputlogic = () => {
    let uservalue = inputvalue.ariaValueMax;
    pvalue.textContent=uservalue;
};

inputvalue.addEventListener("input", inputlogic)
