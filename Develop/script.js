// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = lowerCase.toString().toUpperCase().split(',');
var numbers = ['1','2','3','4','5','6','7','8','9','0'];
var specialChar = ['!','@','#','$','%','^','&','*','?'];
var alphaNumeric = lowerCase.concat(upperCase, numbers, specialChar);

function favnum() {
  var num = window.prompt("Favorite Number?");
  if (num == 8) {
    console.log("Me Too")
  }
  else {
    console.log("Aw Nuts!!")
  }
}


// Write password to the #password input
function generatePassword() {
   var passwordLength = window.prompt("Choose a password length of at least 8 characters and no nore than 128 characters");
    if (passwordLength < "8") {
      if (passwordLength > "128")
    alert("Password must be between 8-128 characters!");
   }

   else {
      confirm("Include lowercase characters?"); 
      confirm("Include uppercase characters?");
      confirm("Include special characters?");
      confirm("Include numbers?");
    }}
  

  // return "Password Generated"


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// When User clicks button they are prompted to choose a password length between 8-128 characters
// If input is <8, or > 128, then alert "password must be between 8-128 characters in length" and prompt passwordLength;
// else,
// confirm lowerCase
// confirm upperCase
// confirm numbers
// confirm specialChar

// if lowercase is confirmed then create password with lowercase,
// if lowercase, uppercase confirm then create password with lowerCase and upperCase
// if lowercase, uppercase

