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
var resultIndex;

var userInput;



// Prompt user
var input = function() {
  // Ask user for their choice
  userInput = window.prompt("Please enter a password length:");
  userInput = parseInt(userInput);

  // If user pressed Cancel, immediately end function
  if (!userInput) {
    window.alert("Input must be a number!");
    return;
  } else if (userInput < 8 || userInput > 128) {
    window.alert("Input must be between 7 and 129!")
    return;
  } else {
      special = window.confirm("Use special characters");
      numeric = window.confirm("Use numeric characters");
      upperCase = window.confirm("Use uppercase characters");
      lowerCase = window.confirm("Use lowercase characters");
      
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
var result = [];
var possibleCharacters = [];
var guaranteedCharacters = [];

function generatePassword() {
  if (special || numeric || upperCase || lowerCase) {
    if (special) {
      possibleCharacters = possibleCharacters.concat(specialCharacters);
      specialIndex = Math.floor(Math.random() * specialCharacters.length);
      randomSpecial = possibleCharacters[specialIndex];
      guaranteedCharacters.push(randomSpecial); 
    }  
    
    if (numeric) {
      possibleCharacters = possibleCharacters.concat(numericCharacters);
      numericIndex = Math.floor(Math.random() * numericCharacters.length);
      randomNumeric = possibleCharacters[numericIndex];
      guaranteedCharacters.push(randomNumeric);
    }  
    
    if (upperCase) {
      possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
      upperCaseIndex = Math.floor(Math.random() * upperCasedCharacters.length);
      randomUpperCase = possibleCharacters[upperCaseIndex];
      guaranteedCharacters.push(randomUpperCase);
    }  
    
    if (lowerCase) {
      possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
      lowerCaseIndex = Math.floor(Math.random() * lowerCasedCharacters.length);
      randomLowerCase = possibleCharacters[lowerCaseIndex];
      guaranteedCharacters.push(randomLowerCase);
    }

    return;
  }

  

}


for (i = 0; i < userInput; i++) {
  resultIndex = Math.floor(Math.random() * possibleCharacters.length);
  guaranteedCharacters.push(possibleCharacters[resultIndex]); 
  console.log(resultIndex);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
