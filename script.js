// *did not work, need to create separate functions for each prompt
// Function to prompt user for password
// function promptUser() {
  //     // prompt user for password criteria
//       passwordLength = prompt("How many characters do you want your password to contain?");

//        var nums = confirm("click OK if you want your password to contain numeric characters");

//        var specials = confirm("click OK for special characters");

//        var lowers = confirm("Click OK for lowercase letters");

//        var uppers = confirm("click OK for uppercase letters");
//        console.log(passwordLength, nums, specials, lowers, uppers);

//       if (passwordLength >= 8 && passwordLength <= 128) {
  //         console.log("password is within reasonable length");
  //       } else {
    //         alert("Your password needs to be between 8 and 128 characters");
    //       }
    
    //        return promptUser;
    // }
    
    // Assignment Code
    var generateBtn = document.querySelector("#generate");
    
    // Add event listener to generate button
    generateBtn.addEventListener("click", writePassword);
    // generateBtn.addEventListener("click", promptUser);
    // Write password to the #password input
    function writePassword() {
      var password = generatePassword();
      var passwordText = document.querySelector("#password");
    
      passwordText.value = password;
    }

    // Create arrays for characters used in password
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]; //lowers
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]; //uppers
var specialChar = ["!","@","#","$","%","^","&","*","/","?"]; //specials
var numbers = ["1","2","3","4","5","6","7","8","9","0"]; //nums

function genActualPass(length) {
  let genString = "";
  for (let i = 0; i < length; i++) {
    genString += generatedString[Math.floor(Math.random() * generatedString.length)];
  }
  return genString;
}

// Function to generate password
function generatePassword() {
  generatedString = [];
  passwordLength = prompt("How many characters do you want your password to contain?");
  if (passwordLength >= 8 && passwordLength <= 128) {
    console.log("password is within reasonable length");
  } else {
    alert("Your password needs to be between 8 and 128 characters!");
    console.log("bro chose poorly the first time☠");
  }
  specials();
  lowers();
  uppers();
  nums();

    // if (nums) {
    //   genString = genString.concat(numbers)
    // } 
    // if (specials) {
    //   genString = genString.concat(specialChar)
    // } 
    // if (lowers) {
    //   genString = genString.concat(lowercase)
    // } 
    // if (uppers) {
    //   genString = genString.concat(uppercase)
    // } 
  return genActualPass(passwordLength);
}

function specials() {
  var specialChars = confirm("Do you want special characters in you password? click ok if so.");
  if (specialChars) {
    generatedString = generatedString.concat(specialChar)
    // console.log(generatedString);
  }
}

function uppers() {
  upperQs = confirm("Do you want uppercase letters in your password? Click OK if yes");
  if (upperQs) {
    generatedString = generatedString.concat(uppercase)
    // console.log(generatedString);
  }
}

function lowers() {
  lowersQs = confirm("Would you like to have lowercase letters?");
  if (lowersQs) {
    generatedString = generatedString.concat(lowercase)
    // console.log(generatedString);
  }
}

function nums() {
  var numbQ = confirm("would you like to have numbers in your password?");
  if (numbQ) {
    generatedString = generatedString.concat(numbers)
    // console.log(generatedString)
  }
}