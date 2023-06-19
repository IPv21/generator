
const LOWER_CASE = "abcdefghijklmnopqrstuvwxyz "
const UPPER_CASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const SYMBOLS = "!@#$%^&*()?"
const NUMBERS = "0123456789"


function generatePassword() {
  var nmbrs = prompt("Enter Desired Password Length. Must Be Between 8 and 128 Digits.")
  if (nmbrs > 128 || nmbrs < 8) {
    return
  }

  var symbols = confirm("Would you like symbols in your password?")
  var lower_case = confirm("Would you like lower case letters?")
  var upper_case = confirm("Would you like upper case letters?")

  var characters = NUMBERS
  var password = ""
 for ( var counter = 0; counter < nmbrs ; counter ++  ){
    var randomIndex = Math.floor(Math.random() * characters.length);
    var randomCharacter = characters[randomIndex];
    console.log(randomCharacter) 
    password = password + randomCharacter
 }

    return password
    
}


 




// Get references to the #generate element
// const length = nmbrs


//   while (length > password.length) {
//     password += allChars[Math.floor(Math.random() * allChars.length)];


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

