//call method 
const productIno = {
    pId : 1001,
    pName : "Samsung",
    pDetails : function ( rating, price ) {
        return this.pId + " " + this.pName + " " + rating + " " + price;
    },
};
const product = {
    pId  : 1001,
    pName : "Samsung",
};
console.log(productIno.pDetails.call(product, 4, 100000));