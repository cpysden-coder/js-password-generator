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

//Prompt for length of password from user input and store in variable
//Convert array of possible characters to string 
//Calculate length of string and get random indexes

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

console.log("include" + possibleChars)

//TODO:Based on code above run a for loop to iterate thru length of password and generate and store values of random indexes.


//TODO: iterate through a string
let randomIndex = [];
var myStringArray = ["Hello","World"];
var arrayLength = myStringArray.length;
for (var i = 0; i < random; i++) {
    console.log(finalpossstring[i]);
    //TODO:Do something - generate a random index number - generates errors still
    randomIndex.push(Math.floor(Math.random() * (posscharlength)))
    console.log("this is the random index: " + randomIndex)
    }
    // randInx();
    //TODO:Do something - get character at position random in finalpossstring
    //TODO:push to an array

console.log(randomIndex);
let plassword = []
randomIndex.forEach(element => console.log(finalpossstring[element]));
randomIndex.forEach(element => plassword.push(finalpossstring[element]));
console.log(plassword);
let duck = plassword.toString();
console.log(typeof duck);
console.log(duck + " again");
console.log(duck.charAt([2]));
let bird = duck.replaceAll(",", "");
console.log(bird + " again");
//var result = plassword.replace(",", "1");
// let p = password;
// let jj = p.replace(",", "red");
// console.log(jj + " yet again");

// let fullCharList = possibleChars.toString();
console.log("you're possible characters are : " + possibleChars);




//from class Joe
// function generatePassword() {
//   return bird
// };

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
document.getElementById("password").textContent = bird
// Add event listener to generate button
generateBtn.addEventListener("click", confirmSelection);
//generateBtn.addEventListener("click", writePassword);
// Add event listener for user confirmation
//generateBtn.addEventListener("click", confirmSelection);