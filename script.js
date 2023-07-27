const LOWER_CASE = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const UPPER_CASE = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const SYMBOLS = ["!", "@", "#", "$", '%', "^", "&", "*", "(", ")"];
const NUMBERS = ['1', '2', '3', '4', '5', '6',  '7', '8', '9', '0'];

function generatePassword() {
  var nmbrs = prompt("Enter Desired Password Length. Must Be Between 8 and 128 Digits.");
  if (nmbrs > 128 || nmbrs < 8) {
    return;
  }

  var numbers = confirm("Would you like numbers in your password?");
  var symbols = confirm("Would you like symbols in your password?");
  var lower_case = confirm("Would you like lower case letters?");
  var upper_case = confirm("Would you like upper case letters?");
  
  var possibleCharacters = [];

  if (lower_case) {
    possibleCharacters = possibleCharacters.concat(LOWER_CASE);
  }
  if (upper_case) {
    possibleCharacters = possibleCharacters.concat(UPPER_CASE);
  }
  if (numbers) {
    possibleCharacters = possibleCharacters.concat(NUMBERS);
  }
  if (symbols) {
    possibleCharacters = possibleCharacters.concat(SYMBOLS);
  }

  var password = '';
  for (var counter = 0; counter < nmbrs; counter++) {
    var randomIndex = Math.floor(Math.random() * possibleCharacters.length);
    var randomCharacter = possibleCharacters[randomIndex];
    password = password + randomCharacter;
  }

  return password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);