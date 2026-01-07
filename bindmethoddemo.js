//Bind Method
const moviInfo = {
    movieDetails : function() {
        return this.heroName + " " + this.villName;
    },
};
const EndGame = {
    heroName : "Robert Downey Jr",
    villName : "Thanos",
};
let res = moviInfo.movieDetails.bind(EndGame)
console.log(res());