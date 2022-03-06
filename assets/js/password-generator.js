
//write generated password to test area
function writePassword(password) {
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//enter password length and comment password generation
const generate = () => {
  let passwordLength = prompt("Enter password length (min 8 characters)");
  if (passwordLength != null && parseInt(passwordLength) >= 8) {
    const password = generatePassword(passwordLength);
    writePassword(password);

  }else{  
    alert("invalid input")
  } 
}
//generate password using passworth length enter by user
const generatePassword = (passwordLength) => {
  //password character pool to select from
  const spChars = ['$', '#', '!', '*', '%', '(', ')'];
  const alphas = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v','w', 'x', 'y', 'z'];
  const digits = [0,1,2,3,4,5,6,7,8,9];
  //generate random index positions of password character
  const spCount = 2;
  const numCount = 3;
  const letters = passwordLength - spCount - numCount;
  const lower = getRandValue(letters);
  const upper = letters - lower;
  const sppos = getSpChars(7, 2);
  const upperpos = getUpperCase(26, upper);
  const lowerpos = getLowerCase(26, lower);
  const digitspos = getDigits(10, numCount);
  
  let password = '';
  //combine generator ramdom characters to form password
   for(let i=0; i < upperpos.length; i++) {
    password += alphas[upperpos[i]].toUpperCase(); //combine upper case characters 
   }
   for(let i=0; i < sppos.length; i++) {
     password += spChars[sppos[i]]; //combine special characters and append to password
   }
   for(let i=0; i < lowerpos.length; i++) {
     password += alphas[upperpos[i]]; //combine lower case and append to password
   }
   for(let i=0; i < digitspos.length; i++) {
    password += digits[digitspos[i]]; //combine digits and append to password
   }
  return password;
}
const getRandValue = (n) => {
  //generate and return ramdom number between 0 and n
  return Math.floor(Math.random()  * n);
  }

const getSpChars = (n, c) => {
  //generate and return ramdom index positions for special characters
    let sp = [];
  while (sp.length < c) {
    sp.push(getRandValue(n));
  } 
  return sp;
}
const getUpperCase = (n, c) => {
  //generate and return ramdom index with opper case characters
  let sp = [];
  while (sp.length < c) {
    sp.push(getRandValue(n));
  } 
  return sp;
}
const getLowerCase = (n, c) => {
  //generate and return random index position for lower case characters
  let sp = [];
  while (sp.length < c) {
    sp.push(getRandValue(n));
  } 
  return sp;
}
const getDigits = (n, c) => {
  //generate and return random index position for digits
  let sp = [];
  while (sp.length < c) {
    sp.push(getRandValue(n));
  } 
  return sp;
}















