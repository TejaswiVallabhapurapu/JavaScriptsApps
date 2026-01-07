//this keyword
const empInfo = {
    eFirstName : "Soni",
    eLastName : "Seru",
    FullName : function() {
        return this.eFirstName + " " + this.eLastName;
    },
};
console.log(empInfo.FullName());