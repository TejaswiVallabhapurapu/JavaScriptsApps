//promises logic in js
const movieRating = new Promise((resolve,reject) => {
    let rating = 3;
    if(rating > 4) {
        resolve("Good movie");
    }
    else {
        reject("waste of our time");
    }
});
//call promises
movieRating
.then((result) => {
    console.log(result);
}).catch((result) => {
    console.log(result);
})
