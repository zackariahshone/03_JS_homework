// Assignment Code
var generateBtn = document.querySelector("#generate");
//setup variables for strings later use
//setup as let becasue the string will either be empty or full 
//depending on the users answer
let uCase = "";
let lCase = "";
let numStr = "";
let specChar = "";
let pLength;

 let inputU = "";
 let inputL =  "";
 let inputN = "";
 let inputS = "";

//creat a function to gather info from the user to decide what character usage the user would like. 


function testDo(){
let userInput; 
let userInput2;
do{
 userInput = prompt("y or n");
 userInput2 = prompt("Y or N");
}
while(userInput === '' || userInput2 === '');
}
 

function preferences() {
do{
  inputU = prompt("Use Upper Case: Y N").toLowerCase();
  inputL = prompt("Use Lower Case: Y N").toLowerCase();
  inputN = prompt("Use Numeric: Y N").toLowerCase();
  inputS = prompt("User Special Char: Y N").toLowerCase();

  if(inputU !== "y" && inputU !== "n" ||
  inputL !== "y" && inputL !== "n" ||
  inputN !== "y" && inputN !== "n" ||
  inputS !== "y" && inputS !== "n"){
    alert("something was blank start over");
  } 


}
  //using the input in some logic to check and use what was selected
   //proofing the answer
  while(inputU !== "y" && inputU !== "n" ||
      inputL !== "y" && inputL !== "n" ||
      inputN !== "y" && inputN !== "n" ||
      inputS !== "y" && inputS !== "n") 

  if (inputU === "y") {
    console.log(inputU);
    uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    console.log(uCase);
  }
  else if (inputU === "n") {
    uCase = "";
  }
  if (inputL === "y") {
    lCase = "abcdefghijklmnopqrstuvwxyz";
    console.log(lCase);
  } else if (inputL === "n") {
    lCase = "";
  }
  if (inputN === "y") {
    numStr = "1234567890";
    console.log(numStr);
  } else if (inputN === "n") {
    numStr = "";
  }
  if (inputS === "y") {
    specChar = "!@#$%^&*()";
    console.log(specChar);
  } else if (inputS === "n") {
    specChar = "";
  }

 


  //create on string out of the selecting options 
  let passChar = uCase.concat(lCase, numStr, specChar);
  //checking what we are working with
  console.log("this is the new selection of characters for the password: " + passChar);
  return passChar;
}
// Write password to the #password input
function generatePassword() {
  const passChar =  preferences();

  console.log("set gneratePasswod is working with: " + passChar);
  //do while to repeat the prompt if the user does not enter an int between 8 and 128
  do {
    pLength = prompt("Password needs to be between 8 and 128 numbers long: ");
    if (pLength < 8) {
      alert("password length too small");
    }
    if (pLength > 128) {
      alert("password length too big")
    }
  } while (pLength < 8 || pLength > 128)//end while

  let pWord = ""; //pWord starting empty 

  for (let i = 0; i < pLength; i++) {
    pWord = pWord + passChar.charAt(Math.floor(Math.random() * passChar.length - 1));
  }
  return pWord;
}

function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//<button id='test' class ="btn" > test this </button>
document.getElementById('test').addEventListener('click', testDo);
