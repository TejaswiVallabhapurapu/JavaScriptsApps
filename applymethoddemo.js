//Apply Method
const sInfo = {
    sDetails : function( qualification , mobileNo) { 
        return this.sRoll + " " + this.sName + " " + qualification + " " + mobileNo;
    },
};
const student = {
    sRoll  : 10544,
    sName : "Soni",
};
console.log(sInfo.sDetails.apply(student,["Btech" , 539374563447]));