// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = lowerCase.toString().toUpperCase().split(',');
var numbers = ['1','2','3','4','5','6','7','8','9','0'];
var specialChar = ['!','@','#','$','%','^','&','*','?','<','>','.','-','+','='];
var alphaNumeric = lowerCase.concat(upperCase, numbers, specialChar);

//confirm fxn
function selectCharset() {
  confirm("Include lowercase characters?");
  confirm("Include uppercase characters?");
  confirm("Include special characters?");
  confirm("Include numbers?");
}

//randomizer fnx

// Write password to the #password input
function generatePassword() {
   var passwordLength = window.prompt("Choose a password length of at least 8 characters and no nore than 128 characters");
    if (passwordLength >= 8 && passwordLength <= 128) {
      selectCharset()
   }

   else {
    alert("Password must be between 8-128 characters!");
}
}
  // return "Password Generated"

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//  function randomSelector(){
//  var random_string= '';
//  var characters = alphaNumeric;
//   for (var i, i = 0; i < alphaNumeric.length; i++){
//    random_string += characters(Math.floor(Math.random()*characters.length));
//    }
//   console.log(characters);
// }
