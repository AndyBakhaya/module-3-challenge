// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// 

var numArray = ["0","1","2","3","4","5","6","7","8","9"];
var upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "v", "w", "x", "y", "z"];
var symbolArray = ["!", "@", "#", "$", "%", "&"];
var options = [];
var finishedPass = [];
var randomPass = "";

// 
function generatePassword() {

var numChar = window.prompt("Select a Password Length from 8-128.");
console.log(numChar);

var inclUpper = window.confirm("Do you want to include Uppercase Letters?");
console.log(inclUpper);

var inclLower = window.confirm("Do you want to include Lowercase Letters?");
console.log(inclLower);

var inclSymbol = window.confirm("Do you want to include Symbols?");
console.log(inclSymbol);

var inclNum = window.confirm("Do you want to include Numbers?");
console.log(inclNum);

// 

if(inclUpper)
  options = options.concat(upperArray);

if(inclLower)
  options = options.concat(lowerArray);

if(inclSymbol)
  options = options.concat(symbolArray);

if(inclNum)
  options = options.concat(numArray);

// 

for(i = 0; i < numChar; i++) {
  finishedPass = finishedPass.concat(options[Math.floor(Math.random()*options.length)]);

}

for(i = 0; i < numChar; i++) {
  randomPass += finishedPass[i];

}

writePassword();
return password;
}







