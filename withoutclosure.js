//Without Closure
let counter = 1;// global variable
const counterRes = () => {
    let counter = 0;//local variable
    counter += 1;
    return counter ;
};
console.log(counterRes());
console.log(counterRes());
console.log(counterRes());