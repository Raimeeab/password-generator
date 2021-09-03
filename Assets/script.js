// Assignment Code
var generateBtn = document.querySelector("#generate");


// Generator functions 

function getRandomLower() {
  return string.fromCharCode(Math.floor(Math.random() * 26) + 97)
};

console.log(getRandomLower());

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
