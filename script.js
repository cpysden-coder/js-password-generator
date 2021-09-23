// Assignment Code
var generateBtn = document.querySelector("#generate");

const charsToInclude = [];
const possibleChars = [];

//Arrays
const lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const numbers = ["0","1","2","3","4","5","6","7","8","9"];
const special = ["?","@","$","#","%","!"];

function printtoScreen() {
  console.log(lowercase);
  console.log(uppercase);
  console.log(numbers);
  console.log(special);
  return
};
printtoScreen();

function confirmSelection() {
  {confirm("Do you want lowercase letters in your password?")
    } if (true) {
      console.log("you want lowercase")
      charsToInclude.push("lc")
      console.log("include " + charsToInclude)
      }
  {confirm("Do you want Uppercase letters in your password?")
    } if (true) {
      console.log("you want UPPERCASE")
      charsToInclude.push("uc")
      console.log("include " + charsToInclude)
      }
  {confirm("Do you want numbers letters in your password?")
    } if (true) {
      console.log("you want numbers")
      charsToInclude.push("nu")
      console.log("include " + charsToInclude)
      }
  {confirm("Do you want numbers special characters in your password?")
    } if (true) {
      console.log("you want special characters")
      charsToInclude.push("sp")
      console.log("include " + charsToInclude)
      }
  if (charsToInclude.includes("lc")) {
    possibleChars.push(lowercase)
    // console.log(possibleChars)
  }
  if (charsToInclude.includes("uc")) {
    possibleChars.push(uppercase)
    // console.log(possibleChars)
  };
  if (charsToInclude.includes("nu")) {
    possibleChars.push(numbers)
    // console.log(possibleChars)
  };
  if (charsToInclude.includes("sp")) {
    possibleChars.push(special)
    console.log(possibleChars)
  };
  // let fullCharList = possibleChars.toString()
};

confirmSelection();

let random = ""

function randomItems() {
  random = prompt("How many characters do you want in your password (pick a number between 8 and 128 only please");
};

randomItems();

console.log(random);

let posscharstring = String(possibleChars)
console.log("this is a string: " + posscharstring)

let finalpossstring = posscharstring.replaceAll(",", "");
console.log(finalpossstring);

let posscharlength = finalpossstring.length;
console.log("total number of characters is " + posscharlength);

let position = Math.floor(Math.random() * posscharlength);
console.log("this is the position index: " + position);

let character = finalpossstring.charAt(position);
console.log("this is the character at position:" + character);

function possCharLen() {
  console.log(possibleChars.length)
  String(possibleChars)
  console.log(possibleChars)
  console.log(typeof possibleChars)
};
possCharLen();

console.log("include" + possibleChars)

// let fullCharList = possibleChars.toString();
console.log("you're possible characters are : " + possibleChars);

//from class Joe
function generatePassword() {
  return "password"
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", confirmSelection);
//generateBtn.addEventListener("click", writePassword);
// Add event listener for user confirmation
//generateBtn.addEventListener("click", confirmSelection);