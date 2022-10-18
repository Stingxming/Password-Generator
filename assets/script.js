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
  
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" .split("")
  var lowercase = "abcdefghijklmnopqrstuvwxyz" .split("")
  var special = "~!@#$%^&*()_+{}:\"<>?,./';[]|\\=-" .split("")
  var numbers = "1234567890" .split("")
  var password = []
  var possibleCharacters = []
  var guaranteedCharacters = [] 

  // The characterCount variable is assigned the user input
  characterCount = parseInt(prompt("How many characters? (8-128)"))
  if(Number.isNaN(characterCount)) {
    alert("Password length must be provided as a number")
    return null
    // the if condition prohibits the user from entering anything other than a number, return null exits the user from the fucntion and sets a "Null" value to characterCount
  }

  if(characterCount < 8 || characterCount > 128) {
    alert ("password length must be between 8 and 128 characters")
    return null
  }

  includeUppercase = confirm("Click ok to include uppercase letters or cancel")
  includeLowercase = confirm("Click ok to include lowercase letters or cancel")
  includeNumbers = confirm("Click ok to include numbers or cancel")
  includeSpecial = confirm("Click ok to include special characters or cancel")

  // logging the variables
  console.log(characterCount)
  console.log(includeUppercase)
  console.log(includeLowercase)
  console.log(includeSpecial)
  console.log(includeNumbers)

  if(includeUppercase === false
    && includeLowercase === false
    && includeNumbers === false
    && includeSpecial === false
    && includeNumbers === false) {
      alert ("Must select at least one character type")
      return null
    }

    var passwordOptions = {
      characterCount: characterCount,
      includeLowercase: includeLowercase,
      includeUppercase: includeUppercase,
      includeSpecial: includeSpecial,
      includeNumbers: includeNumbers
    }

 if (!passwordOptions) return null
 
 if (passwordOptions.includeLowercase) {
  possibleCharacters = possibleCharacters.concat(lowercase)
  guaranteedCharacters.push(randomize(lowercase))
 }

 if (passwordOptions.includeUppercase) {
  possibleCharacters = possibleCharacters.concat(uppercase)
  guaranteedCharacters.push(randomize(uppercase))
 }

 if (passwordOptions.includeSpecial) {
  possibleCharacters = possibleCharacters.concat(special)
  guaranteedCharacters.push(randomize(special))
 }

 if (passwordOptions.includeNumbers) {
  possibleCharacters = possibleCharacters.concat(numbers)
  guaranteedCharacters.push(randomize(numbers))
 }

 for (var i=0; i < passwordOptions.characterCount; i++) {
  var possibleCharacter = randomize (possibleCharacters)
  password.push (possibleCharacter)
 } 

 for (var i=0; i < guaranteedCharacters.length; i++) {
  password [i] = guaranteedCharacters [i]
 }

 return password.join ("")
//   if (characterCount <= 128 && characterCount >= 8)  {
//     // code here 
//   } else {
//     return "NOPE"  
//   }
//   //validate includeUppercase
//   if (includeUppercase === "Y" || includeUppercase === "N") {
//     // code here 
//   } else {
//     return "NOPE"
//   }
// // validate includeLowercase
//   if (includeLowercase === "Y" || includeLowercase === "N") {
//     // code here 
//   } else {
//     return "NOPE"
//   } 
// // validate includeSpecial
//   if (includeSpecial === "Y" || includeSpecial === "N") {
//     // code here 
//   } else {
//     return "NOPE"
//   }
 // validate includeNumbers
  // if (includeNumbers === "Y" || includeNumbers === "N") {
  //   // code here 
  // } else {
  //   return "NOPE"
  // }

  // if (includeUppercase === "N" && includeLowercase === "N" && includeNumbers === "N" && includeSpecial === "N") {
  //   return "NOPE"
  // } 
  

}

function randomize (arr) {
  var randomIndex = Math.floor (Math.random ()*arr.length)
  var randomElement = arr[randomIndex]
  return randomElement
}

