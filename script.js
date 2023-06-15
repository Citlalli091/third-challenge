// Assignment Code
var generateBtn = document.querySelector("#generate");

// Function to prompt user for password
function promptUser() {
    // prompt user for password criteria
//    1. password length
        var passwordLength = prompt("How many characters do you want your password to contain?");
   //    2. whether the password should contain numeric characters
       var nums = confirm("click OK if you want your password to contain numeric characters");
   //    3. if the user wants special char's
       var specials = confirm("click OK for special characters");
   //    4. if they want lowercase letters
       var lowers = confirm("Click OK for lowercase letters");
   //    5. if they want uppercase letters
       var uppers = confirm("click OK for uppercase letters");
       
       console.log(passwordLength, nums, specials, lowers, uppers);
}

// Function to generate password
function generatePassword() {
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var specialChar = "!@#$%^&*/?";
    var numbers = "1234567890";
    console.log("Button was clicked. Function working so far..");
    
    for (var i = 0; i <= passwordLength; i++) {
        var randomNum = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNum, randomNum +1);
       }


// user input should have an output
    return "Insert future password";
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
