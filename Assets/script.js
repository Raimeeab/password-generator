// Assignment Code
var generateBtn = document.querySelector("#generate");

//user input variables
var passwordLength, confirmUpper, confirmLower, confirmNumber, confirmSymbol; 

// Password variable values 
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var symbols = ["!","@","#","$","%","^","&","*","(",")","{","}","[","]","","<",">","/",",","."]
var numbers = ["0","1","2","3","4","5","6","7","8","9"];

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Create password based on user selections 


// Write password to input
function writePassword() {
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;
  enter = parseInt(prompt("How many characters would you like your password?"));
  if (!enter) {
    alert("Value is required");
  } else if (enter < 8 || enter > 128) {
    enter = parseInt(alert("You must choose between 8 and 128 characters"));
   // Ensures user input for password length is between 8 and 128 characters 

  } else {
    confirmLower = confirm("Do you want lowercase letters?");
    confirmUpper = confirm("Do you want uppercase letters?");
    confirmSymbol = confirm("Do you want symbols?");
    confirmNumber = confirm("Do you want numbers?");
  }
  
  if (!confirmLower && !confirmUpper && !confirmSymbol && !confirmNumber) {
    userChoice = alert("You must select atleast one of the character options");
    // Ensures that user is required to select atleast one of the options provided 
  }

};


// function generatePassword() {
//   var userInfo = userChoices();

// }

// Generator functions 

// function getRandomLower() {
//   return string.fromCharCode(Math.floor(Math.random() * 26) + 97)
// };

