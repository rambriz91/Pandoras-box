// Universal Variables and Arrays
var generateBtn = document.querySelector("#generate");

var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = lowerCase.toString().toUpperCase().split(',');
var numbers = ['1','2','3','4','5','6','7','8','9','0'];
var specialChar = ['!','@','#','$','%','^','&','*','?','<','>','.','-','+','='];
var charList = [];

//confirm fxn fills in CharList
function selectCharset() {
  charList = [];
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

//randomizer fxn
function randomizer(passwordLength) {
  retVal = "";
  for (var i =0; i < passwordLength; i++) {
  retVal += charList[Math.floor(Math.random() * charList.length) ]
  }

  return retVal;
}

// generate password fxn
function generatePassword() {
  var passwordLength = window.prompt("Choose a password length of at least 8 characters and no nore than 128 characters");
    if (passwordLength >= 8 && passwordLength <= 128) {
      selectCharset();
      randomizer(passwordLength);
      alert("Password Generated");
  }

  else {
    alert("Password must be between 8-128 characters!");
}
    return retVal;
    
}

//writes password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Event listener
generateBtn.addEventListener("click", writePassword);






