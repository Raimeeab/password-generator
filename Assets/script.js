// Password variable values 
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var symbol = ["!","@","#","$","%","^","&","*","(",")","{","}","[","]","","<",">","/",",","."]
var number = ["0","1","2","3","4","5","6","7","8","9"];

//user input variables
var passwordLength, confirmUpper, confirmLower, confirmNumeric, confirmSymbol; 

// selects the generate ID from CSS stylesheet 
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", userInput);

//Generate Password function, selecting random chracters based on what is confirmed by the user 
function generatePassword() {
  var password = ""; // empty string to hold generated password 
  var available = []; // An array placeholder for user generated amount of length

  // if statements concatenantes any of the confirms that return true
  if (confirmLower) {
    available = available.concat(lowercase);
  };

  if (confirmUpper) {
    available = available.concat(uppercase);
  };

  if (confirmNumeric) {
    available = available.concat(number);
  };

  if(confirmSymbol) {
    available =  available.concat(symbol);
  };

  // Start random selection for passwordLength, based on selected options
  for (var i = 0; i < passwordLength; i++) {
    password += available[Math.floor(Math.random() * available.length)];  
  };
  
  return password;   // returns password onto the screen
};

// Function gets user input
function userInput() {
  
  passwordLength = parseInt(prompt("How many characters would you like your password to be?"));

  // While loops validate user input
  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
   passwordLength = Number(prompt("Length must be 8-128 characters. How many characters would you like your password to be?"));
  };

  userConfirms(); // Calls on the function

  while (!confirmLower && !confirmUpper && !confirmNumeric && !confirmSymbol) {
    choices = alert("Error: you must choose atleast one of the character options");
    userConfirms();
  };
  
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password"); // Displays the generated password on the webpage
  passwordText.value = password;
};

//Confirm prompts 
function userConfirms () {
  confirmLower = confirm('would you like to include lowercase letters?');
  confirmUpper = confirm('would you like to include uppercase letters?');
  confirmNumeric = confirm('would you like to include numbers?');
  confirmSymbol = confirm('would you like to include special characters?');
};