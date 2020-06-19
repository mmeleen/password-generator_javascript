// Assignment Code
var generateBtn = document.querySelector("#generate");

//Password content options
var numSet = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowSet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppSet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var charSet = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", "/", ":", ";", ">", "?", "@", "[", "]", "^", "{", "}", "~", "|"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//Generate password adhering to user criteria
function generatePassword() {
  // Password length user prompt
  var passLength = prompt("Please type a password length (number between 8 and 128)");
  // Check for valid length entry
  if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
  	alert("Invalid length. Please try again.");
    return;
  }
  // Character selection user prompts
  alert("Please select at least one of the following password criteria");
  var hasLow = confirm("Include lowercase letters?");
  var hasUpp = confirm("Include uppercase letters?");
  var hasNum = confirm("Include numbers?");
  var hasChar = confirm("Include special characters?");
  // Ensure that at least one option was confirmed
  if ((hasLow == false) && (hasUpp == false) && (hasNum == false) && (hasChar == false)){
    alert("Must select at least one option.\nPlease try again.");
    return;
  }
  
  // Empty arrays for total character pool and eventual password array
  var totalSet = [];
  var passArray = [];

  // If the user elected to include the lowercase letter subset...
  if (hasLow) {
    // Add subset into total possible character pool 
    totalSet = totalSet.concat(lowSet);
    console.log(totalSet);
    // Add one random value from the subset to password array
    // (ensures at least one character from subset is included in the final password)
    var randomLow = lowSet[Math.floor(Math.random() * lowSet.length)];
    passArray.push(randomLow);
    console.log(randomLow);
    console.log(passArray); 
  }
  // Repeat for the uppercase, number, and special character subsets...
  if (hasUpp) {
    totalSet = totalSet.concat(uppSet);
    console.log(totalSet);
    var randomUpp = uppSet[Math.floor(Math.random() * uppSet.length)];
    passArray.push(randomUpp);
    console.log(randomUpp);
    console.log(passArray);   
  }

  if (hasNum) {
    totalSet = totalSet.concat(numSet);
    console.log(totalSet);
    var randomNum = numSet[Math.floor(Math.random() * numSet.length)];
    passArray.push(randomNum);
    console.log(randomNum);
    console.log(passArray);   
  }

  if (hasChar) {
    totalSet = totalSet.concat(charSet);
    console.log(totalSet);
    var randomChar = charSet[Math.floor(Math.random() * charSet.length)];
    passArray.push(randomChar);
    console.log(randomChar);
    console.log(passArray);   
  }

  // Generate random values from the total pool to fill remainder of password length
  while (passArray.length < passLength) {
    var randomAny = totalSet[Math.floor(Math.random() * totalSet.length)];
    passArray.push(randomAny);
  }

  console.log(passArray);

  // Shuffle password array to disperse initial values
  var shuffledPass = shuffleArray(passArray);
  console.log(shuffledPass);

  // Convert shuffled password array to string
  var stringPass = shuffledPass.join("");
  console.log(stringPass);

  // Return final randomly generated password string
  return stringPass;

}

// Randomize array using Durstenfeld shuffle algorithm; return array
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  return array;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
