//multiline strings
//back tick
let info = `Vignan's Lara Institute of Technology & Science (VLITS) is a private engineering college in Vadlamudi, Guntur, Andhra Pradesh, 
established in 2007`
console.log(info) ;
//string interpolation
let firstname = "Teja";
let lastname = "swi";
console.log(`${firstname} ${lastname}`);
//array destructing
let pname = ["realme","LG","Vivo"];
let [brand1, brand2, brand3] = pname;
console.log(brand1);
console.log(brand2);
console.log(brand3);
//object destructing
const movieinfo = {
    moviename: "bahubali",
    director: "rajamouli",
    producer: "shobu",
};
let { moviename, director, producer } = movieinfo;
console.log(moviename) ;
console.log(director);
console.log(producer); 