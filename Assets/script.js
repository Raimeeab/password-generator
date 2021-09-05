// Password variable values 
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var symbol = ["!","@","#","$","%","^","&","*","(",")","{","}","[","]","","<",">","/",",","."]
var number = ["0","1","2","3","4","5","6","7","8","9"];

var allCharacters = [...lowercase, ...uppercase, ...symbol, ...number]; //creates an object that includes all the arrays above 
var confirmed = false; // when user doesn't meet two conditions 

var password = [];


var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", userInput);

//user input variables
var passwordLength, confirmUpper, confirmLower, confirmNumeric, confirmSymbol; 


//Generate Password function, selecting random chracters based on what is confirmed by the user 
function generatePassword() {
  confirmLower = confirm('would you like to include lowercase letters?');
  confirmUpper = confirm('would you like to include uppercase letters?');
  confirmNumeric = confirm('would you like to include numbers?');
  confirmSpecial = confirm('would you like to include special characters?');
 
  if (!confirmLower && !confirmUpper && !confirmNumeric && !confirmSpecial) {
    choices = alert("Error: you must choose atleast one of the character options");
  };

  for (var i = 0; i < passwordLength; i++) {
    if (confirmLower) {
      password.push(lowercase[Math.floor(Math.random() * 26)]);
    } 
    if (confirmUpper) {
      password.push(uppercase[Math.floor(Math.random() * 26)]);
    }
    if (confirmNumeric) {
      password.push(number[Math.floor(Math.random() * 10)]);
    }
    if (confirmSymbol) {
      password.push(symbol[Math.floor(Math.random() * 20)]);
    }
    }
  };
  console.log(password);
  return password.join("");
};

// controls prompts/ alerts for user input 
function userInput() {
  passwordLength = 0;
  passwordLength = parseInt(prompt("How many characters would you like your password to be?"));
  if (!passwordLength) {
    alert("Error: value is required");

  } else if (passwordLength < 7 || passwordLength > 127) {
    passwordLength = parseInt(prompt("Error: you must choose between 8 and 128 characters"));

  } else {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  };

};

// while(passwordLength >= 8 || passwordLength <= 128) {
//   alert ("Error: you much choose between 8 and 128 characters");
//   return alert ("Press Generate button to try again");
// };
