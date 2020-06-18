// Assignment Code
var generateBtn = document.querySelector("#generate");

//Password content options
var numSet = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowSet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppSet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var charSet = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", "/", ":", ";", ">", "?", "@", "[", "]", "^", "{", "}", "~", "|"];

// Function for user prompts, passes values to writePassword
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

//Generate password adhering to user criteria
function generatePassword(length, hasLow, hasUpp, hasNum, hasChar) {
  //console.log(length, hasLow, hasUpp, hasNum, hasChar);
  var totalSet = [];
  var passArray = [];

  if (hasLow) {
    totalSet = totalSet.concat(lowSet);
    console.log(totalSet);
    var randomLow = lowSet[Math.floor(Math.random() * lowSet.length)];
    passArray.push(randomLow);
    console.log(passArray); 
  }

  if (hasUpp) {
    totalSet = totalSet.concat(uppSet);
    console.log(totalSet);
    var randomUpp = UppSet[Math.floor(Math.random() * UppSet.length)];
    passArray.push(randomUpp);
    console.log(passArray);   
  }

  if (hasNum) {
    totalSet = totalSet.concat(numSet);
    console.log(totalSet);
    var randomNum = NumSet[Math.floor(Math.random() * NumSet.length)];
    passArray.push(randomNum);
    console.log(passArray);   
  }

  if (hasChar) {
    totalSet = totalSet.concat(charSet);
    console.log(totalSet);
    var randomChar = CharSet[Math.floor(Math.random() * CharSet.length)];
    passArray.push(randomChar);
    console.log(passArray);   
  }


}

// Add event listener to generate button
generateBtn.addEventListener("click", promptUser);
