let username = document.getElementById("username").value;
let password = document.getElementById("password").value;
let confirmPassword = document.getElementById("confirm-password").value;
let mobileNo = document.getElementById("phone_no").value;
let email = document.getElementById("email").value;
let regex = /[a-z][A-Z]/;
let genderr = document.getElementsByName("gender");
let genderSelected = false;
for (let i = 0; i < genderr.length; i++) {
  if (genderr[i].checked) {
    genderSelected = true;
    break;
  }
  if (username == "") {
    alert("please enter username");
    return false;
  }
  if (password == "") {
    alert("please enter password");
    return false;
  }
  if (password.length < 8 || password.length > 12) {
    alert("password must be between 8 and 12 characters long");
    return false;
  }
  if (!regex.test(password)) {
    alert("password must contain lowercase letter, uppercase letter");
    return false;
  }
  if (password != confirmPassword) {
    alert("passwords do not match");
    return false;
  }
  if (mobileNo.length != 10) {
    alert("mobile number must be 10 digits long");
    return false;
  }
  if (mobileNo == "") {
    alert("please enter mobile number");
    return false;
  }
  if (email == "") {
    alert("please enter email");
    return false;
  }
  if (email.includes(".com") == false) {
    alert("please enter a valid email");
    return false;
  }
}