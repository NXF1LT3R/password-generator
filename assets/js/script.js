// Assignment code here
var numberArr = ['1','2','3','4','5','6','7','8','9','0']
var lowerArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var specialArr = [ "!", "#", "$", "%", "&","(",")", "*", "+","-",".", "/", ":", ";","<","=", ">" , "?", "@", "~"]
function initPrompts() {
  var length =  parseInt(prompt("How long would you like your password to be?"));
  if (isNaN(length) ){
    alert('Choose A valid Number')
    return null
  }
  if(length > 128){
    alert('Choose A valid Number')
    return null
  }
  if(  length < 8 ){
    alert('Choose A valid Number')
    return null
  }
  var lowerCase = confirm("Would you like to use lowercase letters?");
  var upperCase = confirm("Would you like to use uppercase letters?");
  var numbers = confirm("Would you like to use numbers?");
  var specialChar = confirm("Would you like to use special characters?");

  console.log(length);
  
  var results =  {
    reslength : length,
    resLower : lowerCase,
    resUpper : upperCase,
    resNum : numbers,
    resSpec : specialChar
  }
  return results;
}

function randomChar(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randChar = arr[randIndex];

  return randChar;
}

function generatePassword() {
  var result = initPrompts();
  var combined = []
  var final = []
  if (result.resNum){
  combined = combined.concat(numberArr)

  }
  if (result.resLower){
  combined = combined.concat(lowerArr)
  } 
  if (result.resSpec) {
  combined = combined.concat(specialArr)
  }
  if (result.resUpper) {
  combined = combined.concat(upperArr)
  }
  for (let i = 0; i < result.reslength; i++) {
    const randomCharacter = randomChar(combined);
    final.push(randomCharacter)
  }
  console.log(combined)
  return final.join('')
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// 1. GIVEN I need a new, secure password
//  WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria

// 2. WHEN prompted for password criteria
// THEN I select which criteria to include in the password

// 3. WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters

// 4. WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

// 5. WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected

// 6. WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

// 7. WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page