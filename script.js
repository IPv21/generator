// Assignment code here
var nmbrs = prompt("Enter Desired Password Length. Must Be Between 8 and 128 Digits.") 
if (nmbrs < 129 && nmbrs > 7) {
  writePassword()
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

