///////////////////////// DO NOT CHANGE ////////////////////////////////////
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
///////////////////////// DO NOT CHANGE ABOVE HERE /////////////////////////

function generatePassword() {
  // initializing variables
  var includeUppercase  
  var includeLowercase 
  var includeSpecial 
  var includeNumbers 
  var characterCount

  // The characterCount variable is assigned the user input
  characterCount = prompt("How many characters? (8-128)")
  includeUppercase = prompt("Uppercase Y/N").toUpperCase()
  includeLowercase = prompt("Lowercase Y/N").toUpperCase()
  includeNumbers = prompt("Numbers Y/N").toUpperCase()
  includeSpecial = prompt("Special Y/N").toUpperCase()

  // logging the variables
  console.log(characterCount)
  console.log(includeUppercase)
  console.log(includeLowercase)
  console.log(includeSpecial)
  console.log(includeNumbers)

  if (characterCount <= 128 && characterCount >= 8)  {
    // code here 
  } else {
    return "NOPE"  
  }
  //validate includeUppercase
  if (includeUppercase === "Y" || includeUppercase === "N") {
    // code here 
  } else {
    return "NOPE"
  }
// validate includeLowercase
  if (includeLowercase === "Y" || includeLowercase === "N") {
    // code here 
  } else {
    return "NOPE"
  } 
// validate includeSpecial
  if (includeSpecial === "Y" || includeSpecial === "N") {
    // code here 
  } else {
    return "NOPE"
  }
 // validate includeNumbers
  if (includeNumbers === "Y" || includeNumbers === "N") {
    // code here 
  } else {
    return "NOPE"
  }

  if (includeUppercase === "N" && includeLowercase === "N" && includeNumbers === "N" && includeSpecial === "N") {
    return "NOPE"
  } 


}



