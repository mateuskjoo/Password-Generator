function generatePassword() {
  var lowerLetter = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var upperLetter = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  var numberChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialChar = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "+",
    "?",
    "/",
    "-",
    ":",
    ";",
    "[",
    "]",
    "{",
    "}",
    ".",
    "<",
    ">",
    "=",
    "_",
    "`",
    "|",
    "~",
  ];
  var selectedArray = [];
  var passwordLength = getLength();
  var charTypeSelected = false;
  while (charTypeSelected == false) {
    var lowerChar = isSelected("lower");
    var upperCase = isSelected("upper");
    var numberCharacter = isSelected("number");
    var specialCharacter = isSelected("special");
    lowerChar || upperCase || numberCharacter || specialCharacter
      ? (charTypeSelected = true)
      : window.alert("You must select at least one character type.");
  }

  if (lowerChar) {
    selectedArray = selectedArray.concat(lowerLetter);
  }
  if (upperCase) {
    selectedArray = selectedArray.concat(upperLetter);
  }
  if (numberCharacter) {
    selectedArray = selectedArray.concat(numberChar);
  }
  if (specialCharacter) {
    selectedArray = selectedArray.concat(specialChar);
  }

  var passwordString = "";
  for (var i = 0; i < passwordLength; i++) {
    passwordString +=
      selectedArray[Math.floor(Math.random() * selectedArray.length)];
  }
  return passwordString;
}

function getLength() {
  var userChoice = null;
  while (userChoice < 8 || userChoice > 128) {
    userChoice = parseInt(
      window.prompt("Enter the number of characters between 8 and 128: ")
    );
    if (isNaN(userChoice)) {
      userChoice = null;
    }
  }
  return userChoice;
}

function isSelected(currentSelection) {
  var messagePrompt =
    "Would you like " + currentSelection + " characters (yes/no)?";
  while (true) {
    var userChoice = window.prompt(messagePrompt).toLowerCase();
    if (userChoice == "yes") {
      return true;
    } else if (userChoice == "no") {
      return false;
    } else {
      messagePrompt = "Invalid choice. " + messagePrompt;
    }
  }
}
var generateBtn = document.querySelector("#generate");
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

/* iteration#1 (fail)
function passOption() {
  var lenght = parseInt(
    prompt("How many characters would you like your password to have?")
  );
  if (Number.isNaN(lenght)) {
    alert("Password character lenght must be written numerically");
    return null;
  }
  if (lenght > 128) {
    alert("Password lenght must be less than or equal to 128 characters");
    return null;
  }
  if (lenght < 8) {
    alert("Password lenght must be greater than or equal to 8 characters");
    return null;
  }

  var hasLower = confirm("Will your password include lower case?");
  var hasUpper = confirm("Will your password include upper case?");
  var hasNumber = confirm("Will your password include numbers?");
  var hasSpecChar = confirm("Will your password include special characters?");

  if (
    hasLower === false &&
    hasUpper === false &&
    hasNumber === false &&
    hasSpecChar === false
  ) {
    alert("Password must contain at least one type of character");
    return null;
  }

  var passwordOptions = {
    length: length,
    hasLower: hasLower,
    hasUpper: hasUpper,
    hasNumber: hasNumber,
    hasSpecChar: hasSpecChar,
  };
  return passOptions;
}
 */
/* 
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

let hasLower
let hasUpper
let hasNumber
let hasSpecChar

const passPrompt = () ==> 
passLenght = parseInt(prompt("How many characters would you like your password to have?"))
hasLower = confirm("Do you want lowercase characters?")
hasUpper = confirm("Do you want uppercase characters?")
hasNumber = confirm("Do you want numbers?")
hasSpecChar = confirm("Do you want special characters?")
console.log(passLenght, hasLower, hasNumber, hasSpecChar, hasUpper)
if (isNaN(passLenght))===true || passLenght<8 || passLenght>128 {
  alert("Password lenght must be represented numercally and be a number between 8 and 128")
} */
/* 
function genPass(lenght, hasLower, hasUpper, hasNumber, hasSpecChar) {
  let genPass = ""
  const typesCount = [hasLower, hasUpper, hasNumber, hasSpecChar;
  console.log("typesCount", typesCount);
  const typesArr = [{hasLower}, {hasUpper}, {hasNumber}, {hasSpecChar}].filter 
  (item ==> Object.values(item))[0]
  console.log("typesArr: " typesArr)
}
passOption(); */
/* 
 iteration #2 (fail)
 var userUser = [];
var userOption = [];

function getLength() {
  var length = parseInt(
    prompt("How many characters would you like your character to have?")
  );
  if (Number.isNaN(length)) {
    alert("Password character length must be written numerically");
    return null;
  }
  if (length > 128) {
    alert("Password length must be less than or equal to 128 characters");
    return null;
  }
  if (length < 8) {
    alert("Password length must be greater than or equal to 8 characters");
    return null;
  }
  var hasLower = confirm("Will your password include lower case?");
  var hasUpper = confirm("Will your password include upper case?");
  var hasNumber = confirm("Will your password include numbers?");
  var hasSpecChar = confirm("Will your password include special characters?");
  if (
    hasUpper == false &&
    hasLower == false &&
    hasSpecChar == false &&
    hasNumber == false
  ) {
    alert("You must chose at least one variable");
    return null;
  }

  if (hasUpper == true) {
    userOption = userOption.concat(allChar.letterUpper);
  }
  if (hasLower == true) {
    userOption = userOption.concat(allChar.letterLower);
  }
  if (hasNumber == true) {
    userOption = userOption.concat(allChar.specialChar);
  }
  if (hasSpecChar == true) {
    userOption = userOption.concat(allChar.numberChar);
  }
  console.log(getLength);
  return getLength;
}

function generatePassword() {
  let userUser = "";
for (let i = 0; i < getLength; i++) {
  userUser +=
    AllPossibleChars[Math.floor(Math.random() * AllPossibleChars.length)];
}
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); */
