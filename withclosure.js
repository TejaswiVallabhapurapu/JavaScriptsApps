//With closure
const counterRes = (() => {
    let counter = 0;
    return function() {
        counter += 1;
        return counter;
    }
})();// self invoking
console.log(counterRes());
console.log(counterRes());
console.log(counterRes());