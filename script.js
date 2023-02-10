// Assignment code here
var upCaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P' ,'Q', 'R', 'S', 'T' , 'U', 'V', 'W', 'X', 'Y', 'Z']
var numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var lowCaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var specCharArr = ['!', '@', '#', '$', '%', '^', '&', '*', '/', '-', '+', '(', ')', '[', ']', '{', '}', '<', '>', '?', '~']
var charactorTypeArr = []
//  console.log(charGeneratorArr)





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
  // console.log(numChoice)
  return numChoice;
}

function upCase(){ 
  var randomUpCase = Math.floor(Math.random() * upCaseArr.length)
 var upChoice = upCaseArr[randomUpCase];
//  console.log(upChoice)
 return upChoice;
}

function lowCase(){
  randomLowCase = Math.floor(Math.random() * lowCaseArr.length);
  var lowChoice = lowCaseArr[randomLowCase];
  // console.log(lowChoice)
  return lowChoice;
}

function specCharacters(){
  randomSpecChar = Math.floor(Math.random() * specCharArr.length);
  var specChoice = specCharArr[randomSpecChar];
  // console.log(specChoice)
  return specChoice
}

function generatePassword(){
  charactorTypeArr.length = 0
   passwordLength = getLength()
  
   
   var numConfirmation = confirm('Include Number in Password?')
   if ( numConfirmation === true){
    charactorTypeArr.push(getNumChoices)
   } else if (numConfirmation === false){
    
   }
   var upConfirmation = confirm('include upper case letter?')
   if (upConfirmation === true){
    charactorTypeArr.push(upCase)
   } else if (upConfirmation === false){
    
   }
   var lowConfirmation = confirm('include lower case letters?')
   if (lowConfirmation === true){
    charactorTypeArr.push(lowCase);
   } else if (lowConfirmation === false){}
   var specConfirmation = confirm('include special characters?')
   if (specConfirmation === true){
    charactorTypeArr.push(specCharacters)
   } else if ( specConfirmation === false){}
   
   var result= ""
   for( let i = 0; i < passwordLength; i++){
    randomPassword = Math.floor(Math.random() * charactorTypeArr.length)
    characterType = charactorTypeArr[randomPassword]()
    // console.log(PasswordChoice)
    result += characterType
   }
   
// console.log(PasswordChoice)

  //generate it somehow
  return result
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
