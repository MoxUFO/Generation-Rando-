// Assignment code here
var upCaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P' ,'Q', 'R', 'S', 'T' , 'U', 'V', 'W', 'X', 'Y', 'Z']
var numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var lowCaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var specCharArr = ['!', '@', '#', '$', '%', '^', '&', '*', '/', '-', '+', '(', ')', '[', ']', '{', '}', '<', '>', '?', '~']
var charGeneratorArr = []




function getLength(){
  var passwordLength = prompt("What's the desired number of characters between 8-128 as an integer")
  if(passwordLength >= 8 && passwordLength <= 128){
    return passwordLength
  } 
  console.log("It's invalid")
  return getLength()
}

function getNumChoices(){
  var randomNum = Math.floor(Math.random() * numArr.length);
  var numChoice = numArr[randomNum];
  return numChoice;
}

function upCase(){ 
  var randomUpCase = Math.floor(Math.random() * upCaseArr.length)
 var upChoice = upCaseArr[randomUpCase];
 return upChoice;
}

function lowCase(){
  randomLowCase = Math.floor(Math.random() * lowCaseArr.length);
  var lowChoice = lowCaseArr[randomLowCase];
  return lowChoice;
}

function specCharacters(){
  randomSpecChar = Math.floor(Math.random() * specCharArr.length);
  var specChoice = specCharArr[randomSpecChar];
  return specChoice
}

function generatePassword(){
  var passwordLength = getLength()
  console.log(passwordLength)
  var numChoice = getNumChoices()
  var upChoice= upCase()
  var lowChoice = lowCase()
  var specChoice = specCharacters()


  //generate it somehow
  return password
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
