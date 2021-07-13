// Assignment Code
var generateBtn = document.querySelector("#generate");

var special;
var numeric;
var upperCase;
var lowerCase;
var specialIndex;
var randomSpecial;
var numericIndex;
var randomNumeric;
var upperCaseIndex;
var randomUpperCase;
var randomLowerCase;

// Prompt user
var input = function() {
  // Ask user for their choice
  var userInput = window.prompt("Please enter a password length:");
  var userInput = parseInt(userInput);

  // If user pressed Cancel, immediately end function
  if (!userInput) {
    window.alert("Input must be a number!");
    return;
  } else if (userInput < 8 || userInput > 128) {
    window.alert("Input must be between 7 and 129!")
    return;
  } else {
      special = window.prompt("Use special characters");
      numeric = window.prompt("Use numeric characters");
      upperCase = window.prompt("Use uppercase characters");
      lowerCase = window.prompt("Use lowercase characters");
      
      if (!special || !numeric || !upperCase || !lowerCase) {
        window.alert("Password must use special, numeric, uppercase, or lowercase characters!") 
        return;
      }

    }
  }



input();

// Arrays
var specialCharacters = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCasedCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCasedCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var result;
var possibleCharacters = [];
var guaranteedCharacters = [];

function generatePassword() {
  if (special || numeric || upperCase || lowerCase) {
    if (special) {
      possibleCharacters.concat(specialCharacters);
      specialIndex = Math.floor(Math.random() * specialCharacters.length);
      randomSpecial = possibleCharacters[specialIndex];
      guaranteedCharacters.push(randomSpecial); 
    } else if (numeric) {
      possibleCharacters.concat(numericCharacters);
      numericIndex = Math.floor(Math.random() * numericCharacters.length);
      randomNumeric = possibleCharacters[numericIndex];
      guaranteedCharacters.push(randomNumeric);
    } else if (upperCase) {
      possibleCharacters.concat(upperCasedCharacters);
      upperCaseIndex = Math.floor(Math.random() * upperCasedCharacters.length);
      randomUpperCase = possibleCharacters[upperCaseIndex];
      guaranteedCharacters.push(randomUpperCase);
    } else if (lowerCase) {
      possibleCharacters.concat(lowerCasedCharacters);
      lowerCaseIndex = Math.floor(Math.random() * lowerCasedCharacters.length);
      randomLowerCase = possibleCharacters[lowerCaseIndex];
      guaranteedCharacters.push(randomLowerCase);
    }
  }

}


for (i = 0; i < userInput; i++) {
  var resultIndex = Math.floor(Math.random() * possibleCharacters.length);
  result.push(resultIndex);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
