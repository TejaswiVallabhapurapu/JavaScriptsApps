//validation logic
function validate(){
    //request data gathering logic
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let regex = /[a-z][A-Z][0-9]/;
    //validation logic
    if(username == ""){
        alert("Please enter username.");
        return false;
    }
    if (password == ""){
        alert("Please enter password");
        return false;
    }
    if(password.length < 8 || password.length > 12){
        alert("Password should be minimum 8 characters and maximum 12 charactes");
        return false;
    }
    if (!regex.test(password)){
        alert("Password should be combination of alphanum(small letters,capital letters,numbers)");
        return false;
    }
    return true;
}