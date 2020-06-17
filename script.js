// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(length, hasLow, hasUpp, hasNum, hasChar);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", promptUser());

function promptUser(){
	var length = prompt("Please type a password length (number between 8 and 128)");
  if (length < 8 || length > 128) {
  	alert("Please enter a valid length");
    promptUser();
  }
  alert("Please select at least one of the following password criteria");
  var hasLow = confirm("Include lowercase letters?");
  var hasUpp = confirm("Include uppercase letters?");
  var hasNum = confirm("Include numbers?");
  var hasChar = confirm("Include special characters?");
  if ((hasLow == false) && (hasUpp == false) && (hasNum == false) && (hasChar == false)){
    alert("Please select at least one option");
    promptUser();
  }
  writePassword();
}

function generatePassword(length, hasLow, hasUpp, hasNum, hasChar) {
  console.log(length, hasLow, hasUpp, hasNum, hasChar);

}