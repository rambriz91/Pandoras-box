// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  var passwordLength = prompt("Choose a length of at least 8 characters and no nore than 128 characters");
  confirm("Include lowercase characters?");
  confirm("Include uppercase characters?");
  confirm("Include special characters?");
  confirm("Include numbers?");
  return "Password Generated"
}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
