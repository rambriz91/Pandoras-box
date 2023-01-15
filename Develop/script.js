// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = lowerCase.toString().toUpperCase().split(',');
var numbers = ['1','2','3','4','5','6','7','8','9','0'];
var specialChar = ['!','@','#','$','%','^','&','*','?','<','>','.','-','+','='];
var charList = [];
var password = "";

//confirm fxn
function selectCharset() {
  if (confirm("Include lowercase characters?")) {
  charList = charList.concat(lowerCase);
  }
  
  if (confirm("Include uppercase characters?")) {
    charList = charList.concat(upperCase);
  }

  if (confirm("Include special characters?")) {
      charList = charList.concat(specialChar);
  }

  if (confirm("Include numbers?")) {
        charList = charList.concat(numbers);
  }
}

//randomizer fnx

function randomizer(passwordLength){
  
  for (var i =0; i < passwordLength; i++) {
password += charList[Math.floor(Math.random() * charList.length) ]
  }

  return password;
}

// Write password to the #password input
function generatePassword() {
   var passwordLength = window.prompt("Choose a password length of at least 8 characters and no nore than 128 characters");
    if (passwordLength >= 8 && passwordLength <= 128) {
      selectCharset();
      var randomPassword = randomizer(passwordLength);
   }

   else {
    alert("Password must be between 8-128 characters!");
}
    return randomPassword;
}
  // return "Password Generated"

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  alert("Password Generated")
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




