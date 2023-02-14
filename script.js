// Assignment code here
var upCaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P' ,'Q', 'R', 'S', 'T' , 'U', 'V', 'W', 'X', 'Y', 'Z']
var numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var lowCaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var specCharArr = ['!', '@', '#', '$', '%', '^', '&', '*', '/', '-', '+', '(', ')', '[', ']', '{', '}', '<', '>', '?', '~']
var charactorTypeArr = []
//  console.log(charGeneratorArr)




// this function prompts user to choose desired password length. this number is then returned to be used later in the for loop
function getLength(){
  var passwordLength = prompt("What's the desired number of characters between 8-128 as an integer")
  if(passwordLength >= 8 && passwordLength <= 128){
    return passwordLength
  } 
  console.log("It's invalid")
  return getLength()
}
// code line 22-48 are functions that irerates over the specified array to chooses a random chacracter from that array.
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
  
   //code lines 55- 70 create a series of confirmaton promts that determines if user wants specified character type in their password.
   //each confirmed choice then pushes the corresponding functrion into an empty array on line 6
   var numConfirmation = confirm('Include Number in Password?')
   if ( numConfirmation === true){
    charactorTypeArr.push(getNumChoices)
   } else if (numConfirmation === false){}
   var upConfirmation = confirm('include upper case letter?')
   if (upConfirmation === true){
    charactorTypeArr.push(upCase)
   } else if (upConfirmation === false){}
   var lowConfirmation = confirm('include lower case letters?')
   if (lowConfirmation === true){
    charactorTypeArr.push(lowCase);
   } else if (lowConfirmation === false){}
   var specConfirmation = confirm('include special characters?')
   if (specConfirmation === true){
    charactorTypeArr.push(specCharacters)
   } else if ( specConfirmation === false){}
   
   // the following for loop takes the previusly  empty array of line 6 and irerates over the functions the were add via the confirmation prompts
   // each iteration, calls the a chartacter type function  randomly which then produces a random character from that array via the character type fnction.
   //each selection is then added to an empty string, the string is now the randomly choosen password
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
