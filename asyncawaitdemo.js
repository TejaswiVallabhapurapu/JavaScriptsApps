//Aync await logic
let movieRating = () => {
    return new Promise((resolve,reject) => {
    let rating = 4.5;
    if(rating > 4) {
        resolve("Good movie");
    }else {
        resolve("Waste of our time");
    }
});
}
//how to call promise with async await
const movieResult = async() => {
    try {
       const result = await movieRating();
       console.log(result);
    }
    catch (error) {
        console.log(error);
    }
};
movieResult();