//promises chaining
const ticketBooking = () => {
    return new Promise((resolve,reject) => {
        resolve("Ticket booked");
    });
};
const pop_corn = (msg) => {
    return new Promise((resolve,reject) => {
        resolve(msg + "Buy Popcorn");
    });
};
const coke = (msg) => {
    return new Promise((resolve,reject) => {
        resolve(msg + "Get Coke.");
    });
};
ticketBooking().then((result) => {
    return pop_corn(result);
}).then ((result) => {
    return coke(result);
}).then ((result) => {
    console.log("wanna to go movie" + result);
}).catch((error) => {
    console.log(error);
});