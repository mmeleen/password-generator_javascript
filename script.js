// Assignment Code
var generateBtn = document.querySelector("#generate");

function promptUser(){
  var length = prompt("Please type a password length (number between 8 and 128)");
  console.log(length);
  if (length < 8 || length > 128 || isNaN(length)) {
  	alert("Please enter a valid length");
    return;
    //promptUser();
  }
  alert("Please select at least one of the following password criteria");
  var hasLow = confirm("Include lowercase letters?");
  var hasUpp = confirm("Include uppercase letters?");
  var hasNum = confirm("Include numbers?");
  var hasChar = confirm("Include special characters?");
  if ((hasLow == false) && (hasUpp == false) && (hasNum == false) && (hasChar == false)){
    alert("Please select at least one option");
    return;
    //promptUser();
  }
  console.log(length, hasLow, hasUpp, hasNum, hasChar);
  writePassword(length, hasLow, hasUpp, hasNum, hasChar);
}

// Write password to the #password input
function writePassword(length, hasLow, hasUpp, hasNum, hasChar) {
  //console.log(length, hasLow, hasUpp, hasNum, hasChar);
  var password = generatePassword(length, hasLow, hasUpp, hasNum, hasChar);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword(length, hasLow, hasUpp, hasNum, hasChar) {
  //console.log(length, hasLow, hasUpp, hasNum, hasChar);
}

// Add event listener to generate button
generateBtn.addEventListener("click", promptUser);
