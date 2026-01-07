//debounce
// request data gathering logic
let button = document.getElementById("demo");
let clickResult = document.getElementById("sample");
let triggerResult = document.getElementById("simple");
//business logic
let clickCount = 0;
let triggerCount = 0;
function debounce (fn,delay) {
    let timer;
    return function(){
        clearTimeout(timer);
        timer = setTimeout(() => { 
            fn();
        },delay);
    }
}
const debounceRes = debounce(() => {
    triggerCount++;
    triggerResult.innerHTML = `triggered: ${triggerCount}`;
},1000);
button.addEventListener("click",() => {
    clickCount++;
    clickResult.innerHTML = `user entered characters :${clickCount}`;
    debounceRes();
});