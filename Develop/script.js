// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = lowerCase.toUpperCase();
var numbers = ['1','2','3','4','5','6','7','8','9','0'];
var specialChar = ['!','@','#','$','%','^','&','*','?'];

// Write password to the #password input
function generatePassword() {
  var passwordLength = prompt("Choose a password length of at least 8 characters and no nore than 128 characters");
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
